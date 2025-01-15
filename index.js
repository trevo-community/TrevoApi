/* @CLOVERMYT */

// Canal: https://youtube.com/@clovermyt

// Canal WhatsApp: https://whatsapp.com/channel/0029Va974hY2975B61INGX3Q

// Instagram: https://www.instagram.com/clovermods?igsh=MmcyMHlrYnhoN2Zk

// Telegram: t.me/cinco_folhas

// Comunidade WhatsApp: https://chat.whatsapp.com/Kc5HLGCIokb37mA36NJrM6

// SE FOR REPOSTAR ME MARCA 🧙‍♂️🍀

const axios = require('axios');
var express = require('express'),
  cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const session = require('express-session');
const path = require('path');
const MemoryStore = require('memorystore')(session);
const fs = require('fs');
const { token } = require("./config.js");
const htmlPath = path.join(__dirname, './views/error.html');
const creator = "CM";

const loghandler = {
  notparam: {
    status: false,
    criador: creator,
    codigo: 406,
    mensagem: 'Sem Saldo'
  },
  error: {
    status: false,
    criador: creator,
    codigo: 404,
    mensagem: '404 ERROR'
  }
};
var app = express()
app.enable('trust proxy');
app.set("json spaces", 2)
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 86400000 },
  store: new MemoryStore({
    checkPeriod: 86400000
  }),
}));
app.use(cors())
app.use(express.static("public"))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'seuSegredo',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, 
  }
}));

mongoose.connect(token, { useNewUrlParser: true, useUnifiedTopology: true });
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  key: { type: String, required: true },
  saldo: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  ft: { type: String, default: null },
  yt: { type: String, default: null },
  zap: { type: String, default: null },
  insta: { type: String, default: null },
  wallpaper: { type: String, default: null },
  isAdm: { type: Boolean, default: false },
});

const User = mongoose.model('Lady', userSchema);
Person = User;
async function diminuirSaldo(username) {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return false;
    }
    if (user.isAdm) {
      console.log('Usuário premium ou administrador. Saldo não será diminuído.');
      return false;
    }

    if (user.saldo > 0) {
      user.saldo--;
      await user.save();
      return true;
    } else {
      return false; 
    }
  } catch (error) {
    console.error('Erro ao diminuir saldo:', error);
    return false;
  }
}

async function adicionarSaldo(username) {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return false;
    }
    user.total += 1;
    await user.save();
    return true;
  } catch (error) {
    console.error('Erro ao adicionar total:', error);
    return false;
  }
}

async function readUsers() {
  try {
    return await User.find();
  } catch (error) {
    console.error('Erro ao acessar o banco de dados:', error);
    return [];
  }
}

async function saveUsers(users) {
  try {
    await User.deleteMany();
    await User.insertMany(users);
  } catch (error) {
    console.error('Erro ao salvar os dados no banco de dados:', error);
  }
}



// ============== ROTAS DE CONFIGURACAO DA API ==============\\

app.get('/', async (req, res) => {
  const user = req.session.user;
  if (!user) {
    return res.redirect('/login');
  }
  const { username, password } = user;
  try {
    const userDb = await User.findOne({ username, password });
    const quantidadeRegistrados = await User.countDocuments();
    const topUsers = await User.find().sort({ saldo: -1 }).limit(5);
    return res.render('dashboard', { user, userDb, topUsers, quantidade: quantidadeRegistrados });
  } catch (error) {
    console.error('Erro ao processar a rota:', error);
    return res.status(500).send('Erro interno ao processar a rota.');
  }
});


app.get('/myperfil', async (req, res) => {
  const user = req.session.user;
  if (user) {
    const { username, password } = user;
      const userDb = await User.findOne({ username, password });
      const users = userDb;
      const quantidadeRegistrados = await User.countDocuments();
      const topUsers = await User.find().sort({ total: -1 }).limit(7);
      return res.render('myperfil', { user, userDb, users, topUsers, quantidade: quantidadeRegistrados });
}
});

app.get('/search', async (req, res) => {
  const searchTerm = req.query.search || '';
  try {
    const searchResults = await User.find({ username: { $regex: searchTerm, $options: 'i' } });
    return res.render('search', { searchTerm, searchResults });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
  }
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).send('Nome de usuário já existe. Por favor, escolha outro.');
    }
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const keycode = Math.floor(100000 + Math.random() * 900000).toString();
    const ft = "https://telegra.ph/file/f932f56e19397b0c7c448.jpg";
    const saldo = 0; 
    const total = 0;
    const key = keycode;
    const insta = "@clovermods"
    const zap = "55759865969696"
    const yt = "youtube.com/@clovermods"
    const wallpaper = "https://telegra.ph/file/56fa53ec05377a51311cc.jpg"
    const user = new User({ username, password, email, key, saldo, total, ft, zap, insta, yt, wallpaper, isAdm: false });
    await user.save();
    console.log(user)
    req.session.user = user;
    res.redirect('/');

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
});
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const senha = password
  const user = await User.findOne({ username });
  if (user) {
    try {
      if (user.password !== senha) {
        return res.status(401).send('Nome de usuário ou senha incorretos. Por favor, tente novamente.');
      }
      req.session.user = user;
      res.redirect('/');
    } catch (error) {
      console.error('Erro ao acessar o banco de dados:', error);
      return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
    }
  } else {
    res.status(401).json({ message: 'Usuário não encontrado.' });
  }

})

app.get('/admin', async (req, res) => {
  const user = req.session.user;
  if (user) {
    try {
      const isAdmin = await User.findOne({ _id: user._id, isAdm: true });
      if (isAdmin) {
        const users = await User.find();
        return res.render('adminDashboard', { users, user });
      } else {
        return res.sendFile(htmlPath);
      }
    } catch (error) {
      console.error('Erro ao acessar usuários:', error);
      return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
    }
  } else {
    return res.sendFile(htmlPath);
  }
});

app.get('/editar/:username', async (req, res) => {
  const { user: currentUser, senha: currentPassword } = req.session;
  const { username: targetUsername } = req.params;
  const specialKey = 'SUPREMnO';
  try {
    const user = await User.findOne({ username: targetUsername });
    if (!user) {
      return res.status(404).send('Usuário não encontrado.');
    }
    const isAdminOrSpecialUser = currentUser.isAdm || currentUser.key === specialKey;
    if (!isAdminOrSpecialUser && (user.key !== currentPassword || user.username !== currentUser.username)) {
      return res.status(401).send('Acesso não autorizado para editar.');
    }
    res.render('edit', { user });
  } catch (error) {
    console.error('Erro ao acessar o banco de dados:', error);
    return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
  }
});

app.get('/deletar/:username', async (req, res) => {
  const { user: currentUser, senha: currentPassword } = req.session;
  const { username: targetUsername } = req.params;
  const specialKey = 'clover';
  try {
    const user = await User.findOne({ username: targetUsername });
    if (!user) {
      return res.status(404).send('Usuário não encontrado.');
    }
    const isAdminOrSpecialUser = currentUser.isAdm || currentUser.key === specialKey;
    if (!isAdminOrSpecialUser && (user.key !== currentPassword || user.username !== currentUser.username)) {
      return res.status(401).send('Acesso não autorizado para deletar.');
    }
    await User.deleteOne({ username: targetUsername });
    res.redirect('/');
  } catch (error) {
    console.error('Erro ao acessar o banco de dados:', error);
    return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
  }
});


app.post('/edit/:username', async (req, res) => {
  const { username } = req.params;
  const { password, key, ft, saldo, total, isAdm } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send('Usuário não encontrado.');
    }
    const isAdmValue = isAdm === 'true';
    user.password = password || user.password;
    user.key = key || user.key;
    user.ft = ft || user.ft;
    user.saldo = saldo || user.saldo;
    user.isAdm = isAdmValue;
    user.total = total || user.total;
    await user.save();
    return res.redirect('/');
  } catch (error) {
    console.error('Erro ao acessar o banco de dados:', error);
    return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
  }
});


app.post('/editarr/:username', async (req, res) => {
  const { username } = req.params;
  const { password, key, ft, insta, wallpaper, zap, yt } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send('Usuário não encontrado.');
    }
    user.password = password || user.password;
    user.key = key || user.key;
    user.ft = ft || user.ft;
    user.yt = yt || user.yt;
    user.insta = insta || user.insta
    user.zap = zap || user.zap
    user.wallpaper = wallpaper || user.wallpaper
    await user.save();
    return res.redirect('/login');
  } catch (error) {
    console.error('Erro ao acessar o banco de dados:', error);
    return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
  }
});
// ============== ROTAS NORMAIS DA API ==============\\








// ============== ROTAS NORMAIS DA API ==============\\

app.listen(3000, () => {
  console.log("Server rodando: http://localhost:3000")
})

module.exports = app
/* @CLOVERMYT */