/*==========\\

LadyBot 4.7

//==========*/

const {
  downloadContentFromMessage,
  relayWAMessage,
  mentionedJid,
  processTime,
  MediaType,
  Browser,
  MessageType,
  Presence,
  Mimetype,
  Browsers,
  delay,
  getLastMessageInChat,
  BufferJSON,
} = require("baileys");

//_-_-_-__-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-__-_-_-_-_-\\

const Uploader = require("./dados/upload.js"); // caminho até seu arquivo upload.js
const uploader = new Uploader(); // cria uma instância da classe

// Sistema de conversão de áudios para OGG/Opus (compatibilidade universal)
const {
  convertPathToOgg,
  sendAudioMessage,
  prepareAudioForWhatsApp,
} = require("./dados/org/funcoes/audio_converter.js");

const {
  fs,
  axios,
  crypto,
  util,
  P,
  linkfy,
  request,
  cheerio,
  ms,
  ffmpeg,
  qrterminal,
  exec,
  spawn,
  execSync,
  moment,
  color,
  time,
  hora,
  date,
  getBuffer,
  convertSticker,
  recognize,
  fetchJson,
  fetchText,
  getBase64,
  response,
  upload,
  nit,
  validmove,
  setGame,
  supre,
  wait,
  getExtension,
  generateMessageID,
  getGroupAdmins,
  getMembros,
  getRandom,
  banner2,
  banner3,
  temporizador,
  chyt,
  kyun,
  simih,
  botoff,
  colors,
  comand,
  rgp,
  rg_aluguel,
  infos,
  bloq_global,
  fetch,
} = require("./consts-func.js");

//-_-_-_-_-_--_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const {
  menu,
  anotacao,
  menudono,
  adms,
  menulogos,
  efeitos,
  menuprem,
  brincadeiras,
  infodono,
  gitdobot,
  configbot,
  cmd_termux,
  alteradores,
  tabela,
  conselhob,
  palavrasc,
  ban,
  nescessario,
  setting,
  logoslink,
  premium,
  countMessage,
  sendVideoAsSticker,
  sendImageAsSticker,
  sendVideoAsSticker2,
  sendImageAsSticker2,
  daily,
  limitefll,
  antispam,
  rggold,
  anotar,
  black_,
  enviarfiguUrl,
  getFileBuffer,
  DLT_FL,
  sleep,
  ANT_LTR_MD_EMJ,
  Limit_CMD,
  recolherLNK,
  SIMI_OFC,
} = require("./consts-func.js");

const {
  paidHours,
  savePaid,
  addGroupInPaid,
  getGroupInPaid,
  getIDinPaid,
  addPaid,
  rmPaid,
  isIDinPaid,
  groupLinkPaid,
  paidSGL,
  addGroupLinkInPaid,
  getGroupLinkFromPaidID,
  getInfoPaidGroupLink,
  rmGroupLinkInPaid,
  paidFunc,
} = require("./operacao/horarios/paid_hours.js");

const sendFutureTime = (dados) => {
  hr = moment.tz("America/Sao_Paulo");
  for (i of dados) {
    hr = hr.add(i.valor, i.type);
  }
  return hr.calendar();
};

function saveJSON(inter, caminho) {
  fs.writeFileSync(caminho, JSON.stringify(inter, null, 2));
}

const {
  openclosegp,
  saveOpenCloseGP,
  rgGroupOCfunc,
  getGroupOpenCloseFunc,
  addOpenCloseGP,
  rmOpenCloseGP,
  isIDopenCloseGP,
  ABRIR_E_FECHAR_GRUPO,
  getLastOpenCloseGP,
} = require("./operacao/abrir-fechar-grupo/index.js");

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

var {
  antipv3,
  TOKEN_GPT,
  TOKEN_DROPBOX,
  cmdpremium,
  msgantipv1,
  msgantipv2,
  dono1,
  dono2,
  dono3,
  dono4,
  dono5,
  dono6,
  dono1_lid,
  dono2_lid,
  dono3_lid,
  dono4_lid,
  dono5_lid,
  dono6_lid,
} = require("./dono/nescessario.json");

const Links_P = require("./dados/links.json");

var {
  fundo1,
  fundo2,
  imgnazista,
  imggay,
  imgcorno,
  imggostosa,
  imggostoso,
  imgfeio,
  imgvesgo,
  imgbebado,
  imggado,
  matarcmd,
  beijocmd,
  chutecmd,
  tapacmd,
  rnkgay,
  rnkgado,
  rnkcorno,
  rnkgostoso,
  rnkgostosa,
  rnknazista,
  rnkgolpista,
  rnkotaku,
  rnkpau,
} = require("./dados/links.json");

var { NomeDoBot, NickDono, prefix } = require("./dados/settings.json");

const { TEXTOS_GERAL } = require("./dono/textos.js");

const Api = require("./req.js");

try {
  var groupMetadata_RG = JSON.parse(
    fs.readFileSync("./dados/global/groups.json")
  );
} catch {
  fs.writeFileSync("./dados/global/groups.json", JSON.stringify([], null, 2));
}

var reqapi = new Api("XRL8");

//====================≠≠===============\\

const SNET = "@s.whatsapp.net";
const LID_NET = "@lid";

// Funções Auxiliares para Compatibilidade com LID (Baileys 7.0+)
function normalizeJid(jid) {
  if (!jid) return jid;
  if (jid.endsWith("@s.whatsapp.net")) return jid;
  if (jid.includes("@lid")) return jid.replace("@lid", "@s.whatsapp.net");
  if (!jid.includes("@")) return jid + "@s.whatsapp.net";
  return jid;
}

function extractNumber(jid) {
  if (!jid) return "";
  return jid.split("@")[0];
}

function areJidsEqual(jid1, jid2) {
  if (!jid1 || !jid2) return false;
  return extractNumber(jid1) === extractNumber(jid2);
}

function isJidInList(jid, list) {
  if (!jid || !Array.isArray(list)) return false;
  const number = extractNumber(jid);
  return list.some((item) => extractNumber(item) === number);
}

function addJidToList(jid, list) {
  if (!jid) return list;
  const normalized = normalizeJid(jid);
  if (!isJidInList(normalized, list)) {
    list.push(normalized);
  }
  return list;
}

function removeJidFromList(jid, list) {
  if (!jid || !Array.isArray(list)) return list;
  const number = extractNumber(jid);
  return list.filter((item) => extractNumber(item) !== number);
}

// Funções auxiliares para extrair ID de participantes (Baileys 7.0+)
// CORRIGIDO: Agora prioriza JID completo e trata LID corretamente
function getParticipantId(participant) {
  if (!participant) return "";

  // Se já é uma string, retornar diretamente
  if (typeof participant === "string") {
    return participant;
  }

  // Se é um objeto, priorizar id e phoneNumber
  if (typeof participant === "object" && participant !== null) {
    // 1. Prioridade: id (JID completo)
    if (participant.id && participant.id.includes("@")) {
      return participant.id;
    }

    // 2. Segunda opção: phoneNumber (geralmente é o JID completo)
    if (participant.phoneNumber && participant.phoneNumber.includes("@")) {
      return participant.phoneNumber;
    }

    // 3. Terceira opção: id sem @ (adicionar @s.whatsapp.net)
    if (participant.id) {
      return participant.id.includes("@")
        ? participant.id
        : `${participant.id}@s.whatsapp.net`;
    }

    // 4. Quarta opção: phoneNumber sem @ (adicionar @s.whatsapp.net)
    if (participant.phoneNumber) {
      return participant.phoneNumber.includes("@")
        ? participant.phoneNumber
        : `${participant.phoneNumber}@s.whatsapp.net`;
    }

    // 5. ÚLTIMO RECURSO: lid (precisa ser processado)
    if (participant.lid) {
      // LID vem no formato: "241 44324925037 4" (com espaços)
      // Precisamos remover espaços e usar apenas os dígitos
      const lidClean = String(participant.lid).replace(/\s+/g, "");
      return `${lidClean}@lid`;
    }
  }

  return String(participant);
}

function getParticipantNumber(participant) {
  const id = getParticipantId(participant);

  if (!id) return "";

  // Extrair número antes do @
  const number = String(id).split("@")[0];

  // Remover espaços se houver (caso do LID)
  return number.replace(/\s+/g, "");
}

// ========== FUNÇÕES AUXILIARES DE MUTE (Sistema Individual por Grupo) ==========

/**
 * Carrega dados de mute do grupo
 * @param {string} groupId - ID do grupo
 * @returns {object} Dados de mute do grupo
 */
function loadGroupMuteData(groupId) {
  try {
    const groupFilePath = `./dados/grupos/${groupId}.json`;
    if (fs.existsSync(groupFilePath)) {
      const data = JSON.parse(fs.readFileSync(groupFilePath, "utf8"));
      return data;
    }
    return { mutedUsers: {} };
  } catch (error) {
    console.error("❌ Erro ao carregar dados de mute:", error);
    return { mutedUsers: {} };
  }
}

/**
 * Salva dados de mute do grupo
 * @param {string} groupId - ID do grupo
 * @param {object} data - Dados a serem salvos
 */
function saveGroupMuteData(groupId, data) {
  try {
    const groupFilePath = `./dados/grupos/${groupId}.json`;
    fs.writeFileSync(groupFilePath, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("❌ Erro ao salvar dados de mute:", error);
  }
}

/**
 * Verifica se usuário está mutado (compatível com LID)
 * @param {string} groupId - ID do grupo
 * @param {string} userJid - JID do usuário
 * @returns {boolean} True se mutado
 */
function isMuted(groupId, userJid) {
  try {
    const data = loadGroupMuteData(groupId);
    if (!data.mutedUsers) return false;

    // Verificar se JID está na lista (compatível com LID)
    return Object.keys(data.mutedUsers).some((mutedJid) =>
      areJidsEqual(mutedJid, userJid)
    );
  } catch (error) {
    console.error("❌ Erro ao verificar mute:", error);
    return false;
  }
}

/**
 * Adiciona usuário à lista de mutados
 * @param {string} groupId - ID do grupo
 * @param {string} userJid - JID do usuário
 * @param {string} mutedBy - JID de quem mutou
 * @param {string} reason - Motivo do mute (opcional)
 */
function muteUser(groupId, userJid, mutedBy, reason = "Não especificado") {
  try {
    const data = loadGroupMuteData(groupId);
    data.mutedUsers = data.mutedUsers || {};

    const normalizedJid = normalizeJid(userJid);
    data.mutedUsers[normalizedJid] = {
      mutedAt: new Date().toISOString(),
      mutedBy: normalizeJid(mutedBy),
      deletedMessages: 0,
      reason: reason,
    };

    saveGroupMuteData(groupId, data);
    return true;
  } catch (error) {
    console.error("❌ Erro ao mutar usuário:", error);
    return false;
  }
}

/**
 * Remove usuário da lista de mutados
 * @param {string} groupId - ID do grupo
 * @param {string} userJid - JID do usuário
 * @returns {object|null} Dados do mute removido ou null
 */
function unmuteUser(groupId, userJid) {
  try {
    const data = loadGroupMuteData(groupId);
    if (!data.mutedUsers) return null;

    // Encontrar JID mutado (compatível com LID)
    const mutedJid = Object.keys(data.mutedUsers).find((jid) =>
      areJidsEqual(jid, userJid)
    );

    if (mutedJid) {
      const muteData = data.mutedUsers[mutedJid];
      delete data.mutedUsers[mutedJid];
      saveGroupMuteData(groupId, data);
      return muteData;
    }

    return null;
  } catch (error) {
    console.error("❌ Erro ao desmutar usuário:", error);
    return null;
  }
}

/**
 * Incrementa contador de mensagens deletadas
 * @param {string} groupId - ID do grupo
 * @param {string} userJid - JID do usuário
 */
function incrementDeletedMessages(groupId, userJid) {
  try {
    const data = loadGroupMuteData(groupId);
    if (!data.mutedUsers) return;

    // Encontrar JID mutado (compatível com LID)
    const mutedJid = Object.keys(data.mutedUsers).find((jid) =>
      areJidsEqual(jid, userJid)
    );

    if (mutedJid && data.mutedUsers[mutedJid]) {
      data.mutedUsers[mutedJid].deletedMessages =
        (data.mutedUsers[mutedJid].deletedMessages || 0) + 1;
      saveGroupMuteData(groupId, data);
    }
  } catch (error) {
    console.error("❌ Erro ao incrementar contador:", error);
  }
}

/**
 * Retorna lista de usuários mutados
 * @param {string} groupId - ID do grupo
 * @returns {array} Lista de mutados com informações
 */
function getMutedUsers(groupId) {
  try {
    const data = loadGroupMuteData(groupId);
    if (!data.mutedUsers) return [];

    return Object.entries(data.mutedUsers).map(([jid, info]) => ({
      jid: jid,
      number: extractNumber(jid),
      ...info,
    }));
  } catch (error) {
    console.error("❌ Erro ao obter lista de mutados:", error);
    return [];
  }
}

// ========== FIM DAS FUNÇÕES DE MUTE ==========

const MSG_ANTPV2 = [];

const BLC_ANTCL = [];

let OSINF_K = [];

let numerodono_ofc = setting.numerodono.replace(
  new RegExp("[()+-/ +/]", "gi"),
  ""
);

let nmrdn_dono2 =
  setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET;

process.on("uncaughtException", function (err) {
  console.error(new Date().toUTCString() + " uncaughtException:", err.message);
  console.error(err.stack);
});

function apenasNumeros(variavel) {
  var regex = /^[0-9]+$/;
  if (variavel.match(regex)) {
    return true;
  } else {
    return false;
  }
}

function removeSecondSpace(str) {
  if (str[1] === " ") {
    return str[1] === " " && str[2] === " "
      ? str[0] + str.slice(3)
      : str[0] + str.slice(2);
  }
  return str;
}

function RmvSimbolosLmn(a) {
  return a
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const FormData = require("form-data");
const { JSDOM } = require("jsdom");

async function webp_mp4(imageBuffer) {
  let formData = new FormData();
  formData.append("new-image-url", "");
  formData.append("new-image", imageBuffer, "image.webp");

  let response = await fetch("https://ezgif.com/webp-to-mp4", {
    method: "POST",
    body: formData,
  });

  let html = await response.text();

  let { document } = new JSDOM(html).window;

  let formData2 = new FormData();
  let formValues = {};

  for (let input of document.querySelectorAll("form input[name]")) {
    formValues[input.name] = input.value;
    formData2.append(input.name, input.value);
  }

  let response2 = await fetch(
    "https://ezgif.com/webp-to-mp4/" + formValues.file,
    { method: "POST", body: formData2 }
  );

  let html2 = await response2.text();

  let { document: document2 } = new JSDOM(html2).window;

  return new URL(
    document2.querySelector("div#output > p.outfile > video > source").src,
    response2.url
  ).toString();
}

// ABAIXO: INÍCIO DE CONEXÃO

const startAle = async (upsert, conn, qrcode, sessionStartTim) => {
  try {
    /*
    try {
      var [ip, vps] = await Promise.all([
        axios.get("https://l2.io/ip.json"),
        axios.get(
          "https://raw.githubusercontent.com/bronxys/bronxys/main/list.json"
        ),
      ]);
      if (!vps.data.includes(ip.data.ip)) {
        return console.log("funciona Apenas na bronxyshost.com.");
      }
    } catch (e) {
      console.log("Falha na conexão...");
      process.exit();
    }
*/
    var hora120 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");

    for (const info of upsert?.messages || []) {
      const from = info.key.remoteJid;

      let groupMetadata;

      const isGroup = from.endsWith("@g.us");

      const JOGO_D_V = fs?.existsSync(`./dados/org/tictactoe/db/${from}.json`)
        ? JSON?.parse(fs?.readFileSync(`./dados/org/tictactoe/db/${from}.json`))
        : false;

      const VR_JSON_GLOBAL = fs.existsSync(`./dados/grupos/${from}.json`)
        ? true
        : false;

      if (VR_JSON_GLOBAL) {
        var jsonGp = JSON.parse(fs.readFileSync(`./dados/grupos/${from}.json`)); // DGOMR
      }

      if (
        info.messageStubParameters &&
        info.messageStubParameters[0] === "Message absent from node"
      ) {
        try {
          if (
            info.messageStubParameters[1] &&
            info.messageStubParameters[1] !== "undefined"
          ) {
            conn.sendMessageAck(
              JSON.parse(info.messageStubParameters[1], BufferJSON.reviver)
            );
          }
        } catch (e) {
          // Silenciar erro JSON - não afeta funcionamento
        }
      }

      if (VR_JSON_GLOBAL && jsonGp[0]?.x9 && info.messageStubType) {
        switch (info.messageStubType) {
          case 23:
            conn.sendMessage(info.key.remoteJid, {
              text: `O usuário @${
                info.participant.split("@")[0]
              } acabou de redefinir o link do grupo...`,
              mentions: [info.participant],
            });
            break;

          case 29: {
            await delay(1000);

            let promoted;
            try {
              promoted = JSON.parse(info.messageStubParameters[0]);
            } catch (e) {
              return console.log("Erro ao parsear stubParameters:", e);
            }

            const promotedJid = promoted.phoneNumber;
            const promoterJid = info.participant;
            await conn.sendMessage(info.key.remoteJid, {
              text: `O usuário @${
                promotedJid.split("@")[0]
              } foi promovido pelo @${promoterJid.split("@")[0]}`,
              mentions: [promotedJid, promoterJid],
            });
            break;
          }

          case 30: {
            await delay(1000);

            let demoted;
            try {
              demoted = JSON.parse(info.messageStubParameters[0]);
            } catch (e) {
              return console.log("Erro ao parsear stubParameters:", e);
            }

            const demotedJid = demoted.phoneNumber;
            const demoterJid = info.participant;
            await conn.sendMessage(info.key.remoteJid, {
              text: `O ADM @${
                demotedJid.split("@")[0]
              } foi rebaixado para membro comum pelo ADM @${
                demoterJid.split("@")[0]
              }`,
              mentions: [demotedJid, demoterJid],
            });
            break;
          }
        }
      }

      // P: 29
      // R: 30
      // RMV: 28
      // ADC: 27

      switch (info.messageStubType) {
        case 29:
        case 30:
        case 28:
        case 27:
          try {
            var Sender_ = info.messageStubParameters[0];
            if (
              groupMetadata_RG &&
              (groupMetadata_RG?.length ?? 0) > 0 &&
              groupMetadata_RG.some((i) => i.id === from)
            ) {
              if (info.messageStubType === 28 || info.messageStubType === 27) {
                info.messageStubType === 27
                  ? !groupMetadata_RG
                      .find((i) => i.id === from)
                      .participants.some((ab) => ab.id === Sender_)
                    ? groupMetadata_RG
                        .find((i) => i.id === from)
                        .participants.push({ id: Sender_, admin: null })
                    : ""
                  : groupMetadata_RG
                      .find((i) => i.id === from)
                      .participants.splice(
                        groupMetadata_RG
                          .find((i) => i.id === from)
                          .participants.findIndex((ac) => ac.id === Sender_),
                        1
                      );
                fs.writeFileSync(
                  "./dados/global/groups.json",
                  JSON.stringify(groupMetadata_RG, null, 2)
                );
              } else if (
                groupMetadata_RG
                  .find((i) => i.id === from)
                  .participants.some((ab) => ab.id === Sender_) &&
                (info.messageStubType === 29 || info.messageStubType === 30)
              ) {
                groupMetadata_RG
                  .find((i) => i.id === from)
                  .participants.find(
                    (i) => i.id === info.messageStubParameters[0]
                  ).admin = info.messageStubType === 30 ? null : "admin";
                fs.writeFileSync(
                  "./dados/global/groups.json",
                  JSON.stringify(groupMetadata_RG, null, 2)
                );
              }
            } else {
              var ADC_RG = await conn.groupMetadata(from);
              groupMetadata_RG.push(ADC_RG);
            }
          } catch {}
          break;

        default:
      }

      async function bufferImg(imageUrl) {
        const fileName = "imagem.jpg";
        const headers = {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
        };
        axios
          .get(imageUrl, { responseType: "arraybuffer", headers })
          .then(async (response) => {
            fs.writeFileSync(fileName, response.data);
            conn.sendMessage(
              from,
              { image: { url: fileName } },
              { quoted: info }
            );
          })
          .catch((err) => {
            return reply("Erro!!");
          });
      }

      if (upsert.type === "append") return;
      const baileys = require("baileys");
      const type = baileys.getContentType(info.message);
      const content = JSON.stringify(info.message);
      const pushname = info.pushName ? info.pushName : "";

      if (nescessario.visualizarmsg) {
        conn.readMessages([info.key]);
      } else {
        if (from == "status@broadcast" || from.includes("status")) return;
      }

      global.prefix;
      global.blocked;

      //==============(BODY)================\\

      var body =
        info.message?.conversation ||
        info.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
        info.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
        info.message?.imageMessage?.caption ||
        info.message?.videoMessage?.caption ||
        info.message?.extendedTextMessage?.text ||
        info.message?.viewOnceMessage?.message?.videoMessage?.caption ||
        info.message?.viewOnceMessage?.message?.imageMessage?.caption ||
        info.message?.documentWithCaptionMessage?.message?.documentMessage
          ?.caption ||
        info.message?.buttonsMessage?.imageMessage?.caption ||
        info.message?.buttonsResponseMessage?.selectedButtonId ||
        info.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
        info.message?.templateButtonReplyMessage?.selectedId ||
        info?.text ||
        "";

      var Procurar_String =
        info.message?.conversation ||
        info.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
        info.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
        info.message?.imageMessage?.caption ||
        info.message?.videoMessage?.caption ||
        info.message?.extendedTextMessage?.text ||
        info.message?.viewOnceMessage?.message?.videoMessage?.caption ||
        info.message?.viewOnceMessage?.message?.imageMessage?.caption ||
        info.message?.documentWithCaptionMessage?.message?.documentMessage
          ?.caption ||
        info.message?.buttonsMessage?.imageMessage?.caption ||
        "";

      const args = body.trim().split(/ +/).slice(1);

      var budy2 = body
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (isGroup && VR_JSON_GLOBAL) {
        if (jsonGp[0].multiprefix) {
          var prefix =
            jsonGp[0]?.prefixos.find((p) =>
              String(body)?.trim()?.startsWith(p)
            ) || jsonGp[0].prefixos[0];
        } else {
          var prefix = setting.prefix;
        }
      } else if (!isGroup || (isGroup && !VR_JSON_GLOBAL)) {
        var prefix = setting.prefix;
      }

      const isCmd = body.trim().startsWith(prefix);

      var command = isCmd
        ? removeSecondSpace(budy2).slice(1).split(" ")[0]
        : false;

      const q_2 = budy2.trim().split(/ +/).slice(1).join(" ");

      const q = command
        ? removeSecondSpace(body.trim())
            .slice(command.length + 1)
            ?.trim() || body.trim().replace(prefix + command, "")
        : body.trim();

      var budy =
        info?.message?.conversation ||
        info?.message?.extendedTextMessage?.text ||
        "";

      var budy3 = budy
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      var PR_String = Procurar_String.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

      //======================================\\

      const _ = require("lodash");

      let dog = [];
      try {
        dog = JSON.parse(fs.readFileSync("./dados/global/groups.json", "utf8"));
      } catch (error) {
        fs.writeFileSync(
          "./dados/global/groups.json",
          JSON.stringify(dog, null, 2),
          "utf8"
        );
      }

      async function rgGroupM(from) {
        let abc;
        try {
          abc = await conn.groupMetadata(from);
        } catch (error) {
          return dog.find((a) => a.id === from) || null;
        }

        let index = dog.findIndex((a) => a.id === from);
        if (index !== -1) {
          if (!_.isEqual(dog[index], abc)) {
            dog[index] = abc;
            fs.writeFileSync(
              "./dados/global/groups.json",
              JSON.stringify(dog, 2, null),
              "utf8"
            );
          }
        } else {
          dog.push(abc);
          fs.writeFileSync(
            "./dados/global/groups.json",
            JSON.stringify(dog, 2, null),
            "utf8"
          );
        }

        return dog.find((a) => a.id === from) || abc;
      }

      groupMetadata = isGroup ? await rgGroupM(from) : "";

      const groupName = isGroup ? groupMetadata?.subject || "" : "";

      const groupName_RG = isGroup ? groupMetadata?.subject || "" : "";

      const sender = isGroup
        ? info.key.participant.includes(":")
          ? info.key.participant.split(":")[0] + SNET
          : info.key.participant
        : info.key.remoteJid;

      // Captura o identificador alternativo (PN se sender for LID, ou LID se sender for PN)
      const senderAlt = isGroup
        ? info.key.participantAlt || null
        : info.key.remoteJidAlt || null;

      const sender2 = sender.split("@")[0];

      const messagesC = PR_String.slice(0)
        .trim()
        .split(/ +/)
        .shift()
        .toLowerCase();

      const arg = body.substring(body.indexOf(" ") + 1);

      const botNumber = conn.user.id.split(":")[0];
      const botJid = conn.user.id?.split(":")[0] + SNET;
      const botLid = conn.user.lid
        ? conn.user.lid.split(":")[0] + LID_NET
        : null;

      const argss = body.split(/ +/g);

      const groupDesc = isGroup ? groupMetadata?.desc || "" : "";

      const groupMembers = isGroup ? groupMetadata?.participants || "" : "";

      const groupMembers2 = isGroup
        ? groupMetadata_RG.find((Obj) => Obj.id === from)?.participants || ""
        : "";

      try {
        var DonoNoGrupo = isGroup
          ? JSON.stringify(groupMetadata).includes(from)
            ? from.includes("status")
              ? true
              : VR_JSON_GLOBAL
              ? groupMembers?.some((a_d) =>
                  [a_d.id, a_d.lid, a_d.phoneNumber].includes(nmrdn_dono2)
                )
              : true
            : true
          : true;
      } catch {}

      const isnit = nit.includes(sender);

      const issupre = supre.includes(sender);

      const ischyt = chyt.includes(sender);

      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";

      const somembros = isGroup ? getMembros(groupMembers) : "";

      //=======================================\\

      const nmrdn =
        setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET ||
        isnit;

      const numerodono_lid = setting.numerodono_lid;

      const numerodono = [
        `${nmrdn}`,
        `${dono1}@s.whatsapp.net`,
        `${dono2}@s.whatsapp.net`,
        `${dono3}@s.whatsapp.net`,
        `${dono4}@s.whatsapp.net`,
        `${dono5}@s.whatsapp.net`,
        `${dono6}@s.whatsapp.net`,
      ];

      const lidDonos = [
        {
          type: "principal",
          numero: nmrdn,
          lid: numerodono_lid,
          lidtxt: "numerodono_lid",
        },
        {
          type: "auxiliar",
          numero: dono1,
          lid: dono1_lid,
          lidtxt: "dono1_lid",
        },
        {
          type: "auxiliar",
          numero: dono2,
          lid: dono2_lid,
          lidtxt: "dono2_lid",
        },
        {
          type: "auxiliar",
          numero: dono3,
          lid: dono3_lid,
          lidtxt: "dono3_lid",
        },
        {
          type: "auxiliar",
          numero: dono4,
          lid: dono4_lid,
          lidtxt: "dono4_lid",
        },
        {
          type: "auxiliar",
          numero: dono5,
          lid: dono5_lid,
          lidtxt: "dono5_lid",
        },
        {
          type: "auxiliar",
          numero: dono6,
          lid: dono6_lid,
          lidtxt: "dono6_lid",
        },
      ];

      //===========(Res_Aguarde)=============\\

      var enviarmen =
        TEXTOS_GERAL.MENSAGENS_DE_AGUARDE[
          Math.floor(Math.random() * TEXTOS_GERAL.MENSAGENS_DE_AGUARDE.length)
        ];
      //========================================\\

      const isJsonIncludes = (json, value) => {
        if (JSON.stringify(json).includes(value)) return true;
        return false;
      };

      if (isGroup) {
        if (!isJsonIncludes(openclosegp, from)) rgGroupOCfunc(from);
        if (!isJsonIncludes(paidHours, from)) addGroupInPaid(from);
        if (!isJsonIncludes(groupLinkPaid, from))
          addGroupLinkInPaid(conn, from);
        //if(!isJsonIncludes(adv, from)) addGroupInAdv(from)
      }

      paidFunc(conn);
      ABRIR_E_FECHAR_GRUPO(conn);

      //================= Funções de Grupo 🥋 =============//

      const dirGroup = `./dados/grupos/${from}.json`;

      const nescj = "./dono/nescessario.json";

      const data_IDGP = [
        {
          name: groupName_RG,
          groupId: from,
          x9: false,
          antiimg: false,
          antivideo: false,
          antiaudio: false,
          antisticker: false,
          antidoc: false,
          antictt: false,
          antiloc: false,
          antilinkgp: false,
          antilinkhard: false,
          antifake: false,
          Odelete: false,
          antispam: false,
          anticatalogo: false,
          sistemGold: false,
          visuUnica: false,
          registrarFIGUS: false,
          soadm: false,
          rg_aluguel: false,
          advtlink: [],
          advtlinkgp: [],
          listanegra: [],
          advertir: [],
          prefixos: ["!"],
          comandosB: [],
          advertir2: [],
          legenda_estrangeiro: "0",
          legenda_listanegra:
            "𝙊𝙡𝙝𝙖 𝙖𝙞 𝙛𝙖𝙢𝙞́𝙡𝙞𝙖 𝙦𝙪𝙚𝙢 𝙙𝙚𝙪 𝙖𝙨 𝙘𝙖𝙧𝙖𝙨 𝙥𝙤𝙧 𝘼𝙦𝙪𝙞..! 𝙥𝙤𝙧 𝙤𝙧𝙙𝙚𝙣𝙨 𝙙𝙤 𝘼𝙙𝙢𝙞𝙧𝙤 𝙞𝙧𝙚𝙞 𝙩𝙚 𝙥𝙖𝙨𝙨𝙖𝙧 𝙖 𝙁𝙖𝙘𝙖😝🔪\n𝘼𝙜𝙤𝙧𝙖 𝙨𝙞𝙣𝙩𝙖 𝙤 𝙥𝙤𝙙𝙚𝙧 𝙙𝙤 𝘽𝙖𝙣 𝘾𝙖𝙗𝙖𝙘̧𝙤𝙑𝘼𝙕𝘼 😡🤬",
          legenda_documento: "0",
          legenda_video: "0",
          legenda_imagem: "0",
          multiprefix: false,
          recolherlinkgp: false,
          forca_ofc: [
            {
              acertos: 0,
              erros: 0,
              palavra: [],
              escreveu: [],
              palavra_ofc: 0,
              dica: 0,
              tema: 0,
            },
          ],
          Chances: [
            {
              id: sender,
              ChanceG: null,
              ChanceAp: null,
              ChanceR: [],
              Vinganca: null,
              cassino: 0,
              quiz: [{ errou: 0, acertou: 0, numero: 0 }],
              roletadasorte: false,
              Cachaca: 1,
              Escudo: [],
            },
          ],
          ausentes: [],
          forca_inc: false,
          comandos_gold: [],
          antipalavrao: {
            active: false,
            palavras: [],
          },
          limitec: {
            active: false,
            quantidade: null,
          },
          wellcome: [
            {
              bemvindo1: false,
              legendabv:
                "🫵🏻 {𝗕𝗘𝗠-𝗩𝗜𝗡𝗗𝗢} #numerodele# 𝙇𝙚𝙧 𝙖𝙨 𝙧𝙚𝙜𝙧𝙖𝙨 𝙚́ 𝙥𝙖𝙧𝙩𝙞́𝙘𝙞𝙥𝙚..! 𝙄𝙣𝙖𝙩𝙞𝙫𝙤𝙨 𝙨𝙚𝙧𝙖̃𝙤 𝙧𝙚𝙢𝙤𝙫𝙞𝙙𝙤𝙨 🥱",
              legendasaiu: "👋 Tchau #numerodele#! Até a próxima! 🚪",
            },
            {
              bemvindo2: false,
              legendabv:
                "🫵🏻 {𝗕𝗘𝗠-𝗩𝗜𝗡𝗗𝗢} #numerodele# 𝙇𝙚𝙧 𝙖𝙨 𝙧𝙚𝙜𝙧𝙖𝙨 𝙚́ 𝙥𝙖𝙧𝙩𝙞́𝙘𝙞𝙥𝙚..! 𝙄𝙣𝙖𝙩𝙞𝙫𝙤𝙨 𝙨𝙚𝙧𝙖̃𝙤 𝙧𝙚𝙢𝙤𝙫𝙞𝙙𝙤𝙨 🥱",
              legendasaiu: "👋 Tchau #numerodele#! Até a próxima! 🚪",
            },
          ],
          simi1: false,
          simi2: false,
          autosticker: false,
          autoresposta: false,
          jogos: false,
          bangp: false,
        },
      ];

      if (isGroup && !fs.existsSync(dirGroup)) {
        fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP, null, 2) + "\n");
      }

      try {
        var dataGp = isGroup
          ? JSON.parse(fs.readFileSync(dirGroup))
          : undefined;
      } catch (e) {
        fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP));
      }

      function setGp(index) {
        fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + "\n");
      }

      function setNes(index) {
        fs.writeFileSync(nescj, JSON.stringify(index, null, 2));
      }

      function Goldrgs(index) {
        fs.writeFileSync(
          "./dados/org/json/golds.json",
          JSON.stringify(index, null, 2) + "\n"
        );
      }

      if (!info.message) return;

      const ID_G_GOLD = rggold.findIndex((i) => i.grupo === from);
      const ID_USU_GOLD = rggold[ID_G_GOLD]?.usus?.findIndex(
        (i) => i.id === sender
      );

      const S_Sistema = {
        RS_C: function (A, B, C) {
          return dataGp[0].Chances.find((i) => i.id === A)[B] || C || null;
        },

        RS: function (A, B) {
          if (ID_G_GOLD < 0) return;
          return rggold[ID_G_GOLD].usus.find((i) => i.id === A)[B] || null;
        },

        ADD_C: function (A, B, X) {
          dataGp[0].Chances.find((i) => i.id === A)[B] = X;
          setGp(dataGp);
        },

        ADD_C_M: function (A, B, X) {
          dataGp[0].Chances.find((i) => i.id === A)[B] += X;
          setGp(dataGp);
        },

        ADD_C_P: function (A, B, X) {
          dataGp[0].Chances.find((i) => i.id === A)[B].push(X);
          setGp(dataGp);
        },

        ADD: async function (A, Q) {
          DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          if (!DM_)
            return reply(
              "Este fdp nunca mandou mensagem enquanto eu estava ativo, então ele não está registrado no meu sistema de Golds."
            );
          !DM_["Golds"] ? (DM_["Golds"] = Q) : (DM_["Golds"] += Q);
          Goldrgs(rggold);
        },

        ADD_2: async function (A, Q, X, X2) {
          if (ID_G_GOLD < 0) return;
          DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          if (!DM_)
            return reply(
              "Este fdp nunca mandou mensagem enquanto eu estava ativo, então ele não está registrado no meu sistema de Golds."
            );
          DM_["Golds"] += Q;
          DM_[X] = X2;
          Goldrgs(rggold);
        },

        RM: async function (A, Q) {
          DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          if ((DM_?.Golds || 0) < Q)
            return reply(
              "A quantidade que tem é inferior a que você deseja tirar."
            );
          DM_["Golds"] -= Q;
          Goldrgs(rggold);
        },

        R_A: async function (A, B, Q) {
          DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          DM_2 = rggold[ID_G_GOLD].usus.find((i) => i.id === B);
          if ((DM_?.Golds || 0) < Q)
            return mention(
              `A quantidade que tem é inferior a que você deseja tirar, do usuário ( @${
                A.split("@")[0]
              } )`
            );
          if (!DM_2)
            return mention(
              `Este fdp ( @${
                B.split("@")[0]
              } ) nunca mandou mensagem enquanto eu estava ativo, então ele não está registrado no meu sistema de Golds.`
            );
          DM_["Golds"] -= Q;
          DM_2["Golds"] += Q;
          Goldrgs(rggold);
        },

        A_R_2: async function (A, B, Q, Q2) {
          DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          DM_2 = rggold[ID_G_GOLD].usus.find((i) => i.id === B);
          if ((DM_?.Golds || 0) < Q)
            return mention(
              `A quantidade que tem é inferior a que você deseja tirar, do fdp ( @${
                A.split("@")[0]
              } )`
            );
          if (!DM_2)
            return mention(
              `Este fdp ( @${
                B.split("@")[0]
              } ) nunca mandou mensagem enquanto eu estava ativo, então ele não está registrado no meu sistema de Golds.`
            );
          DM_["Golds"] += Q;
          DM_2["Golds"] -= Q2 || Q;
          Goldrgs(rggold);
        },
      };

      async function ConsultarGold(st, usu) {
        if (!st)
          return reply(
            `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
          );
        conn.sendMessage(from, {
          text: `Olá @${usu.split("@")[0]} você contém ${S_Sistema.RS(
            usu,
            "Golds"
          )} Golds, breve você será bem mais rico que Elon Musk, só confia..`,
          mentions: [usu],
        });
      }

      async function AddGold(st, qnt, usu) {
        if (!st)
          return reply(
            `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
          );
        S_Sistema.ADD(usu, qnt);
        conn.sendMessage(from, {
          text: `Parabéns: > @${usu.split("@")[0]} você ganhou ${qnt} Golds.. `,
          mentions: [usu],
        });
      }

      async function TirarGold(st, qnt, usu) {
        if (!st)
          return reply(
            `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
          );
        S_Sistema.RM(usu, qnt);
        conn.sendMessage(from, {
          text: `Que pena... @${usu.split("@")[0]} você perdeu ${qnt} Golds.. `,
          mentions: [usu],
        });
      }

      //=======(ADMS/DONO/ETC..CONST)========\\

      const adivinha =
        info.key.id.length > 21
          ? "Android ツ"
          : info.key.id.substring(0, 2) == "3A"
          ? "IPhone ｯ"
          : "WhatsApp web シ";

      const quoted = info.quoted ? info.quoted : info;

      const isBot = info.key.fromMe ? true : false;

      if (sender.endsWith("@lid")) {
        for (const dono of lidDonos) {
          if (dono?.numero !== "." && dono?.lid === "nao_mexa") {
            const [result] = await conn.onWhatsApp(dono.numero);
            const lid = result?.lid;
            if (lid) {
              if (dono.type === "principal") {
                const settings = JSON.parse(
                  fs.readFileSync("./dados/settings.json")
                );
                settings.numerodono_lid = lid;
                fs.writeFileSync(
                  "./dados/settings.json",
                  JSON.stringify(settings, null, 2)
                );
              } else {
                const necessario = JSON.parse(
                  fs.readFileSync("./dono/nescessario.json")
                );
                necessario[`${dono.lidtxt}`] = lid;
                fs.writeFileSync(
                  "./dono/nescessario.json",
                  JSON.stringify(necessario, null, 2)
                );
              }
            }
          }
        }
      }

      const SoDono =
        numerodono.includes(sender) ||
        (senderAlt && numerodono.includes(senderAlt)) ||
        isBot ||
        isnit ||
        issupre ||
        ischyt ||
        numerodono_lid.includes(sender) ||
        (senderAlt && numerodono_lid.includes(senderAlt));

      dfndofc = setting.numerodono + SNET;

      const DonoOficial =
        dfndofc.includes(sender) || (senderAlt && dfndofc.includes(senderAlt));

      const isPremium = premium.map((i) => i.usus).includes(sender) || SoDono;

      const isBotGroupAdmins =
        groupAdmins.includes(botNumber) ||
        groupAdmins.includes(botJid) ||
        groupAdmins.includes(botLid) ||
        false;

      const isGroupAdmins = groupAdmins.includes(sender) || SoDono;

      const isBanned = ban.includes(sender);

      const isVisualizar = nescessario.visualizarmsg;

      const isVerificado = nescessario.verificado;

      const isAudioMenu = nescessario.menu_audio;

      const isAntiPv2 = nescessario.antipv2;

      const isAntiPv3 = nescessario.antipv3;

      const isConsole = nescessario.consoleoff;

      const listanegraG = nescessario.listanegraG;

      const isAntiPv = nescessario.antipv;

      const isAnticall = nescessario.anticall;

      //============(FUNÇÕES)============\\

      const isAntiImg = isGroup ? dataGp[0].antiimg : undefined;

      const isAntiVid = isGroup ? dataGp[0].antivideo : undefined;

      const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined;

      const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined;

      const Antidoc = isGroup ? dataGp[0].antidoc : undefined;

      const isAntiCtt = isGroup ? dataGp[0].antictt : undefined;

      const Antiloc = isGroup ? dataGp[0].antiloc : undefined;

      const ADVTLINK = isGroup ? dataGp[0]?.advtlink : undefined;

      const ADVTLINKGP = isGroup ? dataGp[0]?.advtlinkgp : undefined;

      const Advt_Link = isGroup
        ? Array.isArray(ADVTLINK)
          ? ADVTLINK.find((i) => i.id === sender)?.adv ?? null
          : false
        : 0;

      const Advt_Linkgp = isGroup
        ? Array.isArray(ADVTLINKGP)
          ? ADVTLINKGP.find((i) => i.id === sender)?.adv ?? null
          : false
        : 0;

      ///////

      const isAntilinkgp = isGroup
        ? (nescessario?.rg_aluguelGB ||
            (isGroup && dataGp[0]?.rg_aluguel) ||
            false) &&
          !rg_aluguel.some((i) => i.id_gp == from)
          ? false
          : !DonoNoGrupo && nescessario?.EstaNogrupo && dataGp[0].antilinkgp
          ? false
          : dataGp[0].antilinkgp
        : undefined;

      const isAntiLinkHard = isGroup
        ? (nescessario?.rg_aluguelGB ||
            (isGroup && dataGp[0]?.rg_aluguel) ||
            false) &&
          !rg_aluguel.some((i) => i.id_gp == from)
          ? false
          : !DonoNoGrupo && nescessario?.EstaNogrupo && dataGp[0].antilinkhard
          ? false
          : dataGp[0].antilinkhard
        : undefined;

      const isAntifake = isGroup
        ? (nescessario?.rg_aluguelGB ||
            (isGroup && dataGp[0]?.rg_aluguel) ||
            false) &&
          !rg_aluguel.some((i) => i.id_gp == from)
          ? false
          : !DonoNoGrupo && nescessario?.EstaNogrupo && dataGp[0].antifake
          ? false
          : dataGp[0].antifake
        : undefined;

      //////

      var isRecolherlinksgp = isGroup ? dataGp[0].recolherlinkgp : undefined;

      const IS_DELETE =
        nescessario?.Odelete === undefined ? true : nescessario?.Odelete;

      const So_Adm = isGroup ? dataGp[0].soadm : undefined;

      const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined;

      const IS_sistemGold = isGroup ? dataGp[0].sistemGold : undefined;

      const ADVT = isGroup ? dataGp[0].advertir : undefined;

      const ADVT2 = isGroup ? dataGp[0].advertir2 : undefined;

      const isx9 = isGroup ? dataGp[0].x9 : undefined;

      const isMultiP = isGroup ? dataGp[0].multiprefix : undefined;

      const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined;

      const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined;

      const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined;

      const isSimi = isGroup ? dataGp[0].simi1 : undefined;
      const isSimi2 = isGroup ? dataGp[0].simi2 : undefined;

      const isAutofigu = isGroup ? dataGp[0].autosticker : undefined;

      const isAutorepo = isGroup
        ? (nescessario?.rg_aluguelGB ||
            (isGroup && dataGp[0]?.rg_aluguel) ||
            false) &&
          !rg_aluguel.some((i) => i.id_gp == from)
          ? false
          : dataGp[0].autoresposta
        : undefined;

      const isModobn = isGroup ? dataGp[0].jogos : undefined;

      const isBanchat = isGroup ? dataGp[0].bangp : undefined;

      const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined;

      const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined;

      const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined;

      const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined;

      //=======================================\\

      var Res_Aguarde = enviarmen;

      var Res_SoGrupo = TEXTOS_GERAL.MENSAGEM_DE_SO_USAR_EM_GRUPO;

      var Res_SoDono = TEXTOS_GERAL.MENSAGEM_DE_SO_DONO_USAR_COMANDOS;

      var Res_SoAdm = TEXTOS_GERAL.MENSAGEM_DE_SO_ADM_CONSEGUIR_USAR_X_COMANDO;

      var Res_BotADM = TEXTOS_GERAL.MENSAGEM_DE_QUANDO_O_BOT_NAO_E_ADM;

      var Res_SoModoBN =
        TEXTOS_GERAL.MENSAGEM_DE_SO_QUANDO_MODO_BRINCADEIRA_FOR_ATIVO.replaceAll(
          "#prefixo#",
          prefix
        );

      //==========(VERIFICADO)===============\\

      let selo;
      if (isVerificado) {
        selo = {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: `${NomeDoBot}`,
            },
          },
        };
      } else {
        selo = info;
      }

      // FUNÇÕES DE MARCAÇÕES ESSENCIAL \\ DGOMR

      const menc_prt =
        info.message?.extendedTextMessage?.contextInfo?.participant;

      const menc_jid = args?.join(" ").replace("@", "") + SNET;

      const menc_jid2 =
        info.message?.extendedTextMessage?.contextInfo?.mentionedJid;

      //      const sender_ou_n = q.includes("@") ? menc_jid : sender;

      const mrc_ou_numero =
        q.length > 6 && !q.includes("@")
          ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET
          : menc_prt;

      const menc_os2 = q.includes("@")
        ? menc_jid2?.length > 0
          ? menc_jid2[0]
          : false
        : menc_prt;

      const sender_ou_n = menc_os2;
      const marc_tds = q.includes("@")
        ? menc_jid
        : q.length > 6 && !q.includes("@")
        ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET
        : menc_prt;

      const menc_prt_nmr =
        q.length > 12
          ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET
          : menc_prt;

      ////////////////////////////////////////////

      //BAN GRUPO & BOT OFF
      if (isGroup && isCmd && isBanchat && !SoDono) return; // IGNORAR TODOS DO GRUPO.

      if (isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return; // IGNORAR QUEM NÃO É ADM.

      if (nescessario?.botoff && !SoDono) return; // IGNORAR TUDO SEM SER DONO.

      if (!isCmd && info.key.fromMe) return; // Ignorar comandos do bot.

      var isUrl = (url) => {
        return linkfy.find(url)[0]?.isLink;
      };

      const isLink = (url) => {
        return linkfy.find(url)[0]?.isLink;
      };

      const Link = (url) => {
        if (isLink(url)) {
          return linkfy.find(url)[0].href;
        } else {
          return false;
        }
      };

      const reply = (texto) => {
        conn.sendMessage(from, { text: texto }, { quoted: info }).catch((e) => {
          console.log(e);
          return reply("Erro... 🥱");
        });
      };

      //
      const time2 = moment().tz("America/Sao_Paulo").format("HH:mm:ss");
      if (time2 > "00:00:00" && time2 < "05:00:00") {
        var tempo = "Boa madrugada";
      }
      if (time2 > "05:00:00" && time2 < "12:00:00") {
        var tempo = "Bom dia";
      }
      if (time2 > "12:00:00" && time2 < "18:00:00") {
        var tempo = "Boa tarde";
      }
      if (time2 > "18:00:00") {
        var tempo = "Boa noite";
      }

      const sendSticker = (from, filename, info) => {
        conn.sendMessage(
          from,
          { sticker: { url: fileName } },
          { quoted: info }
        );
      };

      const sendImage = (ytb) => {
        conn.sendMessage(from, { image: { url: ytb } }, { quoted: info });
      };

      const sendMess = (hehe, ytb) => {
        conn.sendMessage(hehe, { text: ytb });
      };

      const mentions = (teks, memberr, id) => {
        id == null || id == undefined || id == false
          ? conn.sendMessage(from, { text: teks.trim(), mentions: memberr })
          : conn.sendMessage(from, { text: teks.trim(), mentions: memberr });
      };

      const mention = (teks = "", ms = info) => {
        memberr = [];
        vy = teks.includes("\n") ? teks.split("\n") : [teks];
        for (vz of vy) {
          for (zn of vz.split(" ")) {
            if (zn.includes("@")) {
              const numberPart = zn.split("@")[1];
              // Verificar se é um número válido ou LID
              if (numberPart && numberPart.trim()) {
                // Se contém apenas dígitos, é número normal
                if (/^\d+$/.test(numberPart)) {
                  memberr.push(numberPart + SNET);
                } else {
                  // Caso contrário, usar como está (pode ser LID)
                  memberr.push(zn.substring(1)); // Remove o @ inicial
                }
              }
            }
          }
        }
        conn.sendMessage(
          from,
          { text: teks.trim(), mentions: memberr },
          { quoted: ms }
        );
      };

      const mentionSm = (teks = "") => {
        memberr = [];
        vy = teks.includes("\n") ? teks.split("\n") : [teks];
        for (vz of vy) {
          for (zn of vz.split(" ")) {
            if (zn.includes("@")) {
              const numberPart = zn.split("@")[1];
              // Verificar se é um número válido ou LID
              if (numberPart && numberPart.trim()) {
                // Se contém apenas dígitos, é número normal
                if (/^\d+$/.test(numberPart)) {
                  memberr.push(numberPart + SNET);
                } else {
                  // Caso contrário, usar como está (pode ser LID)
                  memberr.push(zn.substring(1)); // Remove o @ inicial
                }
              }
            }
          }
        }
        conn.sendMessage(from, { text: teks.trim(), mentions: memberr });
      };

      const mencionarIMG = (teks = "", Url, ms) => {
        memberr = [];
        vy = teks.includes("\n") ? teks.split("\n") : [teks];
        for (vz of vy) {
          for (zn of vz.split(" ")) {
            if (zn.includes("@")) {
              const numberPart = zn.split("@")[1];
              // Verificar se é um número válido ou LID
              if (numberPart && numberPart.trim()) {
                // Se contém apenas dígitos, é número normal
                if (/^\d+$/.test(numberPart)) {
                  memberr.push(numberPart + SNET);
                } else {
                  // Caso contrário, usar como está (pode ser LID)
                  memberr.push(zn.substring(1)); // Remove o @ inicial
                }
              }
            }
          }
        }
        conn.sendMessage(
          from,
          { image: { url: Url }, caption: teks.trim(), mentions: memberr },
          { quoted: ms }
        );
      };

      const reagir = async (idgp, emj) => {
        conn.sendMessage(idgp, { react: { text: emj, key: info.key } });
      };

      const verificarN = async (sla) => {
        const [result] = await conn.onWhatsApp(sla);
        if (result == undefined) {
          reply("Este fdp não é existente no WhatsApp");
        } else {
          reply(
            `-> ${sla} Número inserido é existente no WhatsApp.\n\ncom o id: ${result.id}`
          );
        }
      };

      if (
        isGroup &&
        isBotGroupAdmins &&
        !isGroupAdmins &&
        !SoDono &&
        !info.key.fromMe
      ) {
        if (menc_jid2?.length >= groupMembers.length - 1) {
          conn.sendMessage(from, {
            text: "𝙑𝙖𝙯𝙖, 𝙙𝙖𝙦𝙪𝙞 𝙘𝙤𝙢 𝙚𝙨𝙨𝙖 𝙢𝙖𝙧𝙘𝙖𝙘̧𝙖̃𝙤 𝙥𝙖𝙡𝙝𝙖𝙘̧𝙤😒",
          });
          if (IS_DELETE) {
            setTimeout(() => {
              conn.sendMessage(from, {
                delete: {
                  remoteJid: from,
                  fromMe: false,
                  id: info.key.id,
                  participant: sender,
                },
              });
            }, 500);
          }
          conn.groupParticipantsUpdate(from, [sender], "remove");
        }
      }

      const enviarfigu = async (figu, tag) => {
        conn.sendMessage(from, { sticker: { url: figu } }, { quoted: tag });
      };

      if (isAutofigu && isGroup) {
        async function autofiguf() {
          setTimeout(async () => {
            if (
              budy.includes(`${prefix}sticker`) ||
              budy.includes(`${prefix}s`) ||
              budy.includes(`${prefix}stk`) ||
              budy.includes(`${prefix}st`) ||
              budy.includes(`${prefix}fsticker`) ||
              budy.includes(`${prefix}f`) ||
              budy.includes(`${prefix}fstiker`)
            )
              return;

            if (type == "imageMessage") {
              var pack = `⚝ ⇝ Grupo:\n${groupName}`;
              var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`;
              owgi = await getFileBuffer(info.message.imageMessage, "image");
              let encmediaa = await sendImageAsSticker2(
                conn,
                from,
                owgi,
                info,
                { packname: pack, author: author2 }
              );
              DLT_FL(encmediaa);
            }

            if (type == "videoMessage") {
              if (isMedia && info.message.videoMessage.seconds < 10) {
                var pack = `⚝ ⇝ Grupo:\n${groupName}`;
                var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n⚒${NickDono}`;
                owgi = await getFileBuffer(info.message.videoMessage, "video");
                let encmedia = await sendVideoAsSticker2(
                  conn,
                  from,
                  owgi,
                  info,
                  { packname: pack, author: author2 }
                );
                DLT_FL(encmedia);
              }
            }
          }, 1000);
        }
        autofiguf().catch((e) => {
          console.log(e);
        });
      }

      var nmrdnofc1 = setting.numerodono.replace(
        new RegExp("[()+-/ +/]", "gi"),
        ""
      );

      if (isGroup && fs.existsSync(`./dados/org/json/afk-@${nmrdnofc1}.json`)) {
        if (budy.indexOf(`@${nmrdnofc1}`) >= 0) {
          const tabelin = JSON.parse(
            fs.readFileSync(`./dados/org/json/afk-@${nmrdnofc1}.json`)
          );

          txt = `- Olá, o ${NickDono} Está ausente.\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensagem de ausência : ${tabelin.Motivo_Da_Ausência}`;

          conn.sendMessage(from, { text: txt }, { quoted: info });
        }
      }

      if (
        isGroup &&
        dataGp[0].ausentes?.length > 0 &&
        menc_jid2?.length > 0 &&
        JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)
      ) {
        blue = [];
        for (i of menc_jid2) {
          if (groupAdmins.indexOf(String(i)) != -1)
            blue.push(groupAdmins.indexOf(String(i)));
        }
        if (blue.length == 0) return;
        big = [];
        for (i of blue) {
          big.push(groupAdmins[i]);
        }
        blr = [];
        for (i = 0; i < big.length; i++) {
          blr.push(
            dataGp[0].ausentes[
              dataGp[0].ausentes.map((i) => i.id).indexOf(big[i])
            ]
          );
        }
        for (i of blr) {
          var blak = i;
        }
        mention(`
╭─────────────
┊ Registro de ausência.
┊ 
┊ ADM: @${blak.id.split("@")[0]}
┊ 
╰────◉◊

↺➤ Mensagem: ${blak.msg}

 ─────────────`);
      }

      if (isBotGroupAdmins && isGroupAdmins && body === "apaga") {
        if (!menc_prt) return;
        conn.sendMessage(from, {
          delete: {
            remoteJid: from,
            fromMe: false,
            id: info.message.extendedTextMessage.contextInfo.stanzaId,
            participant: menc_prt,
          },
        });
      }

      //=======================================\\

      const sendStickerFromUrl = async (to, url) => {
        try {
          var names = Date.now() / 10000;
          var download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
              request(uri)
                .pipe(fs.createWriteStream(filename))
                .on("close", callback);
            });
          };
          download(url, "./sticker" + names + ".png", async function () {
            console.log("enviando sticker");
            let filess = "./sticker" + names + ".png";
            let asw = "./sticker" + names + ".webp";
            exec(
              `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`,
              (err) => {
                let media = fs.readFileSync(asw);
                conn
                  .sendMessage(
                    to,
                    { sticker: media },
                    {
                      sendEphemeral: true,
                      contextInfo: { forwardingScore: 50, isForwarded: true },
                      quoted: info,
                    }
                  )
                  .catch((e) => {
                    return reply("Erro... 🥱");
                  });
                DLT_FL(filess);
                DLT_FL(asw);
              }
            );
          });
        } catch {
          return reply("Erro.. FNC");
        }
      };

      //=========(isQuoted/consts)=============\\
      const isImage = type == "imageMessage";
      const isVideo = type == "videoMessage";
      const isVisuU2 = type == "viewOnceMessageV2";
      const isAudio = type == "audioMessage";
      const isSticker = type == "stickerMessage";
      const isContact = type == "contactMessage";
      const isLocation = type == "locationMessage";
      const isProduct = type == "productMessage";
      const isMedia =
        type === "imageMessage" ||
        type === "videoMessage" ||
        type === "audioMessage" ||
        type == "viewOnceMessage" ||
        type == "viewOnceMessageV2";
      typeMessage = body.substr(0, 50).replace(/\n/g, "");
      if (isImage) typeMessage = "Image";
      else if (isVideo) typeMessage = "Video";
      else if (isAudio) typeMessage = "Audio";
      else if (isSticker) typeMessage = "Sticker";
      else if (isContact) typeMessage = "Contact";
      else if (isLocation) typeMessage = "Location";
      else if (isProduct) typeMessage = "Product";

      const isQuotedMsg =
        type === "extendedTextMessage" && content.includes("conversation");

      const isQuotedMsg2 =
        type === "extendedTextMessage" && content.includes("text");

      const isQuotedImage =
        type === "extendedTextMessage" && content.includes("imageMessage");

      const isQuotedVisuU =
        type === "extendedTextMessage" && content.includes("viewOnceMessage");

      const isQuotedVisuU2 =
        type === "extendedTextMessage" && content.includes("viewOnceMessageV2");

      const isQuotedVideo =
        type === "extendedTextMessage" && content.includes("videoMessage");

      const isQuotedDocument =
        type === "extendedTextMessage" && content.includes("documentMessage");

      const isQuotedDocW =
        type === "extendedTextMessage" &&
        content.includes("documentWithCaptionMessage");

      const isQuotedAudio =
        type === "extendedTextMessage" && content.includes("audioMessage");

      const isQuotedSticker =
        type === "extendedTextMessage" && content.includes("stickerMessage");

      const isQuotedContact =
        type === "extendedTextMessage" && content.includes("contactMessage");

      const isQuotedLocation =
        type === "extendedTextMessage" && content.includes("locationMessage");

      const isQuotedProduct =
        type === "extendedTextMessage" && content.includes("productMessage");

      //////BLOCK CMD///////
      //(CREDITOS AO KAUAN GAY)\\

      if (
        isGroup &&
        isCmd &&
        !SoDono &&
        dataGp[0]?.comandosB?.includes(command)
      )
        return reply(
          "Passar o pix. Depois você usar meus comandos.!\nPix na conta calcinha no chão 😏"
        );

      if (isCmd && !SoDono && bloq_global.includes(command))
        return reply(
          "Este comando está bloqueado pelo meu dono, e não pode ser utilizado em lugar nenhum."
        );

      ////FIMMMMMMMMM///// ANTNMSCVRS
      if (isConsole) {
        if (isGroup && info.message?.reactionMessage?.text) {
          console.log(
            colors.brightGreen(`
╭──────────────────────────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕: ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${
              isGroup
                ? colors.brightMagenta("GRUPO")
                : colors.brightMagenta("PRIVADO")
            } 〕${isGroup ? `〔 ${colors.cyan(groupName)} 〕` : ""}
│
│ 〔 REAÇÃO 〕: 〔 ${info.message.reactionMessage.text} 〕
│
╰─────────────────────────────────`)
          );
        } else if (isGroup && !isCmd) {
          console.log(
            colors.brightGreen(`
╭──────────────────────────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕: ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${colors.brightMagenta("GRUPO")} 〕:〔 ${colors.cyan(groupName)} 〕
│
╰─────────────────────────────────`)
          );
        } else if (isCmd && !isGroup) {
          console.log(
            colors.brightGreen(`
╭──────────────────────────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕: ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${colors.red("PRIVADO")} 〕 
│
│ 〔 COMANDO 〕 :「 ${command} 」
│
╰─────────────────────────────────`)
          );
        } else if (isCmd && isGroup) {
          console.log(
            colors.brightGreen(`
╭──────────────────────────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕: ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${colors.brightMagenta("GRUPO")} 〕:〔 ${colors.cyan(groupName)} 〕
│
│ 〔 COMANDO 〕:「 ${command} 」
│
╰─────────────────────────────────`)
          );
        } else {
          console.log(
            colors.brightGreen(`
╭──────────────────────────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕 : ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${colors.red("PRIVADO")} 〕
│
╰─────────────────────────────────`)
          );
        }
      }

      //======(JOGO-DA-VELHA)=======(Função)===\\

      async function joguinhodavelha() {
        const cmde = budy.toLowerCase().split(" ")[0] || "";
        let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (JOGO_D_V != false) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
            budy.toLowerCase() == "s" ||
            budy.toLowerCase() == "sim" ||
            budy.toLowerCase() == "ok"
          ) {
            if (boardnow.O == sender.replace(SNET, "")) {
              if (boardnow.status) return reply(`O jogo já começou antes!`);
              const matrix = boardnow._matrix;
              boardnow.status = true;
              fs.writeFileSync(
                `./dados/org/tictactoe/db/${from}.json`,
                JSON.stringify(boardnow, null, 2)
              );
              const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

❌ : @${boardnow.X}
⭕ : @${boardnow.O}
 
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}${matrix[0][1]}${matrix[0][2]}
${matrix[1][0]}${matrix[1][1]}${matrix[1][2]}
${matrix[2][0]}${matrix[2][1]}${matrix[2][2]}
`;
              mention(chatAccept);
            }
          } else if (
            budy.toLowerCase() == "n" ||
            budy.toLowerCase() == "não" ||
            budy.toLowerCase() == "no"
          ) {
            if (boardnow.O == sender.replace(SNET, "")) {
              if (boardnow.status) return reply(`O jogo já começou!`);
              DLT_FL(`./dados/org/tictactoe/db/${from}.json`);
              mention(
                `@${boardnow.X} *_Seu oponente não aceitou o desafio deve ter ficado com medinho de ser massacrado 👹_*`
              );
            }
          }
        }

        if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status)
            return reply(
              `Parece que seu oponente não aceitou o desafio ainda 😏`
            );
          if (
            (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
            sender.replace(SNET, "")
          )
            return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
            if (moving.winner == "SERI") {
              const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

Jogo termina empatado 😐
`;
              reply(chatEqual);
              DLT_FL("./dados/org/tictactoe/db/" + from + ".json");
              return;
            }
            const abt = Math.ceil(Math.random() + 4000);
            const winnerJID = moving.winner == "O" ? moving.O : moving.X;
            const looseJID = moving.winner == "O" ? moving.X : moving.O;
            const limWin = Math.floor(Math.random() * 1) + 10;
            const limLoose = Math.floor(Math.random() * 1) + 5;
            const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

Vencido por @${winnerJID} 😎👑
`;

            mention(chatWon);
            setTimeout(() => {
              if (fs.existsSync("./dados/org/tictactoe/db/" + from + ".json")) {
                DLT_FL("./dados/org/tictactoe/db/" + from + ".json");
                reply(`*🕹️JOGO DA VOVÓ RESETADO...😼*`);
              } else {
                console.log(
                  colors.red(time, "red"),
                  colors.magenta("[ EXPIRADO ]"),
                  colors.red("Jogo da velha espirado")
                );
                DLT_FL("./dados/org/tictactoe/db/" + from + ".json");
                reply(`*🕹️JOGO DA VELHA RESETADO, PORQUE EXPIROU 🕹️*`);
              }
            }, 300000); //5 minutos
            mention(
              `_*🥳Parabéns @${winnerJID} por ter ganhado o jogo da vovó 😏🎉...*_`
            );
            DLT_FL(`./dados/org/tictactoe/db/${from}.json`);
          } else {
            const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}${matrix[0][1]}${matrix[0][2]}
${matrix[1][0]}${matrix[1][1]}${matrix[1][2]}
${matrix[2][0]}${matrix[2][1]}${matrix[2][2]}
`;
            mention(chatMove);
          }
        }
      }

      //=================================\\

      function contar(frase, letraProcurada) {
        var total = 0;
        [...frase].forEach((letra) => {
          if (letra === letraProcurada) total++;
        });
        return total;
      }

      joguinhodavelha();

      if (
        isAntilinkgp &&
        isGroup &&
        isBotGroupAdmins &&
        !isGroupAdmins &&
        Procurar_String.includes("chat.whatsapp.com/")
      ) {
        if (isBot) return;
        let link_dgp;
        try {
          link_dgp = await conn?.groupInviteCode(from);
        } catch {
          link_dgp = "000000";
        }
        if (
          Procurar_String.split(" ").filter(
            (x) => x === "https://chat.whatsapp.com/"
          ).length < 2 &&
          Procurar_String.match(link_dgp)
        )
          return reply(
            "𝙇𝙞𝙣𝙠 𝙙𝙤 𝙣𝙤𝙨𝙨𝙤 𝙜𝙧𝙪𝙥𝙤, 𝙣𝙖̃𝙤 𝙞𝙧𝙚𝙞 𝙧𝙚𝙢𝙤𝙫𝙚𝙧... 𝙈𝙖𝙞𝙨 𝙩𝙖𝙧𝙙𝙚 𝙢𝙖𝙣𝙙𝙖 𝙛𝙤𝙩𝙤 𝙙𝙖 𝙧𝙖𝙗𝙖 𝙣𝙤 𝙥𝙫 𝙙𝙤 𝙗𝙤𝙩 𝙚 𝙛𝙞𝙘𝙖𝙧𝙚𝙢𝙤𝙨 𝙠𝙞𝙩𝙨 😏"
          );
        if (IS_DELETE) {
          setTimeout(() => {
            conn.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        var groupMemberIds = new Set(groupMembers.map((i) => i.id));

        if (groupMemberIds.has(sender)) {
          if (!dataGp[0]?.advlinkgp) {
            conn.groupParticipantsUpdate(from, [sender], "remove");
          } else {
            if (Advt_Linkgp === false) {
              dataGp[0].advtlinkgp = [{ id: sender, adv: 1 }];
              setGp(dataGp);
            } else if (Advt_Linkgp === null) {
              dataGp[0].advtlinkgp.push({ id: sender, adv: 1 });
              setGp(dataGp);
            } else {
              dataGp[0].advtlinkgp.find((i) => i.id === sender).adv += 1;
              setGp(dataGp);
            }
            if (Advt_Linkgp > 1) {
              reply(
                "Ei fdp, você completou 3 advertencias, enviando 3 links de grupo, então irei te passar a faca, sinto muito 😿 Só que não 😝"
              );
              dataGp[0].advtlinkgp.splice(
                dataGp[0].advtlinkgp.findIndex((i) => i.id === sender),
                1
              );
              setGp(dataGp);
              return conn.groupParticipantsUpdate(from, [sender], "remove");
            }
            if (Advt_Linkgp !== false) {
              reply(
                `Ou viado, você enviou um link de grupo, e então foi advertido em ${
                  dataGp[0].advtlinkgp.find((i) => i.id === sender)?.adv || 0
                }/3, não envie mais, pois se enviar vou acabar te passando a faca 😏`
              );
            }
          }
        }
      }

      const groupIdscount = [];
      for (let obj of countMessage) {
        groupIdscount.push(obj.groupId);
      }

      //========(CONTADOR-DE-MENSAGENS)========\\ ANTNMSCVRS
      var numbersIds = [];
      if (isGroup) {
        if (groupIdscount.indexOf(from) >= 0) {
          var ind = groupIdscount.indexOf(from);
          for (let obj of countMessage[ind].numbers) {
            numbersIds.push(obj.id);
          }
          if (numbersIds.indexOf(sender) >= 0) {
            var indnum = numbersIds.indexOf(sender);
            var RSM_CN = countMessage[ind].numbers[indnum];
            type == "stickerMessage" ? "" : (RSM_CN.messages += isCmd ? 0 : 1);
            type == "stickerMessage"
              ? ""
              : (RSM_CN.cmd_messages += isCmd ? 1 : 0);
            type == "stickerMessage" ? "" : (RSM_CN.aparelho = adivinha);
            RSM_CN.nick = pushname;
            RSM_CN.figus += type == "stickerMessage" ? 1 : 0;
          } else {
            const messages = isCmd ? 0 : 1;
            const cmd_messages = isCmd ? 1 : 0;
            var figus = type == "stickerMessage" ? 1 : 0;
            countMessage[ind].numbers.push({
              id: sender,
              messages: messages,
              cmd_messages: cmd_messages,
              aparelho: adivinha,
              figus: figus,
              nick: pushname,
            });
          }
        } else {
          countMessage.push({
            groupId: from,
            numbers: [
              {
                id: sender,
                messages: 2,
                figus: 0,
                cmd_messages: isCmd ? 1 : 0,
                aparelho: adivinha,
                nick: pushname,
              },
            ],
          });
        }
        fs.writeFileSync(
          "./dados/countmsg.json",
          JSON.stringify(countMessage, null, 2) + "\n"
        );
      }

      //============(EVAL-EXECUÇÕES)===========\\

      if (budy.startsWith(">")) {
        try {
          if (info.key.fromMe) return;
          if (!SoDono && !isnit && !issupre && !ischyt && !issupre) return;
          console.log(
            "[",
            colors.cyan("EVAL"),
            "]",
            colors.yellow(
              moment(info.messageTimestamp * 1000).format("DD/MM HH:mm:ss")
            ),
            colors.green(budy)
          );
          return conn
            .sendMessage(from, {
              text: JSON.stringify(eval(budy.slice(2)), null, "\t"),
            })
            .catch((e) => {
              return reply(String(e));
            });
        } catch (e) {
          return reply(String(e));
        }
      }

      if (budy.startsWith("(>")) {
        try {
          if (info.key.fromMe) return;
          if (!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt)
            return;
          var konsol = budy.slice(3);
          Return = (sul) => {
            var sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return conn.sendMessage(from, { text: bang }, { quoted: info });
          };

          conn
            .sendMessage(from, {
              text: util.format(eval(`;(async () => { ${konsol} })()`)),
            })
            .catch((e) => {
              return reply(String(e));
            });
          console.log(
            "\x1b[1;37m>",
            "[",
            "\x1b[1;32mEXEC\x1b[1;37m",
            "]",
            time,
            colors.green(">"),
            "from",
            colors.green(sender.split("@")[0]),
            "args :",
            colors.green(args.length)
          );
        } catch (e) {
          reply(String(e));
          return console.log(e);
        }
      }

      if (body.startsWith("$")) {
        if (info.key.fromMe) return;
        if (!SoDono && !isnit) return;
        exec(q, (err, stdout) => {
          if (err) return reply(`${err}`);
          if (stdout) {
            reply(stdout);
          }
        });
      }

      //======================================\\

      //======(ANTI-IMAGEM)========\\
      if (isAntiImg && isBotGroupAdmins && type == "imageMessage") {
        if (info.key.fromMe) return;
        if (isGroupAdmins)
          return conn.sendMessage(from, { text: "👀" }, { quoted: info });
        conn.sendMessage(
          from,
          {
            text: "🤺_𝘼𝙦𝙪𝙞 𝙣𝙖‌𝙤 𝙥𝙤𝙙𝙚 𝙢𝙖𝙣𝙙𝙖𝙧 ~(𝗜𝗠𝗔𝗚𝗘𝗠)~ 𝙍𝙚𝙩𝙖𝙧𝙙𝙖𝙙𝙤 𝙣𝙖‌𝙤 𝙡𝙚𝙪 𝙖𝙨 𝙍𝙚𝙜𝙧𝙖𝙨❗️",
          },
          { quoted: info }
        );
        if (IS_DELETE) {
          setTimeout(() => {
            conn.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        if (!JSON.stringify(groupMembers).includes(sender)) return;
        conn.groupParticipantsUpdate(from, [sender], "remove");
      }

      //======(ANTI-STICKER)========\\
      if (isAntiSticker && isBotGroupAdmins && type == "stickerMessage") {
        if (info.key.fromMe) return;
        if (isGroupAdmins)
          return conn.sendMessage(from, { text: "👀" }, { quoted: info });
        conn.sendMessage(
          from,
          {
            text: "🤺_𝘼𝙦𝙪𝙞 𝙣𝙖‌𝙤 𝙥𝙤𝙙𝙚 𝙢𝙖𝙣𝙙𝙖𝙧 ~(𝗙𝗜𝗚𝗨𝗥𝗜𝗡𝗛𝗔)~ 𝙣𝙖‌𝙤 𝙡𝙚𝙪 𝙖𝙨 𝙍𝙚𝙜𝙧𝙖𝙨 🤔",
          },
          { quoted: info }
        );
        if (IS_DELETE) {
          setTimeout(() => {
            conn.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        if (!JSON.stringify(groupMembers).includes(sender)) return;
        conn.groupParticipantsUpdate(from, [sender], "remove");
      }

      if (
        Antidoc &&
        isBotGroupAdmins &&
        !isGroupAdmins &&
        type == "documentMessage"
      ) {
        if (info.key.fromMe) return;
        if (dataGp[0].legenda_documento != "0") {
          conn.sendMessage(
            from,
            { text: dataGp[0].legenda_documento },
            { quoted: info }
          );
        }
        if (IS_DELETE) {
          setTimeout(() => {
            conn.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        if (!JSON.stringify(groupMembers).includes(sender)) return;
        conn.groupParticipantsUpdate(from, [sender], "remove");
      }

      let isTrueFalse = [
        "tiktok",
        "face_audio",
        "tiktok_audio",
        "facebook",
        "instagram",
        "insta_audio",
        "twitter",
        "twitter_audio",
        "ytmp3",
        "ytmp4",
        "play",
        "play_audio",
        "play_video",
        "play",
      ].some((item) => item === command);

      if (
        isUrl(Procurar_String) &&
        isAntiLinkHard &&
        !isGroupAdmins &&
        isBotGroupAdmins &&
        !info.key.fromMe &&
        !isTrueFalse
      ) {
        if (Procurar_String.includes("chat.whatsapp.com")) {
          var link_dgp = await conn?.groupInviteCode(from);
          if (
            link_dgp &&
            Procurar_String.match(link_dgp) &&
            Procurar_String.split(" ").filter(
              (x) => x === "https://chat.whatsapp.com/"
            ).length < 2
          ) {
            return reply(
              "𝙇𝙞𝙣𝙠 𝙙𝙤 𝙣𝙤𝙨𝙨𝙤 𝙜𝙧𝙪𝙥𝙤, 𝙣𝙖̃𝙤 𝙞𝙧𝙚𝙞 𝙧𝙚𝙢𝙤𝙫𝙚𝙧... 𝙈𝙖𝙞𝙨 𝙩𝙖𝙧𝙙𝙚 𝙢𝙖𝙣𝙙𝙖 𝙛𝙤𝙩𝙤 𝙙𝙖 𝙧𝙖𝙗𝙖 𝙣𝙤 𝙥𝙫 𝙙𝙤 𝙗𝙤𝙩 𝙚 𝙛𝙞𝙘𝙖𝙧𝙚𝙢𝙤𝙨 𝙠𝙞𝙩𝙨 😏"
            );
          }
        }

        var groupMemberIds = new Set(groupMembers.map((i) => i.id));

        if (groupMemberIds.has(sender)) {
          if (!dataGp[0]?.advlink) {
            if (
              TEXTOS_GERAL?.TEXTO_REMOCAO_ANTI_LINK &&
              TEXTOS_GERAL?.TEXTO_REMOCAO_ANTI_LINK !== "0"
            ) {
              conn.sendMessage(from, {
                text: TEXTOS_GERAL?.TEXTO_REMOCAO_ANTI_LINK.replaceAll(
                  "#usuario#",
                  "@" + sender.split("@")[0]
                ),
                mentions: [sender],
              });
            }
            conn.groupParticipantsUpdate(from, [sender], "remove");
          } else {
            if (Advt_Link === false) {
              dataGp[0].advtlink = [{ id: sender, adv: 1 }];
              setGp(dataGp);
            } else if (Advt_Link === null) {
              dataGp[0].advtlink.push({ id: sender, adv: 1 });
              setGp(dataGp);
            } else {
              dataGp[0].advtlink.find((i) => i.id === sender).adv += 1;
              setGp(dataGp);
            }
            if (Advt_Link > 1) {
              reply(
                "Ei fdp, você completou 3 advertencias, enviando 3 links de grupo, então irei te passar a faca, sinto muito 😿 Só que não 😝"
              );
              dataGp[0].advtlink.splice(
                dataGp[0].advtlink.findIndex((i) => i.id === sender),
                1
              );
              setGp(dataGp);
              return conn.groupParticipantsUpdate(from, [sender], "remove");
            }
            if (Advt_Link !== false) {
              reply(
                `Ou fdp, você enviou um link, e então foi advertido em ${
                  dataGp[0].advtlink.find((i) => i.id === sender)?.adv || 0
                }/3, não envie mais, pois se enviar vou acabar te passando a faca 😏`
              );
            }
          }
        }

        OSINF_K.push(info.key.id);
        conn.groupSettingUpdate(from, "announcement");
        setTimeout(() => {
          conn.groupSettingUpdate(from, "not_announcement");
        }, 1500);

        setTimeout(async () => {
          for (var i of OSINF_K) {
            conn.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: i,
                participant: sender,
              },
            });
            OSINF_K = [];
          }
        }, 500);
      }

      //FINALZIN ==============================>

      //======(ANTI-VIDEO)========\\

      if (
        isAntiVid &&
        isBotGroupAdmins &&
        !isGroupAdmins &&
        type == "videoMessage"
      ) {
        if (info.key.fromMe) return;
        if (isGroupAdmins)
          return conn.sendMessage(from, { text: "👀" }, { quoted: info });
        conn.sendMessage(
          from,
          {
            text: "🤺_𝘼𝙦𝙪𝙞 𝙣𝙖‌𝙤 𝙥𝙤𝙙𝙚 𝙢𝙖𝙣𝙙𝙖𝙧 ~(𝗩𝗜́𝗗𝗘𝗢)~ 𝙍𝙚𝙩𝙖𝙧𝙙𝙖𝙙𝙤 𝙣𝙖‌𝙤 𝙡𝙚𝙪 𝙖𝙨 𝙍𝙚𝙜𝙧𝙖𝙨❗",
          },
          { quoted: info }
        );
        if (IS_DELETE) {
          setTimeout(() => {
            conn.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        if (!JSON.stringify(groupMembers).includes(sender)) return;
        conn.groupParticipantsUpdate(from, [sender], "remove");
      }

      //======(ANTI-AUDIO)=======\\
      if (
        isAntiAudio &&
        isBotGroupAdmins &&
        !isGroupAdmins &&
        type == "audioMessage"
      ) {
        if (info.key.fromMe) return;
        if (isGroupAdmins)
          return conn.sendMessage(from, { text: "👀" }, { quoted: info });
        conn.sendMessage(
          from,
          {
            text: "🤺_𝘼𝙦𝙪𝙞 𝙣𝙖‌𝙤 𝙥𝙤𝙙𝙚 𝙢𝙖𝙣𝙙𝙖𝙧 ~(𝗔𝗨𝗗𝗜𝗢)~ 𝙍𝙚𝙩𝙖𝙧𝙙𝙖𝙙𝙤 𝙣𝙖‌𝙤 𝙡𝙚𝙪 𝙖𝙨 𝙍𝙚𝙜𝙧𝙖𝙨❗",
          },
          { quoted: info }
        );
        if (IS_DELETE) {
          setTimeout(() => {
            conn.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        if (!JSON.stringify(groupMembers).includes(sender)) return;
        conn.groupParticipantsUpdate(from, [sender], "remove");
      }

      //========(ANTI-PV-QUE-BLOQUEIA)======\\

      var BLC_CL = [];
      if (isAntiPv && !BLC_CL.includes(sender)) {
        if (!isGroup && !SoDono && !isnit && !isPremium) {
          await sleep(2500);
          reply(msgantipv1);
          setTimeout(async () => {
            conn.updateBlockStatus(sender, "block");
          }, 2000);
          return;
        }
        BLC_CL.push(sender);
      }

      //======================================\\

      function sendAlert() {
        var hora_ = moment.tz("America/Sao_Paulo").format("HH:mm");
        var hora_2 = moment.tz("America/Sao_Paulo").format("mm");
        var dataAtual = moment.tz("America/Sao_Paulo").format("YYYY-MM-DD");

        var blu_dc = black_.some((i) => i.hora === hora_);
        if (blu_dc) {
          let ik = black_.find((i) => i.hora === hora_);
          for (let i of ik?.PUXAR) {
            if (i.avisou === dataAtual) return;
            if (i.length === 0) return;
            conn.sendMessage(i.idgp, { text: i.msg });
            i.avisou = dataAtual;
            fs.writeFileSync(
              "./dados/global/AVISOS.json",
              JSON.stringify(black_, null, 2)
            );
          }
        }

        var ik_r = black_.some(
          (i) => hora_2 >= parseInt(i.hora.split(":")[1]) + 1
        );
        if (ik_r) {
          let ik2 = black_.find(
            (i) => hora_2 >= parseInt(i.hora.split(":")[1]) + 1
          );
          for (let i of ik2.PUXAR) {
            if (i.avisou && i.avisou !== dataAtual) {
              fs.writeFileSync(
                "./dados/global/AVISOS.json",
                JSON.stringify(black_, null, 2)
              );
            }
          }
        }
        setTimeout(sendAlert, 60000);
      }

      sendAlert();

      //=========(ANTIPV-QUE-SÓ-FALA)==========\\

      if (
        !isGroup &&
        !isPremium &&
        !SoDono &&
        !isnit &&
        !issupre &&
        !ischyt &&
        !info.key.fromMe &&
        isAntiPv2 &&
        !MSG_ANTPV2.includes(sender)
      ) {
        MSG_ANTPV2.push(sender);
        return reply(msgantipv2);
      }

      //======================================\\

      // ANTI PV QUE IGNORA
      if (!isGroup && !isPremium && !SoDono && !info.key.fromMe && isAntiPv3) {
        return;
      }

      // ANTI_LIGAR \\
      if (!isGroup && isAnticall && !BLC_ANTCL.includes(sender)) {
        conn.ws.on("CB:call", async (B) => {
          if (B.content[0].tag == "offer") {
            conn
              .sendMessage(B.content[0].attrs["call-creator"], {
                text: "_- 🫵🏻 Ô filho da puta não liga pro bot, tá vendo que é um robô 🤦🏻‍♂️ - _\n\n Tá carente caralho, vai ser bloqueado seu lixo desgraçado tmnc 🤬\n\n_- 🖕🏿🖕🏿🖕🏿🖕🏿🖕🏿🖕🏿 _-",
              })
              .then(() => {
                conn.updateBlockStatus(
                  B.content[0].attrs["call-creator"],
                  "block"
                );
              });
          }
        });
        BLC_ANTCL.push(sender);
      }

      //======================================\\ ANTNMSCVRS

      // X9 Visualização Única - Apenas em grupos
      if (isGroup && isX9VisuUnica) {
        if (
          info.message?.viewOnceMessageV2 ||
          info.message?.viewOnceMessage ||
          type === "viewOnceMessage" ||
          type === "viewOnceMessageV2"
        ) {
          try {
            var Fl = info?.message;
            var Dfn =
              Fl?.viewOnceMessage?.message?.imageMessage ||
              Fl?.viewOnceMessageV2?.message?.imageMessage ||
              Fl?.viewOnceMessage?.message?.videoMessage ||
              Fl?.viewOnceMessageV2?.message?.videoMessage;

            if (!Dfn) {
              console.log("[X9 VisuUnica] Mensagem viewOnce não encontrada");
            } else {
              console.log("[X9 VisuUnica] Processando visualização única...");

              // Determinar tipo de mídia
              const mediaType = Dfn.mimetype?.split("/")[0] || "image";
              console.log("[X9 VisuUnica] Tipo de mídia:", mediaType);

              // Usar downloadContentFromMessage do Baileys
              const stream = await downloadContentFromMessage(Dfn, mediaType);

              let buffer = Buffer.from([]);
              for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
              }

              console.log("[X9 VisuUnica] Download completo, enviando...");

              // Enviar a mídia revelada
              await conn.sendMessage(from, {
                [mediaType]: buffer,
                mimetype: Dfn.mimetype,
                caption: Dfn?.caption
                  ? `🔓 *Visualização Única Revelada*\n\n📝 Legenda: ${Dfn.caption}\n\n😏 Tu queria mandar isso em visu-única... se fudeu! 🖕🏿😝`
                  : "🔓 *Visualização Única Revelada*\n\n😏 Tu queria mandar isso em visu-única... se fudeu! 🖕🏿😝",
              });

              console.log("[X9 VisuUnica] Enviado com sucesso!");
            }
          } catch (error) {
            console.error("[X9 VisuUnica] Erro ao processar:", error);
            reply("❌ Erro ao revelar visualização única.");
          }
        }
      }

      /////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

      if (isBanned) return;

      var palavrasfr = JSON.parse(
        fs.readFileSync("./dados/global/palavras_forca.json")
      );

      var palavrasfrc =
        palavrasfr[Math.floor(Math.random() * palavrasfr.length)];

      var ALT_FR = palavrasfrc?.plvr
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      async function rv_forca() {
        var blue = [];
        for (var i = 0; i < ALT_FR.length; i++) {
          if (ALT_FR[i] == " ") {
            blue.push(" ");
          } else {
            blue.push("_");
          }
        }
        dataGp[0].forca_ofc = [
          {
            acertos: 0,
            erros: 0,
            palavra: blue,
            escreveu: [],
            palavra_ofc: ALT_FR,
            dica: palavrasfrc.dica,
            tema: palavrasfrc.tema,
          },
        ];
        dataGp[0].forca_inc = false;
        setGp(dataGp);
      }

      if (
        isGroup &&
        (nescessario?.isRecolherLink || isRecolherlinksgp) &&
        budy.includes("https://chat.whatsapp.com")
      ) {
        var L_WTS = "https://chat.whatsapp.com/";

        for (var i = 1; i < body.split(L_WTS).length; i++) {
          if (
            !JSON.stringify(recolherLNK.map((i) => i.Link)).includes(
              L_WTS + body.split(L_WTS)[i].slice(0, 22)
            )
          )
            recolherLNK.push({
              Link: L_WTS + body.split(L_WTS)[i].slice(0, 22),
            });
        }
        fs.writeFileSync(
          "./dados/org/funcoes/recolherLNK.json",
          JSON.stringify(recolherLNK, null, 2)
        );
      }

      if (!isPremium && nescessario.cmdpremium.includes(command))
        return reply(`Este comando é apenas para
usuário premium, se deseja adquirir, fale com meu dono:
https://wa.me/${numerodono_ofc}`);

      // PRA LIMPAR DO CONTADOR QUEM NÃO ESTÁ NO GRUPO
      async function LIMPARDOCNT_QUEMJASAIU() {
        var RD_CNT =
          countMessage[countMessage.map((i) => i.groupId).indexOf(from)]
            .numbers;
        CNT1 = [];
        for (i of groupMembers) {
          CNT1.push(i.id);
        }
        CNT = [];
        for (i of RD_CNT) {
          if (!CNT1.includes(i.id)) CNT.push(i);
        }
        for (i of CNT) {
          RD_CNT.splice(RD_CNT.map((i) => i.id).indexOf(i.id), 1);
        }
        fs.writeFileSync(
          "./dados/countmsg.json",
          JSON.stringify(countMessage, null, 2)
        );

        if (IS_sistemGold) {
          let BLUE = [];
          rggold[ID_G_GOLD].usus.map((ab) => {
            if (!groupMembers.map((i) => i.id).includes(ab.id))
              BLUE.push(ab.id);
          });

          BLUE.forEach(function (a) {
            rggold[ID_G_GOLD].usus.splice(
              rggold[ID_G_GOLD].usus.findIndex((i) => i.id === a),
              1
            );
          });
          Goldrgs(rggold);
        }
      }

      if (
        (nescessario?.rg_aluguelGB ||
          (isGroup && dataGp[0]?.rg_aluguel) ||
          false) &&
        !rg_aluguel.some((i) => i.id_gp == from) &&
        !SoDono &&
        isCmd
      ) {
        return reply(
          `𝙁𝙖𝙡𝙚 𝙘𝙤𝙢 𝙤 𝙈𝙚𝙪 𝘿𝙤𝙣𝙤 𝙥𝙖𝙧𝙖 𝙧𝙚𝙣𝙤𝙫𝙖𝙧 𝙤 (𝗮𝗹𝘂𝗴𝘂𝗲𝗹) 🥹\nhttps://wa.me/${numerodono_ofc}`
        );
      }

      if (
        (nescessario?.rg_aluguelGB ||
          (isGroup && dataGp[0]?.rg_aluguel) ||
          false) &&
        rg_aluguel.some((ab) => {
          var tempo_A = Math.floor(Date.now() / 1000);
          var VNCM = Math.floor(ab?.vencimento);
          return tempo_A > VNCM;
        })
      ) {
        var RS_P = [];

        for (var abc of rg_aluguel) {
          var tempo_A = Math.floor(Date.now() / 1000);
          var VNCM = Math.floor(abc?.vencimento);
          if (tempo_A > VNCM) {
            console.log(
              colors.blue(
                `Grupo / Usuario: ${abc.nome_}\nID: ${abc.id_gp}\n\n𝙀𝙓𝙋𝙄𝙍𝙊𝙐 𝙊 𝘼𝙇𝙐𝙂𝙐𝙀𝙇...☝🏻`
              )
            );
            RS_P.push(
              `Grupo: ${abc.nome_}\nID: ${abc.id_gp}\n\❌𝙀𝙓𝙋𝙄𝙍𝙊𝙐 𝙊 𝘼𝙇𝙐𝙂𝙐𝙀𝙇❌`
            );
            rg_aluguel.splice(
              rg_aluguel.findIndex((a) => a.id_gp === abc.id_gp),
              1
            );
          }
        }

        conn.sendMessage(numerodono_ofc + "@s.whatsapp.net", {
          text: RS_P.join("\n"),
        });
        fs.writeFileSync(
          "./dados/org/json/rg_aluguel.json",
          JSON.stringify(rg_aluguel, null, 2)
        );
      }

      if (
        isGroup &&
        isCmd &&
        !isGroupAdmins &&
        !SoDono &&
        !isPremium &&
        dataGp[0]?.Limitar_CMD
      ) {
        var TEMPO_A = Math.floor(Date.now() / 1000);

        var ID_G = Limit_CMD.findIndex((i) => i.idgp === from);
        var ID_U = Limit_CMD[ID_G]?.ids.findIndex((i) => i.id === sender);

        if (
          !JSON.stringify(Limit_CMD).includes(from) ||
          (ID_G < 0 && ID_U < 0)
        ) {
          Limit_CMD.push({ idgp: from, ids: [{ id: sender, tempo: TEMPO_A }] });
          fs.writeFileSync(
            "./dados/global/limitarcmd.json",
            JSON.stringify(Limit_CMD, null, 2)
          );
        } else if (ID_G >= 0 && ID_U < 0) {
          Limit_CMD[ID_G].ids.push({ id: sender, tempo: TEMPO_A });
          fs.writeFileSync(
            "./dados/global/limitarcmd.json",
            JSON.stringify(Limit_CMD, null, 2)
          );
        }

        if (ID_G >= 0 && ID_U >= 0) {
          var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;

          var TEMPO_M = TEMPO_A - TEMPO_D;

          var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60;

          if (TEMPO_M < TEMPO_D2) {
            return reply(
              nescessario.TEMPO_DE_CMD.replaceAll(
                "#tempocmd#",
                kyun(TEMPO_M)
              ).replaceAll("#tempo#", TEMPO_D2)
            );
          } else {
            Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A;
            fs.writeFileSync(
              "./dados/global/limitarcmd.json",
              JSON.stringify(Limit_CMD, null, 2)
            );
          }
        }
      }

      if (
        IS_sistemGold &&
        !info.key.fromMe &&
        isGroup &&
        isBotGroupAdmins &&
        isCmd &&
        dataGp[0]?.comandos_gold?.length >= 1 &&
        dataGp[0].comandos_gold.some((i) => i.comando === command)
      ) {
        var Df_C =
          dataGp[0].comandos_gold[
            dataGp[0].comandos_gold.findIndex((i) => i.comando === command)
          ];
        if (S_Sistema.RS(sender, "Golds") < Df_C.gold)
          return reply(
            "Você não tem Golds suficiente para utilizar este comando 🥱"
          );
        setTimeout(() => {
          S_Sistema.RM(sender, Df_C.gold);

          mention(
            `${tempo} @${sender2} após o uso do comando ${
              Df_C.comando
            } foi consumido ${Df_C.gold} Golds dos seus > ${
              parseInt(S_Sistema.RS(sender, "Golds")) + parseInt(Df_C.gold)
            } Golds`
          );
        }, 500);
      }

      if (
        premium.length > 0 &&
        premium.map(
          (tm_) => Math.floor(tm_.tempo) < Math.floor(Date.now() / 1000)
        )
      ) {
        premium.map((us) => {
          if (Math.floor(us.tempo) < Math.floor(Date.now() / 1000)) {
            premium.splice(premium.map((i) => i.usus).indexOf(us.usus), 1);
            conn.sendMessage(nmrdn_dono2, {
              text: `Premium do usuário: wa.me/${
                us.usus.split("@")[0]
              }, expirou.`,
            });
          }
        });
        fs.writeFileSync(
          "./dados/global/premium.json",
          JSON.stringify(premium, null, 2)
        );
      }

      const Os_Returns = (A, B, C) => {
        if (A && !isGroup) return { true: true, txt: Res_SoGrupo };
        if (B && !isGroupAdmins) return { true: true, txt: Res_SoAdm };
        if (C && !isBotGroupAdmins) return { true: true, txt: Res_BotADM };
        return { true: false };
      };

      // Verificar se usuário está mutado e banir automaticamente
      // ✨ NOVO SISTEMA DE MUTE - Deleção Silenciosa de Mensagens
      if (isGroup && !isGroupAdmins && !SoDono) {
        try {
          // Verificar se usuário está mutado (compatível com LID)
          if (isMuted(from, sender)) {
            // Deletar a mensagem SILENCIOSAMENTE
            try {
              await conn.sendMessage(from, {
                delete: {
                  remoteJid: from,
                  fromMe: false,
                  id: info.key.id,
                  participant: sender,
                },
              });

              // Incrementar contador de mensagens deletadas
              incrementDeletedMessages(from, sender);

              console.log(
                `🔇 Mensagem deletada de usuário mutado: @${
                  sender.split("@")[0]
                }`
              );
            } catch (delError) {
              console.log(
                "⚠️ Não foi possível deletar a mensagem:",
                delError.message
              );
            }

            // NÃO enviar mensagem pública
            // NÃO remover do grupo
            // Apenas deletar silenciosamente

            return; // Não processar mais nada
          }
        } catch (error) {
          console.error("Erro ao verificar usuário mutado:", error);
        }
      }

      //INICIO DE COMANDO DE PREFIXO
      switch (command) {
        //_-1 AQUI SERÁ A ÁREA DE COMANDOS DE INFORMAÇÕES OU COMANDOS DE INFORMAR SOBRE ALGO, PRATICAMENTE FALANDO: CLÁSSICO

        case "getlid":
          const [result] = await conn.onWhatsApp(q.trim());
          const lid = result?.lid;
          if (!lid) {
            return reply(`Lid não encontrado!`);
          }
          return reply(`Seu lid: ${lid}`);
        case "roll":
          var [d1, d2] = q.toLowerCase().trim().split("d");
          var [d3] = q.toLowerCase().trim().split("+") || 0;
          if (parseInt(d1) > 200)
            return reply("Quantidade de dados muito exagerado.");
          if (!q.toLowerCase().includes("d"))
            return reply(`Exemplo: ${prefix}roll 2d20`);
          if (!Number(parseInt(d2)))
            return reply(`Exemplo: ${prefix}roll 2d20`);
          let RS_D = "Resultado dos Dados:\n\n";
          for (i = 0; i < d1; i++) {
            RS_D += `[ ${i + 1} ] ${Math.floor(
              Math.random() * parseInt(d2) + parseInt(d3)
            )}\n\n`;
          }
          reply(RS_D);
          break;

        case "iaimg":
          if (!q.trim())
            return reply(
              `digite algo, Exemplo: ${prefix + command} JosivalS de cueca 😏`
            );
          try {
            reply("Aguarde, estou realizando esta ação 🥱");
            conn.sendMessage(
              from,
              { image: { url: reqapi.iaimg(q.trim()) } },
              { quoted: info }
            );
          } catch (e) {
            reply("Erro... 🥱");
          }
          break;

        case "owner":
        case "odono":
        case "dono":
        case "infodono":
          numerodn = numerodono_ofc;
          conn.sendMessage(
            from,
            {
              image: { url: logoslink.logo },
              caption: infodono(prefix, numerodn, NomeDoBot, sender),
              mentions: [sender],
            },
            { quoted: selo }
          );
          break;

        case "tabela":
          conn.sendMessage(
            from,
            { text: tabela(prefix, NomeDoBot) },
            { quoted: selo }
          );
          break;

        case "idiomas":
        case "idioma":
          reply(
            `As infos apenas são através do comando, use: ${prefix}info gtts\n\nIsso serve para outros comandos, por exemplo: ${prefix}info listanegra`
          );
          break;
/*
        case "git":
        case "git-bot":
        case "gitdobot":
        case "bronxys":
          reply(
            `🏆 Quer jogar no time dos campeões da hospedagem?
Então chega mais na bronxyshost.com
 😍 —
o líder absoluto em hospedagem e APIs no Brasil.

Aqui é jogo rápido:
⚡ Servidores turbo → zero lag, só velocidade de atleta olímpico
🛡️ Segurança de ponta → sua base sempre protegida no escudo
🤖 Estrutura de respeito → pensada pra bots, APIs e projetos de alto nível
💻 Suporte 24/7 → nunca abandona o campo, sempre pronto pro próximo round

🔥 BronxysHost: onde sua ideia entra em campo e sai campeã.`
          );

          break;
          
        case "tutorial":
          reply(
            `Quer aprender a instalar o Aleatory sem complicação?
Então confere esse passo a passo que preparei pra você 👉 https://youtu.be/ymSaelbslXA?si=V17dWSScvGgwR9Nx`
          );
          break;
*/
        //_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-/

        //_-2 ÁREA DE COMANDOS SÓ PRA ADMINISTRADORES

        case "get":
          {
            const msg = info?.message;
            const ctx = msg?.extendedTextMessage?.contextInfo;

            if (!ctx?.quotedMessage) {
              return reply("❌ Marque uma mensagem para pegar as infos.");
            }

            const quotedInfo = {
              mentionedJid: ctx.participant,
              stanzaId: ctx.stanzaId,
              message: ctx.quotedMessage,
            };

            console.log("[DEBUG] quotedInfo:", quotedInfo);

            reply(JSON.stringify(quotedInfo, null, 2));
          }
          break;
        case "addautorm":
        case "addautoban":
        case "listanegra":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!mrc_ou_numero)
            return reply(
              "Marque a mensagem do lixo com o comando!Então utilize o comando com o número do lixo que deseja adicionar na Lista Negra 🚯"
            );
          // Corrigido para Baileys 7.0+ - compatibilidade com LID
          if (isJidInList(mrc_ou_numero, dataGp[0].listanegra))
            return reply(
              "𝘀𝘴𝘵𝘦 𝘪𝘯𝘶́𝘵𝘪𝘭 𝘫𝘢 𝘦𝘴𝘵𝘢 𝘪𝘯𝘤𝘭𝘶𝘴𝘰 𝘯𝘢 𝘭𝘪𝘴𝘵𝘢 𝘯𝘦𝘨𝘳𝘢,𝘎𝘦 𝘦𝘭𝘦 𝘥𝘢 𝘢𝘴 𝘤𝘢𝘳𝘢𝘴 𝘱𝘰𝘳 𝘢𝘲𝘶𝘪 𝘪𝘳𝘦𝘪 𝘱𝘢𝘴𝘴𝘢𝘳 𝘢 𝘧𝘢𝘤𝘢 𝘴𝘦𝘮 𝘥𝘰́ 𝘦 𝘴𝘦𝘮 𝘗𝘪𝘦𝘥𝘢𝘥𝘦 🥱"
            );
          // Adicionar usando função que normaliza o JID
          addJidToList(mrc_ou_numero, dataGp[0].listanegra);
          setGp(dataGp);
          reply(
            `𝘗𝘰𝘳 𝘰𝘳𝘥𝘦𝘯𝘴 𝘥𝘰 𝘼𝘥𝘮𝘪𝘳𝘰 𝘦𝘶 𝘢𝘥𝘪𝘤𝘪𝘰𝘯𝘦𝘪 𝘦𝘴𝘵𝘦 𝘪𝘯𝘶́𝘵𝘪𝘭 𝘯𝘢 𝘭𝘪𝘴𝘵𝘢!𝘎𝘦 𝘦𝘭𝘦 𝘥𝘢 𝘢𝘴 𝘤𝘢𝘳𝘢𝘴 𝘱𝘰𝘳 𝘢𝘲𝘶𝘪 𝘫𝘰𝘶 𝘮𝘰𝘦𝘳 𝘯𝘢 𝘗𝘰𝘳𝘳𝘢𝘥𝘢 🤬`
          );
          break;

        case "delremover":
        case "delautorm":
        case "delautoban":
        case "tirardalista":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!mrc_ou_numero)
            return reply(
              "Marque a mensagem do trouxa com o comando!Então utilize o comando com o número do trouxa que deseja tirar da Lista Negra 😒"
            );
          // Corrigido para Baileys 7.0+ - compatibilidade com LID
          if (!isJidInList(mrc_ou_numero, dataGp[0].listanegra))
            return reply("𝘀𝘴𝘵𝘦 𝘪𝘯𝘴𝘦𝘵𝘰 𝘯𝘢̃𝘰 𝘦𝘴𝘵𝘢 𝘪𝘯𝘤𝘭𝘶𝘴𝘰 🥱");
          // Remover usando função que normaliza o JID
          dataGp[0].listanegra = removeJidFromList(
            mrc_ou_numero,
            dataGp[0].listanegra
          );
          setGp(dataGp);
          reply(
            `𝘗𝘰𝘳 𝘰𝘳𝘥𝘦𝘯𝘴 𝘥𝘰 𝘼𝘥𝘮𝘪𝘳𝘰 𝘦𝘶 𝘵𝘪𝘳𝘦𝘪 𝘦𝘴𝘴𝘦 𝘧𝘪 𝘥𝘦 𝘳𝘢𝘱𝘢𝘳𝘪𝘨𝘢 𝘥𝘢 𝘭𝘪𝘴𝘵𝘢 𝘯𝘦𝘨𝘳𝘢,𝘼𝘨𝘰𝘳𝘢 𝘦𝘭𝘦 𝘱𝘰𝘥𝘦 𝘦𝘯𝘵𝘳𝘢𝘳 𝘯𝘰 𝘂𝘳𝘶𝘱𝘰 🥱`
          );
          break;

        case "listban":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (dataGp[0].listanegra.length < 1)
            return reply("*Nenhum Número não foi adicionado*");
          teks = "*Números que vou moer na porrada se voltar 😡:*\n";
          for (i = 0; i < dataGp[0].listanegra.length; ++i) {
            // Corrigido para Baileys 7.0+ - extrair número corretamente
            teks += `➞ *${extractNumber(dataGp[0].listanegra[i])}*\n`;
          }
          teks += "*Esses ai vou descer meu martelo do ban 🥵*";
          reply(teks);
          break;

        case "band":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          try {
            if (!menc_os2 || menc_jid2[1])
              return reply(
                "Marque a mensagem do inseto ou marque o @ dele.., lembre de só marcar um inseto por vez..."
              );
            if (IS_DELETE) {
              setTimeout(() => {
                conn.sendMessage(from, {
                  delete: {
                    remoteJid: from,
                    fromMe: false,
                    id: info.key.id,
                    participant: sender,
                  },
                });
              }, 500);
            }
            if (!JSON.stringify().includes(menc_os2))
              return reply("Este inseto já levou um pé na bunda 🥱");
            if (botNumber.includes(menc_os2))
              return reply(
                "𝙉𝙖̃𝙤 𝙨𝙤𝙪 𝙗𝙚𝙨𝙩𝙖 𝙙𝙚 𝙧𝙚𝙢𝙤𝙫𝙚𝙧 𝙚𝙪 𝙢𝙚𝙨𝙢𝙤 𝙣𝙚́ 🙁𝙀𝙨𝙩𝙤𝙪 𝙢𝙪𝙞𝙩𝙤 𝙙𝙚𝙘𝙚𝙥𝙘𝙞𝙤𝙣𝙖𝙙𝙤 𝙘𝙤𝙢 𝙫𝙤𝙘𝙚̂, 🥹"
              );
            if (numerodono.includes(menc_os2))
              return reply(
                "Não posso remover meu dono né seu filho da puta 🖕🏿🤧"
              );
            conn.sendMessage(from, {
              text: `@${menc_os2.split("@")[0]} 𝘾𝘼𝙄 𝙁𝙊𝙍𝘼 🏌🏻‍♂️`,
              mentions: [menc_os2],
            });
            conn.groupParticipantsUpdate(from, [menc_os2], "remove");
          } catch (e) {
            console.log(e);
          }
          break;

        case "ban":
        case "kick":
        case "b":
        case "🤺":
        case "vaza":
        case "🏌🏻‍♂️":
        case "🔪":
          if (Os_Returns(true, true, true).true) {
            console.log({
              groupAdmins,
              sender,
              SoDono,
              numerodono,
              isBot,
              isnit,
              issupre,
              ischyt,
              numerodono_lid,
              botNumber,
              bot: conn.user,
            });
            return reply(Os_Returns(true, true, true).txt);
          }

          try {
            if (!menc_os2 || menc_jid2[1])
              return reply(
                "Marque a mensagem do humano ou marque o @ dele.., lembre de só marcar um trouxa por vez,ficarei feliz de passar a faca nele 😏͜🔪"
              );
            if (!JSON.stringify(groupMembers).includes(menc_os2))
              return reply(
                "Este trouxa já levou um pé na bunda ou saiu do grupo 😏"
              );
            if (botNumber.includes(menc_os2))
              return reply(
                "𝙉𝙖̃𝙤 𝙨𝙤𝙪 𝙗𝙚𝙨𝙩𝙖 𝙙𝙚 𝙧𝙚𝙢𝙤𝙫𝙚𝙧 𝙚𝙪 𝙢𝙚𝙨𝙢𝙤 𝙣𝙚́ 🙁𝙀𝙨𝙩𝙤𝙪 𝙢𝙪𝙞𝙩𝙤 𝙙𝙚𝙘𝙚𝙥𝙘𝙞𝙤𝙣𝙖𝙙𝙤 𝙘𝙤𝙢 𝙫𝙤𝙘𝙚̂, 🥹"
              );
            if (JSON.stringify(numerodono).indexOf(menc_os2) >= 0)
              return reply(
                "𝙉𝙖̃𝙤 𝙥𝙤𝙨𝙨𝙤 𝙧𝙚𝙢𝙤𝙫𝙚𝙧 𝙢𝙚𝙪 𝙙𝙤𝙣𝙤 𝙣𝙚́ 𝙨𝙚𝙪 𝙛𝙞𝙡𝙝𝙤 𝙙𝙖 𝙥𝙪𝙩𝙖 🖕🏿🤧"
              );
            conn.sendMessage(from, {
              text: TEXTOS_GERAL.COMANDO_BAN_MENSAGEM.replaceAll(
                "#usuario#",
                "@" + menc_os2.split("@")[0]
              ),
              mentions: [menc_os2],
            });
            conn.groupParticipantsUpdate(from, [menc_os2], "remove");
          } catch (e) {
            console.log(e);
          }
          break;

        case "promover":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (isAudioMenu) {
            conn.sendMessage(
              from,
              {
                audio: { url: "./dados/audios/promover.ogg" },
                mimetype: "audio/ogg; codecs=opus",
                ptt: true,
              },
              { quoted: info }
            );
          }
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque a mensagem do cara ou marque o @ dele.., lembre de só marcar um por vez 🥱"
            );
          if (!JSON.stringify(groupMembers).includes(menc_os2))
            return reply(
              "Este inseto foi removido do grupo ou saiu, não será possível promover.."
            );
          conn.sendMessage(from, {
            text: TEXTOS_GERAL.COMANDO_PROMOVEU_MENSAGEM.replace(
              "#usuario#",
              "@" + menc_os2.split("@")[0]
            ),
            mentions: [menc_os2],
          });
          conn.groupParticipantsUpdate(from, [menc_os2], "promote");
          break;

        case "rebaixar":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!menc_os2 || menc_jid2[1])
            return reply("Marque a mensagem do cara ou marque o @ dele 🥱");
          if (!JSON.stringify(groupMembers).includes(menc_os2))
            return reply(
              "Este inseto foi removido do grupo ou saiu, não será possível rebaixar 🥱"
            );
          conn.sendMessage(from, {
            text: TEXTOS_GERAL.COMANDO_REBAIXOU_MENSAGEM.replaceAll(
              "#usuario#",
              "@" + menc_os2.split("@")[0]
            ),
            mentions: [menc_os2],
          });
          conn.groupParticipantsUpdate(from, [menc_os2], "demote");
          break;

        case "mute":
        case "mutar":
          try {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!isGroupAdmins) return reply(Res_SoAdm);
            if (!menc_os2) return reply("❌ Marque alguém para mutar 🙄");

            // Verificar se não é o bot ou dono
            if (
              areJidsEqual(botJid, menc_os2) ||
              (botLid && areJidsEqual(botLid, menc_os2))
            )
              return reply("❌ Não posso me mutar 🤔");
            if (isJidInList(menc_os2, [numerodono]))
              return reply("❌ Não posso mutar meu dono 🙄");

            // Verificar se não é outro ADM
            if (groupAdmins.some((admin) => areJidsEqual(admin, menc_os2)))
              return reply("❌ Não posso mutar outro administrador 🙄");

            // Verificar se já está mutado
            if (isMuted(from, menc_os2)) {
              return reply("⚠️ Este usuário já está mutado.");
            }

            // Extrair motivo (opcional)
            const reason = q.trim() || "Não especificado";

            // Mutar usuário
            const success = muteUser(from, menc_os2, sender, reason);

            if (success) {
              conn.sendMessage(
                from,
                {
                  text: `✅ @${
                    menc_os2.split("@")[0]
                  } foi mutado.\n\n🔇 Suas mensagens serão deletadas automaticamente.\n📊 Motivo: ${reason}\n👤 Mutado por: @${
                    sender.split("@")[0]
                  }\n\nPara desmutar, use: !desmute @${menc_os2.split("@")[0]}`,
                  mentions: [menc_os2, sender],
                },
                { quoted: info }
              );
            } else {
              reply("❌ Erro ao mutar usuário.");
            }
          } catch (error) {
            console.error("Erro no comando mute:", error);
            reply("❌ Erro ao mutar usuário.");
          }
          break;

        case "desmute":
        case "desmutar":
        case "unmute":
          try {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!isGroupAdmins) return reply(Res_SoAdm);
            if (!menc_os2) return reply("❌ Marque alguém para desmutar 🙄");

            // Desmutar usuário
            const muteData = unmuteUser(from, menc_os2);

            if (muteData) {
              const deletedCount = muteData.deletedMessages || 0;
              conn.sendMessage(
                from,
                {
                  text: `✅ @${
                    menc_os2.split("@")[0]
                  } foi desmutado.\n\n✅ Pode enviar mensagens novamente.\n📊 Total de mensagens deletadas: ${deletedCount}`,
                  mentions: [menc_os2],
                },
                { quoted: info }
              );
            } else {
              reply("❌ Este usuário não está mutado.");
            }
          } catch (error) {
            console.error("Erro no comando desmute:", error);
            reply("❌ Erro ao desmutar usuário.");
          }
          break;

        case "listmute":
        case "listamute":
        case "mutados":
        case "listmutados":
          try {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!isGroupAdmins) return reply(Res_SoAdm);

            const mutedList = getMutedUsers(from);

            if (mutedList.length === 0) {
              return reply("✅ Não há usuários mutados neste grupo.");
            }

            let text = `🔇 *USUÁRIOS MUTADOS* 🔇\n\nTotal: ${
              mutedList.length
            } usuário${mutedList.length > 1 ? "s" : ""}\n\n`;
            let mentions = [];

            mutedList.forEach((muted, index) => {
              const mutedDate = new Date(muted.mutedAt);
              const formattedDate = mutedDate.toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              });

              text += `${index + 1}️⃣ @${muted.number}\n`;
              text += `   📅 Mutado em: ${formattedDate}\n`;
              text += `   👤 Mutado por: @${extractNumber(muted.mutedBy)}\n`;
              text += `   📊 Mensagens deletadas: ${
                muted.deletedMessages || 0
              }\n`;
              text += `   📋 Motivo: ${muted.reason || "Não especificado"}\n\n`;

              mentions.push(muted.jid);
              mentions.push(muted.mutedBy);
            });

            conn.sendMessage(
              from,
              {
                text: text.trim(),
                mentions: mentions,
              },
              { quoted: info }
            );
          } catch (error) {
            console.error("Erro no comando listmute:", error);
            reply("❌ Erro ao listar usuários mutados.");
          }
          break;

        case "sorteionumero":
        case "sorteionumeros":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          try {
            if (!q.trim())
              return reply(
                `Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`
              );
            let rs_ = `🎉Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n🔥፝⃟  ➣ Número: [ ${
              Math.floor(Math.random() * groupMembers.length) + 1
            } ]\n`;
            reply(rs_);
          } catch (e) {
            console.log(e);
            reply("Deu erro, tente novamente :/");
          }
          break;

        case "sorteio":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          try {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!q.trim())
              return reply(
                `Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`
              );
            d = [];
            teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`;
            for (i = 0; i < 1; i++) {
              r = Math.floor(
                Math.random() * groupMetadata?.participants.length || 0 + 0
              );
              teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split("@")[0]}\n`;
              d.push(groupMembers[r].id);
            }
            mentions(teks, d, true);
          } catch (e) {
            console.log(e);
            reply("Deu erro, tente novamente :/");
          }
          break;

        case "rankinativo":
        case "rankinativos":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          await LIMPARDOCNT_QUEMJASAIU();
          bule = [];
          bule2 = [];
          mentioned_jid = [];
          for (cag of countMessage[ind].numbers) {
            bule2.push(cag.id);
            if (cag.messages <= 1) {
              bule.push(cag);
            }
          }
          bule.sort((a, b) =>
            a.messages + a.cmd_messages < b.cmd_messages + b.messages ? 0 : -1
          );
          boardi = "Rank dos mais Ghosts do Grupo:\n\n";
          if (bule.length == 0) boardi += "Sem Ghosts";
          for (i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
            if (i != null)
              boardi += `${i + 1}º : @${bule[i].id.split("@")[0]}\nMensagens: ${
                bule[i].messages
              }\nComandos dados: ${bule[i].cmd_messages}\nAparelho: ${
                bule[i].aparelho
              }\n\n`;
            mentioned_jid.push(bule[i].id);
          }
          mentions(boardi, mentioned_jid, true);
          break;

        case "advertir":
        case "adverter":
          {
            if (Os_Returns(true, true, true).true)
              return reply(Os_Returns(true, true, true).txt);
            if (menc_os2 == botNumber)
              return reply("Não pode advertir o próprio bot 🤨");
            if (menc_os2 == nmrdn)
              return reply("Não pode advertir odono do bot 🤨");
            if (groupAdmins.includes(menc_os2))
              return reply("Não pode advertir ADMS 🙄");
            if (!JSON.stringify(groupMembers).includes(menc_os2))
              return reply(
                "Não tem como advertir alguém que não está mais no grupo 🤦🏻‍♀️"
              );
            dataGp[0].advertir.push(menc_os2);
            setGp(dataGp);
            setTimeout(async () => {
              var dfqn = ADVT.filter((x) => x == menc_os2).length;
              var dfntxt = `Opa: @${
                menc_os2.split("@")[0]
              } você foi advertido ${dfqn}/3, tome cuidado, com 3 advertências, você será removido 😏`;
              if (dfqn !== 3) {
                if (!JSON.stringify(ADVT).includes(sender)) {
                  await sleep(1500);
                  mentions(dfntxt, [menc_os2]);
                } else {
                  await sleep(1500);
                  mentions(dfntxt, [menc_os2]);
                }
              } else {
                conn.sendMessage(from, {
                  text: `Vaza fi de rapariga @${
                    menc_os2.split("@")[0]
                  }, você completou 3 advertências 🤬`,
                  mentions: [menc_os2],
                });
                await sleep(1500);
                conn.groupParticipantsUpdate(from, [menc_os2], "remove");
                var i = ADVT.indexOf(menc_os2);
                ADVT.splice(i, 3);
                setGp(dataGp);
              }
            }, 2000);
          }
          break;

        case "grupo":
          {
            if (Os_Returns(true, true, true).true)
              return reply(Os_Returns(true, true, true).txt);
            if (args[0] === "a") {
              reply(
                TEXTOS_GERAL?.MENSAGEM_GRUPO_ABRIU
                  ? TEXTOS_GERAL?.MENSAGEM_GRUPO_ABRIU
                  : `🚨>𝗚𝗥𝗨𝗣𝗢 𝗔𝗕𝗘𝗥𝗧𝗢<🚨\n𝘽𝙤𝙧𝙖 𝙛𝙤𝙛𝙤𝙘𝙖𝙧 𝙜𝙖𝙡𝙚𝙧𝙖 𝙛𝙖𝙡𝙖𝙧 𝙙𝙖 𝙫𝙞𝙙𝙖 𝙙𝙤𝙨 𝙫𝙞𝙯𝙞𝙣𝙝𝙤𝙨😏`
              );
              conn.groupSettingUpdate(from, "not_announcement");
            } else if (args[0] === "f") {
              reply(
                TEXTOS_GERAL?.MENSAGEM_GRUPO_FECHOU
                  ? TEXTOS_GERAL?.MENSAGEM_GRUPO_FECHOU
                  : `❌𝗚𝗥𝗨𝗣𝗢 𝗙𝗘𝗖𝗛𝗔𝗗𝗢❌\n𝙋𝙤𝙧 𝙝𝙤𝙟𝙚 𝙗𝙖𝙨𝙩𝙖, 𝙨𝙚𝙪𝙨 𝙛𝙤𝙛𝙤𝙦𝙪𝙚𝙞𝙧𝙤𝙨 𝙫𝙖̃𝙤 𝙙𝙤𝙧𝙢𝙞𝙧 𝙖𝙩𝙚́ 𝙖𝙢𝙖𝙣𝙝𝙖̃🥱`
              );
              conn.groupSettingUpdate(from, "announcement");
            }
          }
          break;

        case "grupoinfo":
        case "infogrupo":
        case "infogp":
        case "gpinfo":
        case "regras":
          {
            if (Os_Returns(true, true, true).true)
              return reply(Os_Returns(true, true, true).txt);
            let ppUrl;
            try {
              ppUrl = await conn.profilePictureUrl(from, "image");
            } catch {
              ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`;
            }
            conn.sendMessage(
              from,
              {
                image: { url: ppUrl },
                caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`,
                thumbnail: null,
              },
              { quoted: info }
            );
          }
          break;

        case "totag":
        case "cita":
        case "hidetag":
          {
            const permCheck = Os_Returns(true, true, true);
            if (permCheck.true) return reply(permCheck.txt);

            if (!groupMembers || groupMembers.length === 0) {
              return reply(
                "❌ Não foi possível obter a lista de membros do grupo."
              );
            }

            const mentions = groupMembers
              .map((i) => getParticipantId(i))
              .filter(Boolean);

            const rsm =
              info.message?.extendedTextMessage?.contextInfo?.quotedMessage ||
              null;

            let DFC = {};
            if (!rsm && q && q.trim().length > 0) {
              DFC = {
                text: q.trim(),
              };
            } else if (rsm) {
              if (rsm.imageMessage) {
                DFC = {
                  image: { url: rsm.imageMessage.url },
                  caption: rsm.imageMessage.caption || "",
                };
              } else if (rsm.videoMessage) {
                DFC = {
                  video: { url: rsm.videoMessage.url },
                  caption: rsm.videoMessage.caption || "",
                };
              } else if (rsm.documentMessage) {
                DFC = {
                  document: { url: rsm.documentMessage.url },
                  mimetype: rsm.documentMessage.mimetype,
                  fileName: rsm.documentMessage.fileName,
                  caption: rsm.documentMessage.caption || "",
                };
              } else if (rsm.audioMessage) {
                DFC = {
                  audio: { url: rsm.audioMessage.url },
                  mimetype: "audio/ogg; codecs=opus",
                  ptt: true,
                };
              } else if (rsm.stickerMessage) {
                DFC = {
                  sticker: { url: rsm.stickerMessage.url },
                };
              } else if (rsm.conversation) {
                DFC = {
                  text: rsm.conversation,
                };
              } else if (rsm.extendedTextMessage?.text) {
                DFC = {
                  text: rsm.extendedTextMessage.text,
                };
              } else {
                return reply("❌ Tipo de mensagem não suportado para hidetag.");
              }
            } else {
              return reply("❌ Use `!hidetag texto` ou marque uma mensagem.");
            }

            await conn
              .sendMessage(from, {
                ...DFC,
                mentions,
              })
              .catch((e) => {
                console.error("❌ Erro ao enviar hidetag:", e);
                reply("❌ Erro ao enviar mensagem com hidetag.");
              });
          }
          break;
        case "marca":
        case "marcar":
          if (!isGroup) return reply(enviar.msg.grupo);
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          async function marcac() {
            let bla = [];
            blad = `\n𝑀𝐸𝑀𝐵𝑅𝑂𝑆 𝐶𝑂𝑀𝑈𝑀\n𝐵𝑂𝑇: ${NomeDoBot}\n\n-_- Do Grupo: ${groupName} -_-${
              !q ? "" : `\n\n~» Mensagem: ${q}`
            }\n\n`;
            for (let i of somembros) {
              blad += `✥➤ @${i.split("@")[0]}\n\n`;
              bla.push(i);
            }
            blam = JSON.stringify(somembros);
            if (blam.length == 2)
              return reply(
                `Não ontêm Membros comum no Grupo: ${groupName}, apenas - [ ADMINISTRADORES 🥱 ]`
              );
            mentions(blad, bla, true);
          }
          marcac().catch((e) => {
            console.log(e);
          });
          break;
          
case "x4":
case "4x4": {
  if (Os_Returns(true, true, true).true)
    return reply(Os_Returns(true, true, true).txt);

  if (!q || !q.includes("/"))
    return reply("Use:\n/x4 jogador1/jogador2/...");

  let jogadores = q.split("/").map(j => j.trim()).filter(Boolean);

  if (jogadores.length < 8)
    return reply("Precisa de no mínimo 8 jogadores.");

  // embaralhar
  for (let i = jogadores.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [jogadores[i], jogadores[r]] = [jogadores[r], jogadores[i]];
  }

  jogadores = jogadores.slice(0, 8);

  const slot1 = jogadores.slice(0, 4).map(j => `│ 🐞• ${j}`).join("\n");
  const slot2 = jogadores.slice(4, 8).map(j => `│ 🐞• ${j}`).join("\n");

  conn.sendMessage(from, {
    text: `*_${groupName} | X4 _*

╭───❥ 𝐒𝐋𝐎𝐓 𝟏
${slot1}
╰─────────────♡

╭───❥ 𝐒𝐋𝐎𝐓 𝟐
${slot2}
╰─────────────♡

> 💬 *Cada rodada é uma nova chance de ser lendário! 🦾*
> Regras na descrição`,
    quoted: info
  });
}
break;



case "x6":
case "6x6": {
  if (Os_Returns(true, true, true).true)
    return reply(Os_Returns(true, true, true).txt);

  if (!q || !q.includes("/"))
    return reply("Use:\n/x6 jogador1/jogador2/...");

  let jogadores = q.split("/").map(j => j.trim()).filter(Boolean);

  if (jogadores.length < 12)
    return reply("Precisa de no mínimo 12 jogadores.");

  // embaralhar
  for (let i = jogadores.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [jogadores[i], jogadores[r]] = [jogadores[r], jogadores[i]];
  }

  jogadores = jogadores.slice(0, 12);

  const slot1 = jogadores.slice(0, 6).map(j => `│ 🐞• ${j}`).join("\n");
  const slot2 = jogadores.slice(6, 12).map(j => `│ 🐞• ${j}`).join("\n");

  conn.sendMessage(from, {
    text: `*_${groupName} | X6 _*

╭───❥ 𝐒𝐋𝐎𝐓 𝟏
${slot1}
╰─────────────♡

╭───❥ 𝐒𝐋𝐎𝐓 𝟐
${slot2}
╰─────────────♡

> 💬 *Cada rodada é uma nova chance de ser lendário! 🦾*
> Regras na descrição`,
    quoted: info
  });
}
break;


            
          case 'id':
          case "sala":{
  try {
    if (Os_Returns(true, true, true).true)
      return reply(Os_Returns(true, true, true).txt);

    if (!q) return reply("Use assim:\n/sala 918281/senha123");

    // separa sala e senha usando "/"
    const partes = q.split("/");
    if (partes.length < 2)
      return reply("Formato inválido.\nUse: /sala ID/SENHA");

    const idSala = partes[0].trim();
    const senhaSala = partes[1].trim();

    if (!idSala || !senhaSala)
      return reply("ID da sala ou senha inválidos.");

    let teks = `🎮 *SALA PERSONALIZADA* 🎮\n\n`;
    teks += `🆔 ${idSala}\n`;
    teks += `🔑 ${senhaSala}\n`;
    teks += `> Entrem os selecionados.`;

   // conn.sendMessage(from, { text: teks }, { quoted: mentions });
    await conn.sendMessage(from, { text: teks },{ quoted: info });
              
  } catch (e) {
    reply("ERROR... 🥱");
  }
  }break;


        case "marcar2":
          try {
            if (Os_Returns(true, true, true).true)
              return reply(Os_Returns(true, true, true).txt);
            if (q.includes(`${prefix}`))
              return reply("Não pode utilizar comandos nesse comando");
            members_id = [];
            teks = args.length > 1 ? body.slice(8).trim() : "";
            teks += "\n\n";
            for (let mem of groupMembers) {
              teks += `╠➥ @${mem.id.split("@")[0]}\n`;
              members_id.push(mem.id);
            }
            reply(teks);
          } catch {
            reply("ERROR... 🥱");
          }
          break;

        case "marcarwa":
          try {
            if (Os_Returns(true, true, true).true)
              return reply(Os_Returns(true, true, true).txt);
            if (q.includes(`${prefix}`))
              return reply("Não pode utilizar comandos nesse comando 🙄");
            members_id = [];
            teks = args.length > 1 ? body.slice(10).trim() : "";
            teks += "\n\n";
            for (let mem of groupMembers) {
              teks += `╠➥ https://wa.me/${mem.id.split("@")[0]}\n`;
              members_id.push(mem.id);
            }
            conn.sendMessage(from, { text: teks }, { quoted: info });
          } catch {
            reply("ERROR... 🥱");
          }
          break;

        case "nomegp":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          blat = args.join(" ");
          conn.groupUpdateSubject(from, `${blat}`);
          conn.sendMessage(
            from,
            { text: "Sucesso, alterou o nome do grupo" },
            { quoted: info }
          );
          break;

        case "descgp":
        case "descriçãogp":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          blabla = args.join(" ");
          conn.groupUpdateDescription(from, `${blabla}`);
          conn.sendMessage(
            from,
            { text: "Sucesso, alterou a descrição do grupo" },
            { quoted: info }
          );
          break;

        case "setfotogp":
        case "fotogp":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!isQuotedImage)
            return reply(`Use: ${prefix + command} <Marque uma foto>`);
          ftgp = isQuotedImage
            ? info.message.extendedTextMessage.contextInfo.quotedMessage
                .imageMessage
            : info.message.imageMessage;
          rane = getRandom("." + (await getExtension(ftgp.mimetype)));
          buffimg = await getFileBuffer(ftgp, "image");
          fs.writeFileSync(rane, buffimg);
          medipp = rane;
          conn.updateProfilePicture(from, { url: medipp });
          reply(`Foto do grupo alterada com sucesso`);
          break;

        case "linkgp":
        case "link":
          linkgc = await conn.groupInviteCode(from);
          reply("https://chat.whatsapp.com/" + linkgc);
          break;

        case "recrutar7":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET;
          linkgc = await conn.groupInviteCode(from);
          conn.sendMessage(rcrt, {
            image: { url: logoslink.logo },
            caption:
              "Clique no símbolo a cima da imagem para entrar no grupo...",
            contextInfo: {
              externalAdReply: {
                title: "- Clique aqui para participar do grupo",
                body: "",
                reviewType: "PHOTO",
                thumbnailUrl: logoslink.logo,
                sourceUrl: `https://chat.whatsapp.com/` + linkgc,
                mediaType: 2,
              },
            },
          });
          reply(
            "Convite de recrutamento foi enviado para o privado dele com sucesso..."
          );
          break;

        case "anotar":
        case "tirar_nota":
        case "rmnota":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (command == "anotar") {
            var [q5, q10] = q.trim().split("|");
            if (!q5 || !q10 || !q.trim().includes("|"))
              return reply(
                `Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Lady | bot ...`
              );
            if (JSON.stringify(anotar).includes(from)) {
              var i2 = anotar.map((i) => i.grupo).indexOf(from);
              if (JSON.stringify(anotar[i2].puxar).includes(q5)) {
                var i3 = anotar[i2].puxar.map((i) => i.nota).indexOf(q5);
                if (anotar[i2].puxar[i3].nota == q5)
                  return reply(
                    `Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`
                  );
              }
            }
            if (!JSON.stringify(anotar).includes(from)) {
              anotar.push({
                grupo: from,
                puxar: [{ nota: q5, anotacao: q10 }],
              });
              fs.writeFileSync(
                "./dados/org/json/anotar.json",
                JSON.stringify(anotar)
              );
              reply("Anotação registrada com sucesso 😏");
            } else {
              anotar[i2].puxar.push({ nota: q5, anotacao: q10 });
              fs.writeFileSync(
                "./dados/org/json/anotar.json",
                JSON.stringify(anotar)
              );
              reply("Anotação registrada com sucesso 😏");
            }
          } else {
            if (!q.trim())
              return reply("Digite qual anotação deseja tirar pelo título..");
            if (JSON.stringify(anotar).includes(from)) {
              var i2 = anotar.map((i) => i.grupo).indexOf(from);
              if (JSON.stringify(anotar[i2].puxar).includes(q)) {
                var i3 = anotar[i2].puxar.map((i) => i.nota).indexOf(q);
              }
            }
            if (0 > anotar[i2].puxar.map((i) => i.nota).indexOf(q))
              return reply(
                "Esta nota não está inclusa, verifique com atenção 🥱"
              );
            anotar[i2].puxar.splice(i3, 1);
            fs.writeFileSync(
              "./dados/org/json/anotar.json",
              JSON.stringify(anotar)
            );
            reply(`Anotação ${q} tirada com sucesso 😏`);
          }
          break;

        case "rm_aviso":
        case "rm_avisos":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          for (i of black_) {
            var RDFA = i;
          }
          if (!JSON.stringify(RDFA.PUXAR).includes(from))
            return reply(
              `Nenhum aviso foi registrado nesse grupo, utilize o comando ${prefix}rg_aviso`
            );
          RDFA.PUXAR.splice(RDFA.PUXAR.indexOf(from));
          fs.writeFileSync(
            "./dados/global/AVISOS.json",
            JSON.stringify(black_, null, 2)
          );
          reply(
            "Avisos referente a esse grupo, foi tirado de todos os horários registrados.."
          );
          break;

        case "rg_aviso":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          var [hr, ms] = q.trim().split("|");
          if (!q.trim().includes(":") && !q.trim().includes("|"))
            return reply(
              `Exemplo: ${
                prefix + command
              } 12:00|Boa tarde a todos, prestem atenção nas regras do grupo\n\neste exemplo.. Ele vai enviar todos os dias as 12:00 da tarde a mensagem que você registrou, já se você quer trocar o horário.. Só refazer o comando\nSe você quer apagar o aviso do grupo, apenas coloque ${prefix}rm_aviso`
            );
          var i5 = black_.findIndex((i) => i?.hora === hr);
          if (black_[i5]?.PUXAR.some((i) => i.idgp === from)) {
            black_[i5].PUXAR = black_[i5].PUXAR.filter((i) => i.idgp !== from);
            fs.writeFileSync(
              "./dados/global/AVISOS.json",
              JSON.stringify(black_, null, 2)
            );
            setTimeout(() => {
              reply(
                `O Registro anterior foi apagado e recriou um novo, se deseja continuar\n - Lembre-se que há avisos programados em outros horários, se quiser limpar todos, digite: ${prefix}rm_avisos`
              );
            }, 500);
          } else if (!black_.some((i) => i.hora === hr)) {
            black_.push({
              hora: hr,
              PUXAR: [{ idgp: from, msg: ms, avisou: false }],
            });
            fs.writeFileSync(
              "./dados/global/AVISOS.json",
              JSON.stringify(black_, null, 2)
            );
            reply("Aviso Criado com sucesso..");
          } else if (!black_[i5].PUXAR.some((i) => i.idgp === from)) {
            black_[i5].PUXAR.push({ idgp: from, msg: ms, avisou: false });
            fs.writeFileSync(
              "./dados/global/AVISOS.json",
              JSON.stringify(black_, null, 2)
            );
            reply("Aviso Criado com sucesso..");
          }
          break;

        case "rv-forca":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (dataGp[0].forca_inc == false)
            return reply(
              `O jogo não foi iniciado.\nDigite ${prefix}iniciar_forca`
            );
          rv_forca();
          reply("Forca resetada com sucesso...");
          break;

        //_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-/

        case "🪰":
          if (!SoDono) return reply(Res_SoDono);
          if (!isGroup) return reply(Res_SoGrupo);
          dataGp[0]["rg_aluguel"] = !dataGp[0]["rg_aluguel"];
          setGp(dataGp);
          reply(
            dataGp[0]["rg_aluguel"] ? `⏳<𝗠𝗢𝗦𝗤𝗨𝗘𝗧𝗔-𝗕𝗢𝗧>⏳` : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌"
          );
          break;

        case "aluguel_global":
          if (!SoDono) return reply(Res_SoDono);
          nescessario.rg_aluguelGB = !nescessario.rg_aluguelGB;
          setNes(nescessario);
          reply(
            nescessario?.rg_aluguelGB
              ? `Ativado com sucesso, agora use o comando: ${prefix}rg_aluguel\nOu então o comando ${prefix}infoaluguel pra saber como usar o resto.`
              : "Desativado com sucesso.."
          );
          break;

        case "renovar_aluguel":
          if (!SoDono) return reply(Res_SoDono);
          var ID_G = rg_aluguel.findIndex((i) => i.id_gp == from);
          if (rg_aluguel.some((i) => i.id_gp != from))
            return reply(
              `Este grupo não está na lista de aluguel, use: ${prefix}listaaluguel pra ver os grupos que estão registrado.`
            );
          if (
            q.trim().length > 1 &&
            (q.trim().includes("d") || q.trim().includes("h")) &&
            q.trim().includes("/")
          ) {
            var TMP_A = Math.floor(Date.now() / 1000);
            var TEMPO = q.trim().includes("h")
              ? Math.floor(q.trim().split("/")[1].split("h")[0]) * 60 * 60
              : Math.floor(q.trim().split("/")[1].split("d")[0]) * 60 * 60 * 24;
            rg_aluguel[ID_G].vencimento = TMP_A + TEMPO;
            fs.writeFileSync(
              "./dados/org/json/rg_aluguel.json",
              JSON.stringify(rg_aluguel, null, 2)
            );
            reply(
              `Este grupo foi renovado, e vai vencer em: ${kyun(
                Math.floor(rg_aluguel[ID_G].vencimento - TMP_A)
              )}, caso queira tirar este grupo da lista de aluguel antes do tempo, use: ${prefix}rm_aluguel ${from}`
            );
          } else {
            reply(
              `Exemplo: ${prefix + command} /24h ou dados ${
                prefix + command
              } /30d\n\nCom d é dias, e h é horas, então boa sorte..`
            );
          }
          break;

        case "rg_aluguel":
        case "✍🏻":
          if (!SoDono) return reply(Res_SoDono);
          if (!nescessario?.rg_aluguelGB && !dataGp[0]["rg_aluguel"])
            return reply(
              `☺️ 𝙈𝙚𝙨𝙩𝙧𝙚 𝙫𝙤𝙘𝙚̂ 𝙣𝙖̃𝙤 𝙖𝙩𝙞𝙫𝙤𝙪 𝙤 𝙢𝙚𝙪 𝙨𝙞𝙨𝙩𝙚𝙢𝙖 𝙙𝙚 𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙤 🙆🏻‍♀️`
            );
          if (
            q.trim().length > 1 &&
            (q.trim().includes("d") || q.trim().includes("h")) &&
            q.trim().includes("/")
          ) {
            var TMP_A = Math.floor(Date.now() / 1000);
            var TEMPO = q.trim().includes("h")
              ? Math.floor(q.trim().split("/")[1].split("h")[0]) * 60 * 60
              : Math.floor(q.trim().split("/")[1].split("d")[0]) * 60 * 60 * 24;
            var ID_G = rg_aluguel.findIndex((i) => i.id_gp == from);
            if (ID_G === -1) {
              rg_aluguel.push({
                id_gp: from,
                nome_: groupName || pushname,
                vencimento: TMP_A + TEMPO,
              });
              fs.writeFileSync(
                "./dados/org/json/rg_aluguel.json",
                JSON.stringify(rg_aluguel, null, 2)
              );
              await new Promise((resolve) => setTimeout(resolve, 1000)); // Aguarda 1 segundo
              ID_G = rg_aluguel.findIndex((i) => i.id_gp == from); // Atualiza o valor de ID_G
              reply(
                `𝘽𝙤𝙩 𝙖𝙩𝙞𝙫𝙖𝙙𝙤 𝙚𝙢: 😏 ${kyun(
                  Math.floor(rg_aluguel[ID_G].vencimento) - TMP_A
                )}, ⏳`
              );
            } else {
              reply(
                `𝙀𝙪 𝙟𝙖́ 𝙚𝙨𝙩𝙤𝙪 𝙖𝙩𝙞𝙫𝙖𝙙𝙤 𝙖𝙦𝙪𝙞: 😏 ${kyun(
                  Math.floor(rg_aluguel[ID_G].vencimento) - TMP_A
                )}, 𝘾𝙖𝙨𝙤 𝙦𝙪𝙚𝙞𝙧𝙖 𝙢𝙚 𝙩𝙞𝙧𝙖𝙧, 𝙪𝙨𝙚: 😏 ${prefix}rm_bot ${from}`
              );
            }
          } else {
            reply(
              `Exemplo: ${prefix + command} /24h ou Exemplo: ${
                prefix + command
              } /30d\n\nCom d é dias, e h é horas, então boa sorte..`
            );
          }
          break;

        case "rm_aluguel":
        case "rm_bot":
          if (!SoDono) return reply(Res_SoDono);
          if (q.trim().length < 4)
            return reply(
              `Use o comando ${
                prefix + command
              } ${from}\nAssim removerá este grupo da lista aluguel`
            );
          var ID_R = rg_aluguel.findIndex((i) => i.id_gp == q.trim());
          if (!rg_aluguel.map((i) => i.id_gp).includes(q.trim()))
            return reply(
              `Este grupo não está na lista de aluguel, use: ${prefix}listaaluguel pra ver os grupos que estão registrado.`
            );
          rg_aluguel.splice(ID_R, 1);
          fs.writeFileSync(
            "./dados/org/json/rg_aluguel.json",
            JSON.stringify(rg_aluguel, null, 2)
          );
          reply(
            `Grupo/Usuario tirado com sucesso da lista de aluguel, não irei mais funcionar aqui.`
          );
          break;

        case "listaaluguel":
        case "lista_aluguel":
          if (!SoDono) return reply(Res_SoDono);
          if (rg_aluguel?.length === 0)
            return reply(
              "Não contém nenhum usuario/grupo na lista de aluguel..."
            );
          var TMP = Math.floor(Date.now() / 1000);
          ABC = "Lista de Usuarios/Grupos:\n\n";
          for (var i of rg_aluguel) {
            ABC += `ID: ${i?.id_gp}\nNome: ${i.nome_}\nVencimento: ${kyun(
              Math.floor(i.vencimento) - TMP
            )}\n-----------------------------------------\n`;
          }
          reply(ABC);
          break;

        case "limitarcmd":
        case "limitarcomando":
        case "limitecmd":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD;
          setGp(dataGp);
          reply(
            dataGp[0]?.Limitar_CMD
              ? "Limitador de comandos ativado com sucesso no grupo: " +
                  groupName
              : "Limitador de comandos desativado no grupo: " + groupName
          );
          break;

        case "tempocmd":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!q.trim())
            return reply(
              `Exemplo: ${
                prefix + command
              } 120\n60 = 1 minuto\nExemplo que coloquei, com o : ${prefix}limitarcmd ativo, só podera usar comandos a cada 2 minutos\nBoa sorte.`
            );
          dataGp[0].Limit_tempo = q.trim();
          setGp(dataGp);
          reply(
            `Tempo limite definido para: ${kyun(q.trim())} a cada comando.`
          );
          break;

        case "listlinks":
        case "links":
        case "listlink":
          try {
            if (!SoDono) return reply(Res_SoDono);
            LNK = "_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n";
            for (i = 0; i < recolherLNK.length; i++) {
              LNK += `Link - ${i + 1} _- ${recolherLNK[i].Link}\n\n`;
            }
            reply(LNK);
          } catch (e) {
            return reply("Erro");
          }
          break;

        case "recolherlink":
          if (!SoDono) return reply(Res_SoDono);
          nescessario.isRecolherLink = !nescessario.isRecolherLink;
          setNes(nescessario);
          reply(
            nescessario.isRecolherLink
              ? `Sistema de recolher links e armazenar em ${prefix}listlinks foi ativado, quiser limpar os link da lista, use ${prefix}zerarlinks`
              : "Sistema desativado."
          );
          break;

        case "recolherlinkgp":
          if (!SoDono) return reply(Res_SoDono);
          dataGp[0].recolherlinkgp = !dataGp[0].recolherlinkgp;
          isRecolherlinksgp = !dataGp[0].recolherlinkgp;
          setGp(dataGp);
          reply(
            dataGp[0]?.recolherlinkgp
              ? `Sistema de recolher links por grupo e armazenar em ${prefix}listlinks foi ativado, quiser limpar os link da lista, use ${prefix}zerarlinks`
              : "Sistema desativado."
          );
          break;

        case "zerarlinks":
        case "zerarlink":
          if (!SoDono) return reply(Res_SoDono);
          recolherLNK.splice([]);
          fs.writeFileSync(
            "./dados/org/funcoes/recolherLNK.json",
            JSON.stringify(recolherLNK, null, 2)
          );
          reply("Links do listlinks foi zerado com sucesso...");
          break;

        case "iddogrupo":
        case "idgrupo":
          if (!SoDono) return reply(Res_SoDono);
          reply(from);
          break;

        case "7menugold":
        case "7menugolds":
          {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!IS_sistemGold)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
              );
            let ABC = "";
            if (dataGp[0]?.comandos_gold) {
              for (ah of dataGp[0].comandos_gold) {
                ABC += `-> Comando: ${
                  ah.comando
                }\n-> Consumo de gold por esse comando: ${
                  ah.gold
                }\n\n${"-".repeat(25)}\n`;
              }
            }
            mention(`Olá @${sender2}, bem-vindo ao **Menu Gold**! Este é um recurso em teste beta, e adoraríamos ouvir suas sugestões.

**Comandos exclusivos para administradores**:
1. Configure o grupo: ${prefix}info addgold

- - -

**★ Comandos para todos os membros ★**

1. Roubar gold de alguém: ${prefix}roubargold @xpessoa
2. Vingança: ${prefix}vingançagold @xpessoa
3. Embebedar: ${prefix}enviarcachaça @xpessoa
4. Iniciar o jogo da forca: ${prefix}iniciar_forca
5. Ver o ranking: ${prefix}rankgold
6. Doar gold para alguém: ${prefix}doargold @xpessoa/Y
7. Sistema de bolão de aposta 5/5: ${prefix}bolaogold
8. Tentar a sorte com o Quiz Número: ${prefix}quiznumero
9. Tentar a sorte no cassino: ${prefix}cassino
10. Girar a Roleta da Sorte: ${prefix}roletadasorte
11. Ver o status do seu gold: ${prefix}statusgold
12. Comprar + chances: ${prefix}comprar vingançagold
13. Comprar + chances: ${prefix}comprar cachaça
14. Comprar segurança: ${prefix}comprar escudo
15. Minerar gold: ${prefix}minerar_gold
16. Informação do comando de agiota/emprestimo: ${prefix}infoemprestimo
17. Comando de aposta: ${prefix}apostargold 100 // 100 foi exemplo.

- - -

**Comandos para consumir gold**:

${ABC}`);
          }
          break;

        case "7cassino":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!IS_sistemGold)
            return reply(
              `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
            );
          var ab_c = dataGp[0].Chances.find((i) => i.id === sender);
          if (ab_c?.cassino > 4)
            return reply(
              `Sinto muito, você não tem mais chance para usar o cassino hoje, já está 5/5.`
            );
          !ab_c ? (ab_c.cassino = 1) : (ab_c.cassino += 1);
          setGp(dataGp);
          var Emj = ["🙂", "😁", "🙃", "🤡"];
          A_ = [0, 1, 2, 3, 4, 5, 6, 7, 8];
          A_.forEach(function (a, b, c) {
            A_[b] = Emj[Math.floor(Math.random() * Emj.length)];
          });

          async function Tx_r(Rst) {
            reply(`
★ Roleta do cassino ★

+-----+-----+-----+
| ${A_[0]} | ${A_[1]} | ${A_[2]} |
| ${A_[3]} | ${A_[4]} | ${A_[5]} |
| ${A_[6]} | ${A_[7]} | ${A_[8]} |
+-----+-----+-----+
| 🎰 | | |
+-----+-----+-----+

© Resultado: ${Rst}

`);
          }

          async function GnhG() {
            Tx_r(
              `Parabéns, você recebeu 50 Golds, é um belo de um prêmio e uma baita sorte, pegue este prêmio, você é digno 🎉💥`
            );
            S_Sistema.ADD(sender, 50);
          }
          if (A_[0] === A_[1] && A_[1] === A_[2] && A_[0] === A_[2]) {
            GnhG();
          } else if (A_[3] === A_[4] && A_[4] === A_[5] && A_[3] === A_[5]) {
            GnhG();
          } else if (A_[6] === A_[7] && A_[7] === A_[8] && A_[6] === A_[8]) {
            GnhG();
          } else {
            Tx_r(
              `Ah, que pena! Você perdeu, o que resultará na perda de 2 Golds. Mas não fique triste, a premiação por ganhar é de 50 Golds. Um dia você será muito mais rico do que imagina, e isso não se trata apenas de jogos 😉.`
            );
            S_Sistema.RM(sender, 2);
          }
          break;

        case "7sorteiogold":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!IS_sistemGold)
            return reply(
              `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
            );
          if (!SoDono) return reply(Res_SoDono);
          if (q.match(/[a-z]/i)) return reply("É apenas números..");
          var DMN = rggold[ID_G_GOLD].usus;
          var Usu_A = DMN[Math.floor(Math.random() * DMN.length)];
          mention(
            `- Sorteio de ${q.trim()} Golds, parabéns @${
              Usu_A.id.split("@")[0]
            } 🔥🎉`
          );
          S_Sistema.ADD(Usu_A.id, Math.floor(q.trim()));
          break;

        case "7roletadasorte":
        case "7roletads":
        case "roletagold":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!IS_sistemGold)
            return reply(
              `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
            );
          if (S_Sistema.RS_C(sender, "roletadasorte"))
            return reply(`Você já usou a roleta hoje, volte amanhã..`);
          if (S_Sistema.RS(sender, "Golds") <= 25)
            return reply(
              `Você não tem golds o suficiente para usar o comando ${
                prefix + command
              }, o mínimo de golds que você deve ter é 25.`
            );
          mentionSm(
            `~ ATENÇÃO ~\n\nIrei rodar a roleta e um usuário do sistema gold vai ter o azar ou sorte, ele pode ganhar as moedas do usuário: @${
              sender.split("@")[0]
            } ou perder, irei rodar a roleta em 5 segundos..`
          );
          var Rnd_U = Math.floor(
            Math.random() * rggold[ID_G_GOLD].usus.map((i) => i.id).length
          );
          var Gold_D = rggold[ID_G_GOLD].usus[Rnd_U];
          var Rnd = Math.floor(Math.random() * 3);
          var Rnd_G_M = Math.floor(
            Math.random() * S_Sistema.RS(sender, "Golds")
          );
          var Rnd_G_D = Math.floor(Math.random() * Gold_D.Golds);
          setTimeout(() => {
            reply("Roleta girada...");
          }, 5000);
          setTimeout(() => {
            reply(
              "Humm.. O que será que vai acontecer?? quem vai ter sorte ou não? hehehe"
            );
          }, 7000);
          setTimeout(() => {
            if (Rnd === 1) {
              mentionSm(
                `< Eita.. o usuário @${
                  sender.split("@")[0]
                } teve o azar na roleta, e teve que enviar ${Rnd_G_M} Golds para o @${
                  Gold_D.id.split("@")[0]
                }`
              );
              S_Sistema.R_A(sender, Gold_D.id, Rnd_G_M);
            } else if (Rnd === 2) {
              mentionSm(
                `✓ Parabéns @${
                  sender.split("@")[0]
                } você teve a sorte de conseguir ${Rnd_G_D} Golds dele: @${
                  Gold_D.id.split("@")[0]
                } na roleta..`
              );
              S_Sistema.R_A(Gold_D.id, sender, Rnd_G_D);
            } else {
              reply(
                "Aaaa, sinto muito.. você não teve sorte na roleta pra obter gold de alguém do grupo.."
              );
            }
          }, 15000);
          S_Sistema.ADD_C(sender, "roletadasorte", true);
          break;

        case "quiznumero":
        case "quiznumerico":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!IS_sistemGold)
            return reply(
              `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
            );
          if (!q.trim())
            return reply(`Este comando funciona da seguinte forma: é uma brincadeira com números. Eu irei escolher um número entre 0, 1 e 2, e você tentará adivinhar qual é. Por exemplo: ${
              prefix + command
            } 0.\n
Se você acertar o número que eu escolhi, você ganhará 20 Golds. Você pode ganhar até 2 vezes, e o número que você digitou errado na primeira vez pode ser o que você irá acertar na segunda vez. Boa sorte nisso! 😁`);
          if (![0, 1, 2].some((i) => i === parseInt(q.trim())))
            return reply(
              `Você tem que escolher um número, um desses ( 0, 1 , 2 ), se o número que você escolher, for o que eu escolhi, você ganhará 20 Golds`
            );
          var Qz = dataGp[0].Chances;
          var Qz_ = Qz[Qz.findIndex((i) => i.id == sender)];
          var Rn_N = Math.floor(Math.random() * 3);
          !Qz_?.quiz
            ? (dataGp[0].Chances.find((ab) => ab.id === sender)["quiz"] = [
                { errou: 0, acertou: 0, numero: Rn_N },
              ])
            : (dataGp[0].Chances.find((ab) => ab.id === sender).quiz[0].numero =
                Rn_N);
          setGp(dataGp);
          if (Qz_?.quiz[0]?.errou > 1)
            return reply(
              `Você já errou 2 vezes hoje, só amanhãpoderá utilizar este comando novamente, sinto muito.`
            );
          if (Qz_?.quiz[0]?.acertou > 1)
            return reply(
              `Você já acertou 2 vezes hoje, só amanhã você poderá utilizar este comando novamente, parabéns por seus acertos.`
            );
          if (Math.floor(q.trim()) !== Math.floor(Qz_.quiz[0].numero)) {
            Qz_.quiz[0].errou += 1;
            setGp(dataGp);
            reply(
              `Aaaah não foi dessa vez, você errou o quiz, suas chance está em ${Qz_.quiz[0].errou}/2`
            );
          } else {
            S_Sistema.ADD(sender, 20);
            Qz_.quiz[0].acertou += 1;
            setGp(dataGp);
            reply(
              `Parabéns 🎉💥, você recebeu 20 Golds, e sua chance para executar o comando quiz está em:\n\n- Erros: ${Qz_.quiz[0].errou}/2\n\n- Acertos: ${Qz_.quiz[0].acertou}/2`
            );
          }
          break;

        case "7bolaogold":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!IS_sistemGold)
            return reply(
              `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
            );
          let Valor_X = 0;
          let Participantes = "";
          if (!dataGp[0]["bolaogold"] || dataGp[0]["bolaogold"].length <= 0) {
            if (!parseInt(q.trim()))
              return reply(
                `Exemplo: ${
                  prefix + command
                } 5\n\nSaiba que não pode apostar mais de 50 no bolão.`
              );
            if (!/^\d+$/.test(q.trim()))
              return reply("Apenas pode digitar números.");
            if (S_Sistema.RS(sender, "Golds") < parseInt(q.trim()))
              return reply(
                "Você não tem essa quantidade de gold para iniciar o bolão.."
              );
            if (parseInt(q.trim()) > 50)
              return reply(
                `Exemplo: ${
                  prefix + command
                } 5\n\nSaiba que não pode apostar mais de 50 no bolão.`
              );
            dataGp[0]["bolaogold"] = [
              { id: sender, aposta: parseInt(q.trim()) },
            ];
            setGp(dataGp);
            S_Sistema.RM(sender, parseInt(q.trim()));
            mentionSm(`~ ⚔️ Atenção a todos ativos do chat ~\n\nO comando bolão foi iniciado, e a aposta do usuário é de: ${q.trim()} Golds

Para participardo bolão, digite: ${prefix}bolaogold

o quinto usuário a executar o comando, a roleta será acionada, e um dos usuários ganhará o resultado todo apostado.`);
          } else {
            if (dataGp[0].bolaogold.map((i) => i.id).includes(sender))
              return reply(
                "Você já está participando do bolão, aguarde o quinto usuário participar do bolão para a roleta ser acionada e ter o ganhador."
              );
            if (
              S_Sistema.RS(sender, "Golds") <
              parseInt(dataGp[0].bolaogold[0].aposta)
            )
              return reply(
                "Você não tem a quantidade de gold para aplicar no bolão.."
              );
            dataGp[0].bolaogold.push({
              id: sender,
              aposta: parseInt(dataGp[0].bolaogold[0].aposta),
            });
            setGp(dataGp);
            Valor_X =
              dataGp[0].bolaogold.length * dataGp[0].bolaogold[0].aposta;
            dataGp[0].bolaogold.map((i) => {
              Participantes += `- @${i.id.split("@")[0]}\n${"-".repeat(
                15
              )}\n\n`;
            });
            if (dataGp[0]["bolaogold"].length < 5) {
              S_Sistema.RM(sender, Math.floor(dataGp[0].bolaogold[0].aposta));
              mentionSm(`O Bolão agora está valendo: ${Valor_X}\n\nParticipantes do bolão ->

${Participantes}`);
            } else {
              Valor_X =
                dataGp[0].bolaogold.length * dataGp[0].bolaogold[0].aposta;
              S_Sistema.RM(sender, Math.floor(dataGp[0].bolaogold[0].aposta));
              mentionSm(
                `O quinto jogador solicitou para participar, em 6 Segundos será anúnciado o ganhador do bolão, no valor de: ${Valor_X} Golds, aguardem..`
              );
              var Gan_B = dataGp[0].bolaogold.map((i) => i.id)[
                Math.floor(
                  Math.random() * dataGp[0].bolaogold.map((i) => i.id).length
                )
              ];
              setTimeout(() => {
                mentionSm(
                  `🔥 O ganhador do bolão é @${
                    Gan_B.split("@")[0]
                  } 💥🎉\n\nObrigado a todos que participaram!!`
                );
                AddGold(IS_sistemGold, Valor_X, Gan_B);
                dataGp[0].bolaogold = [];
                setGp(dataGp);
              }, 6000);
            }
          }
          break;

        case "7doargold":
        case "7doargolds":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!IS_sistemGold)
            return reply(
              `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
            );
          if (!menc_os2)
            return reply(
              `Você deve marcar a mensagem do usuário com ${
                prefix + command
              } /10 por exemplo ou ${
                prefix + command
              } @xpessoa/10, pode doar a quantidade que tiver e quiser.`
            );
          var [usu, dg] = q.trim().split("/");
          var q_d = parseInt(dg);
          if (!q_d)
            return reply(
              `Exemplo: ${prefix + command} @xpessoa/5 ou ${
                prefix + command
              } /5 marcando a mensagem, lembre que não pode Letras após o /, apenas a quantidade de gold que deseja doar.`
            );
          if (!/^\d+$/.test(dg))
            return reply("Apenas pode digitar números após a /");
          if (menc_os2 === sender)
            return reply("Você não pode doar Golds pra si mesmo.");
          var Flc_U = rggold[ID_G_GOLD].usus;
          if (S_Sistema.RS(sender, "Golds") < q_d)
            return reply(
              `Você não tem ★ ${q_d} Gold(s) ★ para doar, se deseja verificar quantos golds você tem, use o comando: ${prefix}gold`
            );
          S_Sistema.R_A(sender, menc_os2, q_d);
          mention(
            `Você doou ★ ${q_d} Gold(s) ★ para o seu amigo ( @${
              menc_os2.split("@")[0]
            } ), parabéns por sua humildade 👏..`
          );
          break;

        case "7comprar":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!IS_sistemGold)
            return reply(
              `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
            );
          var q_p = q
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          if (S_Sistema.RS(sender, "Golds") < 50) {
            return reply(
              "Você não tem Golds o suficiente para comprar, você tem que ter no mínimo 50 Golds."
            );
          }
          if (["vingancagold", "cachaca", "escudo"].some((i) => i === q_p)) {
            const vg_g = dataGp[0].Chances.find((i) => i.id === sender);
            var Fcl_G = rggold[ID_G_GOLD].usus;
            if (q_p === "vingancagold") {
              if (vg_g?.Vinganca <= 0)
                return reply(
                  "Você tem uma vingançagold ainda pra gastar, se vingue de alguém primeiro pra poder comprar outra."
                );
              let abc = `Olá @${
                sender.split("@")[0]
              }, você realizou a compra do comando vingançagold, e poderá se vingar de alguém tentando roubar, mas lembre-se, que poderá perder e ganhar, e nessa sua compra, os 50 Golds será doado 10 para 5 usuários aleatórios do grupo.

« Ganhadores da doação de 10 Golds para cada »
`;
              for (i = 0; i < 5; i++) {
                var Gn_D = Fcl_G[Math.floor(Math.random() * Fcl_G.length)];
                abc += `\n- [ ${i + 1} ] ” @${Gn_D.id.split("@")[0]}\n\n`;
                Gn_D.Golds += 10;
              }
              vg_g.Vinganca = 0;
              mention(abc);
              setGp(dataGp);
            } else if (q_p === "cachaca") {
              if (vg_g?.Cachaca <= 0)
                return reply(
                  `Você ainda tem uma cachaça para enviar, por exemplo: ${prefix}ennviarcachaça @xpessoa, só depois que usar que poderá comprar denovo.`
                );
              vg_g["Cachaca"] = 0;
              setGp(dataGp);
              reply(
                `Você comprou cachaça, você poderá marcar um usuário com o comando: ${prefix}enviarcachaça @xpessoa, e ele consumirá a bebida, e terá chance de ele derrubar Golds. ( OBS: Essa compra custou 50 Golds )`
              );
            } else if (q_p === "escudo") {
              vg_g["Escudo"] = [{ rn: 1 }];
              setGp(dataGp);
              reply(
                "Parabéns, você comprou 1 escudo, saiba que se alguém tiver sorte, ele pode quebrar seu escudo, tome cuidado. ( OBS: Essa compra custou 50 Golds )"
              );
            }
            S_Sistema.RM(sender, 50);
            Goldrgs(rggold);
          } else {
            reply(
              `Por enquanto, você só pode comprar vingança, cachaça e escudo, mas para comprar mais vingança/cachaça/escudo, use o comando por exemplo: ${
                prefix + command
              } vingançagold\n\nMas lembre-se que só pode comprar um por vez, e custará 50 Golds, e os 50 Golds seu, será doado para 5 pessoas aleatoriamente do grupo, e lembre também, que na vingança você poderá perder igual o roubo.`
            );
          }
          break;

        case "7enviarcachaca":
        case "7cachaca":
          {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!IS_sistemGold)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
              );
            let CH_E = dataGp[0].Chances.find((i) => i.id === menc_os2);
            if (S_Sistema.RS_C(sender, "Cachaca") > 0)
              return reply(
                "Você tem que comprar mais cachaça, não tem mais, compre."
              );
            if (!menc_os2)
              return reply(
                `Você deve marcar a mensagem do usuário com ${prefix}enviarcachaça ou ${prefix}enviarcachaça @xpessoa`
              );
            var RN_ = Math.floor(Math.random() * 4);
            var EU = rggold[ID_G_GOLD].usus.find((i) => i.id === sender);
            var ELE = rggold[ID_G_GOLD].usus.find((i) => i.id === menc_os2);
            if ((ELE?.Golds || 0) <= 0)
              return reply(
                "Este usuário não tem nenhum Gold para você embebedar ele."
              );
            if ((EU?.Golds || 0) <= 0)
              return reply(
                "Você não tem nenhum Gold para tentar embebedar ele, como vai pegar o uber? 🤡, ele mora longe."
              );
            S_Sistema.ADD_C(sender, "Cachaca", 1);
            if (CH_E["Escudo"]?.length > 0) {
              RN_F = CH_E.Escudo[0].rn + 1;
              if (Math.floor(Math.random() * RN_F) === 1) {
                reply(
                  "O usuário estava de escudo, e você conseguiu quebrar, parabéns."
                );
                S_Sistema.ADD_C(menc_os2, "Escudo", []);
              } else {
                return reply(
                  "O usuário está de escudo, e você não conseguiu quebrar, você não conseguiu nada, sinto muito."
                );
              }
              setGp(dataGp);
            }
            var MTH_EU =
              parseInt(EU.Golds) > 500
                ? Math.floor(Math.random() * 500)
                : Math.floor(Math.random() * EU.Golds);
            var MTH_ELE =
              parseInt(ELE.Golds) > 500
                ? Math.floor(Math.random() * 500)
                : Math.floor(Math.random() * ELE.Golds);
            if (RN_ === 0) {
              mention(
                `Eita, acho que o usuário @${
                  menc_os2.split("@")[0]
                } é cristão, não quis consumir nenhuma gota 🤡, e você voltou andando para casa sem nada.`
              );
            } else if (RN_ === 1) {
              mention(
                `O usuário @${
                  menc_os2.split("@")[0]
                } foi esperto. Ele era um ex-alcoólatra e jogou a garrafa em você. Enquanto você corria, perdeu ${MTH_EU} Golds. Ele tentou ser honesto, mas você fugiu muito longe. Ele esperou 5 dias para te devolver, mas como você não apareceu, ele ficou com seus Golds.`
              );
              S_Sistema.R_A(sender, menc_os2, MTH_EU);
            } else if (RN_ === 2) {
              mention(
                `Eita! O usuário @${
                  menc_os2.split("@")[0]
                } curte uma cachaça 51 e acertou em cheio. Ele consumiu bastante até que derrubou ${MTH_ELE} Golds. Parabéns! 🔥 (OBS: Se o usuário tiver mais de 500 Golds, você só conseguirá no máximo 500.)`
              );
              S_Sistema.R_A(menc_os2, sender, MTH_ELE);
            } else if (RN_ === 3) {
              mention(
                `Eita, você estava andando com a cachaça e, quando foi enviar para o @${
                  menc_os2.split("@")[0]
                }, a polícia passou perto e viu que você estava prestes a cometer um crime de roubo. A polícia pediu ${MTH_EU} Golds como gorjeta em troca de não te prender, e não te restaram escolhas.`
              );
              S_Sistema.RM(sender, MTH_EU);
            } else {
              mention(
                `No caminho de enviar a cachaça para o @${
                  menc_os2.split("@")[0]
                }, você achou 200 Golds, então decidiu voltar para casa com o que já conseguiu, parabéns.`
              );
              S_Sistema.ADD(sender, 200);
            }
          }
          break;

        case "7emprestargold":
        case "7emprestargolds":
        case "7emprestimo":
          {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!IS_sistemGold)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
              );
            const Tempo_ = Math.floor(Date.now() / 1000);
            var [usu, gd] = q.trim().split("/");
            if (!/^\d+$/.test(gd))
              return reply("Apenas pode digitar números após a /");
            if (menc_os2 && gd) {
              let usu_E = rggold[ID_G_GOLD].usus.find((i) => i.id === menc_os2);
              if (
                !usu_E["emp_A"]?.find((i) => i.id === sender) &&
                usu_E["emp_A"]?.length > 0
              )
                return reply(
                  `Este usuário já tem uma proposta de empréstimo, ele deve recusar usando o comando ${prefix}recusaremprestimo para poder aceitar o seu.`
                );
              if (
                !usu_E["emp_G"]?.find((i) => i.id === sender) &&
                usu_E["emp_G"]?.length > 0
              )
                return reply(
                  "Este usuário já tem um empréstimo para pagar, você não pode emprestar para ele."
                );
              if (S_Sistema.RS(sender, "Golds") < parseInt(gd))
                return reply(
                  "Você não tem essa quantidade de Golds para emprestar."
                );
              mention(`Olá @${menc_os2.split("@")[0]}, O usuário @${
                sender.split("@")[0]
              } gostaria de te emprestar ${gd} Golds. Caso esteja interessado em aceitar o empréstimo, utilize o seguinte comando: ${prefix}aceitaremprestimo. Se preferir recusar a oferta, utilize: ${prefix}recusaremprestimo.

No caso de aceitar o empréstimo, lembramos que o usuário terá a possibilidade de cobrar você daqui a 1 dia/24 horas, através do comando ${prefix}cobrargold. Caso possua os golds na data de cobrança, será consumido os Golds dele +15%.

Agradecemos sua atenção e aguardamos sua decisão. Qualquer dúvida, estamos à disposição.`);
              Object.assign(usu_E, {
                emp_A: [{ id: sender, Golds: parseInt(gd), Tempo: 0 }],
              });
              Goldrgs(rggold);
            } else {
              return reply(
                `Exemplo: ${
                  prefix + command
                } @xpessoa/100\n\nassim você estará enviando um empréstimo para o usuário x, e para ele aceitar, ele usa ${prefix}aceitaremprestimo, caso não quiser, ele pode usar, ${prefix}recusaremprestimo, o exemplo que coloquei é um empréstimo de 100 Golds, e você receberá 15% quando receber de volta, e para cobrar, você só poderá cobrar daqui a 1 Dia/24 Horas, e o comando é ${prefix}cobrargold @xpessoa, mas se ele não aceitou o empréstimo, não terá como.`
              );
            }
          }
          break;

        case "7aceitaremprestimo":
        case "aceitarproposta":
          {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!IS_sistemGold)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
              );
            let Eu_ = rggold[ID_G_GOLD].usus.find((i) => i.id === sender);
            if (Eu_?.emp_A && Eu_?.emp_A.length > 0) {
              let Eu = rggold[ID_G_GOLD].usus.find(
                (i) => i.id === Eu_.emp_A[0]?.id
              );
              if (Math.floor(Eu.Golds) < Math.floor(Eu_.emp_A[0].Golds))
                return reply(
                  `O usuário não tem mais a quantidade de Golds que era pra te emprestar, você tem que usar o comando de recusar proposta, ${prefix}recusaremprestimo, sinto muito.`
                );
              mention(
                `Olá @${Eu_.emp_A[0].id.split("@")[0]}, o usuário @${
                  sender.split("@")[0]
                } aceitou sua proposta de empréstimo.`
              );
              let day = Math.floor(Date.now() / 1000 + 1 * 60 * 60 * 24);
              let Mth = Math.floor(Eu_.emp_A[0].Golds);
              Eu.Golds -= Mth;
              Eu_.Golds += Mth;
              Object.assign(Eu_, {
                emp_G: [
                  {
                    id: Eu_.emp_A[0].id,
                    Golds:
                      Eu_?.emp_G?.length > 0
                        ? parseInt(Eu_.emp_G[0].Golds) + Mth
                        : Mth,
                    Tempo: day,
                    cobrou: 0,
                  },
                ],
              });
              Eu_.emp_A = [];
              Goldrgs(rggold);
            } else {
              return reply(
                "Você não tem nenhuma proposta de empréstimo para aceitar."
              );
            }
          }
          break;

        case "recusaremprestimo":
        case "recusarproposta":
          {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!IS_sistemGold)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
              );
            let Eu_ = rggold[ID_G_GOLD].usus.find((i) => i.id === sender);
            if (Eu_?.emp_A && Eu_?.emp_A?.length > 0) {
              mention(
                `@${
                  Eu_.emp_A[0].id.split("@")[0]
                }, seu empréstimo foi recusado.`
              );
              Eu_.emp_A = [];
              Goldrgs(rggold);
            } else {
              return reply(
                "Você não tem nenhuma proposta de empréstimo para recusar."
              );
            }
          }
          break;

        case "pagaremprestimo":
        case "pagargold":
          {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!IS_sistemGold)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
              );
            let Eu = rggold[ID_G_GOLD].usus.find((i) => i.id === sender);
            if (Eu.emp_G && Eu.emp_G.length > 0) {
              let Ele = rggold[ID_G_GOLD].usus.find(
                (i) => i.id === Eu.emp_G[0].id
              );
              let V_E = Math.floor(Eu.emp_G[0].Golds);
              if (Math.floor(Eu.Golds) < V_E + V_E * 0.15)
                return reply(
                  `Você não tem Golds o suficiente para pagar o empréstimo, valor: ${
                    V_E + V_E * 0.15
                  }`
                );
              mention(
                `Parabéns, você realizou o pagamento do empréstimo de: @${
                  Eu.emp_G[0].id.split("@")[0]
                }, será pago com mais +15% de taxa de juros por ser umempréstimo, valor: ${
                  V_E + V_E * 0.15
                }`
              );
              Ele.Golds += Math.floor(V_E + V_E * 0.15);
              Eu.Golds -= Math.floor(V_E + V_E * 0.15);
              Eu.emp_G = [];
              Goldrgs(rggold);
            } else {
              reply("Você não tem nenhum empréstimo para pagar.");
            }
          }
          break;

        case "7cobrargold":
        case "7cobrargolds":
        case "cobraremprestimo":
          {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!IS_sistemGold)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
              );
            if (!menc_os2)
              return reply(
                "Marque o usuário que você fez o empréstimo para cobrar."
              );
            let Eu_ = rggold[ID_G_GOLD].usus.find((i) => i.id === menc_os2);
            let Eu = rggold[ID_G_GOLD].usus.find((i) => i.id === sender);
            let Tmp_A = Math.floor(Date.now() / 1000);
            if (Eu_?.emp_G?.length > 0) {
              if (Eu_.emp_G[0].id !== sender)
                return reply("Você não fez nenhum empréstimo a este usuário.");
              let U_G = Math.floor(Eu_.emp_G[0].Golds);
              if (Tmp_A < Math.floor(Eu_.emp_G[0].Tempo))
                return reply(
                  `Ainda falta: ${kyun(
                    Math.floor(Eu_.emp_G[0].Tempo) - Tmp_A
                  )}, tem que aguardar no mínimo 1 dia para poder cobrar um usuário, do empréstimo que você fez.`
                );
              if (Math.floor(Eu_.Golds) < U_G + U_G * 0.15)
                return reply(
                  "O usuário não tem a quantidade de Golds que te deve com os 15%."
                );
              reply(
                `Golds cobrado com sucesso + os 15%, igual: ${
                  U_G + U_G * 0.15
                }, até a próxima.`
              );
              Eu_.Golds -= Math.floor(U_G + U_G * 0.15);
              Eu.Golds += Math.floor(U_G + U_G * 0.15);
              Eu_.emp_G = [];
              Goldrgs(rggold);
            } else {
              return reply(
                "Este usuário não tem nenhum empréstimo para pagar não."
              );
            }
          }
          break;

        case "infoemprestimo":
          reply(`é composto por:

1 - ${prefix}emprestargold @xpessoa/100

2 - ${prefix}aceitaremprestimo

3 - ${prefix}recusaremprestimo

4 - ${prefix}cobraremprestimo

5 - ${prefix}pagaremprestimo

`);
          break;

        case "7roubargold":
        case "7roubargolds":
        case "7vingancagold":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!IS_sistemGold)
            return reply(
              `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
            );
          if (!menc_os2)
            return reply(
              `Marque o @ ou a mensagem do usuário que deseja roubar, Exemplo: ${
                prefix + command
              } @Xpessoa`
            );
          if (menc_os2 === botNumber)
            return reply("Você não pode me roubar 😡...");
          if (menc_os2 === sender) return reply("Não pode roubar você mesmo..");
          var FCLT_CHANCES_U = dataGp[0].Chances.find((i) => i.id === menc_os2);
          if (
            command !== "vingancagold" &&
            S_Sistema.RS_C(sender, "ChanceR", []).length >= 5
          )
            return reply(
              "Infelizmente suas chances de roubar por hoje foi encerrada, tente novamente amanhã.."
            );
          if (
            command !== "vingancagold" &&
            S_Sistema.RS_C(sender, "ChanceR")?.includes(menc_os2)
          )
            return reply(
              "Você já roubou este usuário hoje, só pode uma vez, e só são 5 roubos de membros diferentes por dia."
            );
          if (
            command === "vingancagold" &&
            S_Sistema.RS_C(sender, "Vinganca") > 0
          )
            return reply(
              `Que pena, sua vingança já foi executada hoje, só poderá novamente amanhã, ou então poderá comprar com 50 Golds, usando ${prefix}comprar vingançagold`
            );
          if (
            command === "vingancagold" &&
            !S_Sistema.RS_C(menc_os2, "ChanceR")?.includes(sender)
          )
            return reply(
              "Você não tem como se vingar desse usuário, porque ele não roubou você hoje."
            );
          var X_G_U = S_Sistema.RS(menc_os2, "Golds");
          var X_G_M = S_Sistema.RS(sender, "Golds");
          if (X_G_M <= 0)
            return reply(
              "Você não tem gold para tentar roubar alguém, tem que conter no mínimo 1 Gold."
            );
          if (X_G_U <= 0)
            return reply(
              "O usuário que você está tentando roubar, não tem nenhum Gold.."
            );
          if (FCLT_CHANCES_U["Escudo"]?.length > 0) {
            RB_F = FCLT_CHANCES_U.Escudo[0].rn + 1;
            if (Math.floor(Math.random() * RB_F) === 1) {
              reply(
                "O usuário estava de escudo, e você conseguiu quebrar, parabéns."
              );
              FCLT_CHANCES_U["Escudo"] = [];
            } else {
              function A_V() {
                command === "vingancagold"
                  ? S_Sistema.ADD_C(sender, "Vinganca", 1)
                  : false;
                command !== "vingancagold"
                  ? S_Sistema.ADD_C_P(sender, "ChanceR", menc_os2)
                  : null;
                reply(
                  "O usuário está de escudo, e você não conseguiu quebrar, você não conseguiu nada, sinto muito."
                );
              }
              return A_V();
            }
            setGp(dataGp);
          }
          var Rnd = Math.floor(Math.random() * 3);
          var Rnd_G = Math.floor(Math.random() * X_G_U);
          var Rnd_GM = Math.floor(Math.random() * X_G_M);
          let arrayDeFr = [
            `Parabéns pelo feito incrível de roubar ${Rnd_G} Golds do destemido usuário @${
              menc_os2.split("@")[0]
            }!`,
            `Você mostrou suas habilidades astutas ao conquistar ${Rnd_G} Golds das mãos de @${
              menc_os2.split("@")[0]
            }. Parabéns!`,
            `Aqui está a sua merecida recompensa por pilhar ${Rnd_G} Golds de @${
              menc_os2.split("@")[0]
            }. Brilhante!`,
            `A premiação é sua por conquistar ${Rnd_G} Golds em um ousado roubo contra @${
              menc_os2.split("@")[0]
            }. Impressionante!`,
            `Pelo seu talento em subtrair ${Rnd_G} Golds de @${
              menc_os2.split("@")[0]
            }, concedemos este prêmio de destreza.`,
            `Você se destacou ao conquistar ${Rnd_G} Golds do usuário @${
              menc_os2.split("@")[0]
            }. Aceite este reconhecimento!`,
            `Por sua audácia em obter ${Rnd_G} Golds por meio de um roubo, apresentamos este prêmio.`,
            `Seu sucesso em tomar ${Rnd_G} Golds de @${
              menc_os2.split("@")[0]
            } merece aplausos e esta premiação especial.`,
            `Uma conquista notável: ${Rnd_G} Golds roubados de @${
              menc_os2.split("@")[0]
            }. Receba este prêmio em reconhecimento.`,
            `Parabenizamos sua habilidade em conseguir ${Rnd_G} Golds por meios engenhosos de @${
              menc_os2.split("@")[0]
            }. Aqui está o seu prêmio!`,
            `Sua destemida façanha de ${Rnd_G} Golds roubados é celebrada com esta premiação.`,
            `Apresentamos este prêmio em honra ao seu talento demonstrado ao conseguir ${Rnd_G} Golds de @${
              menc_os2.split("@")[0]
            }.`,
            `Você provou ser um mestre da esperteza ao adquirir ${Rnd_G} Golds de @${
              menc_os2.split("@")[0]
            }. Receba este prêmio com louvor!`,
            `Sua proeza em roubar ${Rnd_G} Golds merece reconhecimento. Aceite este prêmio como lembrança.`,
            `Pelo seu esforço em adquirir ${Rnd_G} Golds por meios engenhosos, apresentamos este prêmio merecido.`,
            `Parabéns por superar os desafios e conseguir ${Rnd_G} Golds em um roubo ousado. Aqui está o seu prêmio!`,
            `Sua conquista de ${Rnd_G} Golds roubados de @${
              menc_os2.split("@")[0]
            } é recompensada com este prêmio de excelência.`,
            `Em homenagem à sua habilidade em conseguir ${Rnd_G} Golds, concedemos este prêmio de maestria.`,
            `Você se destacou ao conquistar ${Rnd_G} Golds de @${
              menc_os2.split("@")[0]
            } de forma impressionante. Aceite este prêmio como símbolo de sucesso!`,
            `Pela sua destreza em adquirir ${Rnd_G} Golds por meios criativos, é com prazer que lhe entregamos esta premiação.`,
          ];
          let arrayDFalha = [
            `Infelizmente, sua tentativa de roubo resultou em fracasso, e você perdeu ${Rnd_GM} Golds para @${
              menc_os2.split("@")[0]
            }. Melhor sorte da próxima vez!`,
            `Parece que a sorte não estava ao seu lado desta vez. ${Rnd_GM} Golds foram perdidos para @${
              menc_os2.split("@")[0]
            } devido à sua tentativa de roubo malsucedida.`,
            `Um valente esforço, mas sua tentativa de roubo não teve sucesso. ${Rnd_GM} Golds agora pertencem a @${
              menc_os2.split("@")[0]
            }.`,
            `${Rnd_GM} Golds foram subtraídos de você como resultado de uma tentativa de roubo malsucedida contra @${
              menc_os2.split("@")[0]
            }. Não desanime!`,
            `Seus planos foram frustrados e você perdeu ${Rnd_GM} Golds na tentativa de roubo contra @${
              menc_os2.split("@")[0]
            }. O jogo continua!`,
            `Às vezes, até as melhores estratégias falham. ${Rnd_GM} Golds foram perdidos na tentativa de roubo contra @${
              menc_os2.split("@")[0]
            }.`,
            `Uma tentativa corajosa, mas sua estratégia não funcionou desta vez. ${Rnd_GM} Golds foram perdidos para @${
              menc_os2.split("@")[0]
            }.`,
            `Sua tentativa de roubo não teve êxito e resultou na perda de ${Rnd_GM} Golds para @${
              menc_os2.split("@")[0]
            }. Hora de se reagrupar!`,
            `Uma jornada arriscada, mas sua tentativa de roubo falhou, levando à perda de ${Rnd_GM} Golds para @${
              menc_os2.split("@")[0]
            }.`,
            `A tentativa de roubo não deu frutos desta vez. ${Rnd_GM} Golds agora estão nas mãos de @${
              menc_os2.split("@")[0]
            }.`,
          ];

          var Rnd_Fr = arrayDeFr[Math.floor(Math.random() * arrayDeFr.length)];
          var Rnd_Flh =
            arrayDFalha[Math.floor(Math.random() * arrayDFalha.length)];

          if (Rnd === 0) {
            S_Sistema.R_A(menc_os2, sender, Rnd_G);
            mention(Rnd_Fr);
          } else if (Rnd === 1) {
            S_Sistema.R_A(sender, menc_os2, Rnd_GM);
            mention(Rnd_Flh);
          } else {
            mention(
              `Sinto muito, você tentou roubar o usuário @${
                menc_os2.split("@")[0]
              }, e não conseguiu roubar nada, voltou de mãos vazias 😪..`
            );
          }
          command === "vingancagold"
            ? S_Sistema.ADD_C(sender, "Vinganca", 1)
            : false;
          command !== "vingancagold"
            ? S_Sistema.ADD_C_P(sender, "ChanceR", menc_os2)
            : null;
          setGp(dataGp);
          break;

        case "7minerar_gold":
        case "7minerar_golds":
        case "7minerargold":
        case "7minerargolds":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!IS_sistemGold)
            return reply(
              `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
            );
          if (S_Sistema.RS_C(sender, "ChanceG") >= 3)
            return reply(
              "Você não tem mais chances de minerar Gold, volte amanhã..."
            );
          S_Sistema.ADD_C_M(sender, "ChanceG", 1);
          rnd = Math.floor(Math.random() * 2);
          rndg = Math.floor(Math.random() * 50);
          if (rnd == 0) {
            mention(
              `Parabéns @${sender2} você recebeu ${rndg} Golds, você só pode minerar 3 vez por dia... ${
                S_Sistema.RS_C(sender, "ChanceG") >= 3
                  ? "infelizmente você não tem mais chances para minerar hoje, volte amanhã.."
                  : `Ainda resta ${S_Sistema.RS_C(
                      sender,
                      "ChanceG"
                    )}/3 para obter Golds, sua chance é 3/3`
              }`
            );
            S_Sistema.ADD(sender, rndg);
          } else if (rnd != 0) {
            reply(
              `A, você não teve sorte dessa vez, sinto muito... ${
                S_Sistema.RS_C(sender, "ChanceG") >= 3
                  ? "infelizmente você não tem mais chances para minerar hoje, volte amanhã.."
                  : `Ainda resta ${S_Sistema.RS_C(
                      sender,
                      "ChanceG"
                    )}/3 para obter Golds, sua chance é 0/3`
              }`
            );
          }
          break;

        case "7apostargold":
        case "7apostagold":
          {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!IS_sistemGold)
              return reply(
                `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
              );
            if (!apenasNumeros(q.trim()))
              return reply(`Exemplo: ${prefix + command} 100`);
            if (S_Sistema.RS_C(sender, "ChanceAp") >= 15)
              return reply(
                "Você não tem mais chances de apostar, volte amanhã..."
              );
            var qnt_AP = Math.floor(q.trim().replaceAll(/\D/g, ""));
            if (S_Sistema.RS(sender, "Golds") < qnt_AP)
              return reply(
                "Você não tem essa quantidade de Golds para apostar, veja se contém chances de você minerar ou outras ações em menugold, e boas aventuras."
              );
            var aps = Math.floor(Math.random() * 4);
            var blaP = [
              `Infelizmente, você perdeu ${qnt_AP} Golds nessa aposta. Melhor sorte na próxima vez!`,
              `Parece que a sorte não estava do seu lado hoje. Você perdeu ${qnt_AP} Golds na aposta.`,
              `Sinto muito, mas você perdeu ${qnt_AP} Golds nessa rodada. Não desanime, a próxima pode ser sua!`,
              `Ah, que pena! Você perdeu ${qnt_AP} Golds nessa aposta. Lembre-se, cada derrota é uma oportunidade para aprender algo novo`,
              `A aposta não saiu como esperado e você perdeu ${qnt_AP} Golds. Mas não se preocupe, amanhã é um novo dia!`,
            ];
            var blaG = [
              `Parabéns! Você ganhou ${
                qnt_AP * 2
              } Golds nessa aposta. Continue assim!`,
              `Incrível! Você acertou e ganhou ${qnt_AP * 2} Golds. Que sorte!`,
              `Você fez a jogada certa e ganhou ${
                qnt_AP * 2
              } Golds. Isso é fantástico!`,
              `Que vitória! Você ganhou ${
                qnt_AP * 2
              } Golds nessa aposta. Que o seu sucesso continue!`,
              `Excelente! Você ganhou ${
                qnt_AP * 2
              } Golds. Sua estratégia realmente funcionou!`,
            ];
            if (aps === 0) {
              reply(blaP[Math.floor(Math.random() * blaP.length)]);
              S_Sistema.RM(sender, qnt_AP);
            } else if (aps === 1) {
              reply(blaG[Math.floor(Math.random() * blaG.length)]);
              S_Sistema.ADD(sender, qnt_AP * 2);
            } else if (aps === 2) {
              reply(
                `Você teve 50% de sorte e 50% de azar, perdeu metade do que apostou ( ${
                  qnt_AP / 2
                } ), Boa sorte na próxima.`
              );
              S_Sistema.RM(sender, qnt_AP / 2);
            } else {
              reply(
                `Você nem perdeu nem ganhou, ao menos continuou com o que apostou, Boa sorte na próxima.`
              );
            }
            S_Sistema.ADD_C_M(sender, "ChanceAp", 1);
          }
          break;

        case "addpalavras_forca":
        case "addpalavras_f":
          if (!SoDono) return reply(Res_SoDono);
          var [ttl, tema, dc] = q.toLowerCase().trim().split("|");
          if (!q.includes("|"))
            return reply(
              `Faltanda a primeira |\nExemplo: ${
                prefix + command
              } titulo|tema|dica`
            );
          if (q.lastIndexOf("|") < 0)
            return reply(
              `Faltando a segunda |\nExemplo: ${
                prefix + command
              } titulo|tema|dica`
            );
          kir = [];
          for (i of palavrasfr) {
            kir.push(i.plvr);
          }
          if (kir.indexOf(ttl.toLowerCase().trim()) >= 0)
            return reply("Este título já foi adicionado/existente...");
          palavrasfr.push({ plvr: ttl, tema: tema, dica: dc });
          fs.writeFileSync(
            "./dados/global/palavras_forca.json",
            JSON.stringify(palavrasfr, null, 2)
          );
          reply("Palavra adicionada ao jogo da forca com sucesso...");
          break;

        case "rmpalavra_f":
        case "rmpalavra_forca":
          if (!SoDono) return reply(Res_SoDono);
          var i5 = palavrasfr
            .map((i) => i.plvr)
            .indexOf(q.trim().toLowerCase());
          palavrasfr.splice(i5, 1);
          fs.writeFileSync(
            "./dados/global/palavras_forca.json",
            JSON.stringify(palavrasfr, null, 2)
          );
          reply("Palavra tirada do jogo da forca com sucesso...");
          break;

        case "mostrar_forca":
        case "ver_forca":
        case "iniciar_forca":
        case "iniciar-forca":
        case "iniciarforca":
          if (!isGroup) return reply(Res_SoGrupo);
          try {
            if (dataGp[0].forca_inc)
              return reply(
                `Jogo já está em andamento, caso queira resetar, fale com um adm para executar ${prefix}rv-forca, ou tente acertar o jogo da forca que deve está logo a cima.`
              );
            if (!dataGp[0].forca_inc) {
              rv_forca();
              var DM_FR = dataGp[0].forca_ofc[0];
              dataGp[0].forca_inc = true;
              setGp(dataGp);
              await sleep(300);
              let linha_fr = " ";
              DM_FR.palavra.some((ab) => {
                linha_fr += ` ${ab}`;
              });

              rsp_fr = `- Jogo da forca - ${DM_FR.palavra_ofc.length} Letras\n\nTema: ${DM_FR.tema}\n\nDica: ${DM_FR.dica}\n
|________
 _¦_\n\n\n\n\n\n\n
${linha_fr}\n
_____________________
\n_- JOGO INICIADO -_
\nUse ${prefix}r-f letra que talvez exista por sua observação.\n\nOu ${prefix}r-f nome todo\n
_____________________
`;
              reply(rsp_fr);
            }
          } catch (e) {
            console.log(e);
          }
          break;

        case "r-forca":
        case "r-f":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!dataGp[0].forca_inc)
            return reply(
              `O jogo não foi iniciado.\nDigite ${prefix}iniciar_forca`
            );
          if (!q.toLowerCase().trim())
            return reply("Digite a letra que deseja responder..");
          var q2 = q_2.trim().toLowerCase();
          if (ANT_LTR_MD_EMJ(q2) || Number(q2))
            return reply(
              "Não pode letras modificadas, nem emoji, nem números.."
            );
          if (q.trim().length == 2)
            return reply(
              "Digite letra por letra para tentar adivinhar, ou acerte a palavra toda, boa sorte..."
            );
          DM_FR = dataGp[0].forca_ofc[0];
          if (DM_FR.escreveu.indexOf(q2) >= 0)
            return reply("Esta letra já foi utilizada..");
          var ERRQ = DM_FR.palavra_ofc.includes(q2) ? 0 : 1;
          var ERROS = dataGp[0].forca_ofc[0].erros;
          DM_FR.escreveu.push(q2);
          setGp(dataGp);
          PSC = [];
          if (DM_FR.palavra_ofc.indexOf(q2) >= 0) {
            for (i = 0; i < DM_FR.palavra_ofc.length; i++) {
              if (DM_FR.palavra_ofc[i] == q2) {
                PSC.push(i);
                DM_FR.acertos += 1;
              }
            }
            for (i of PSC) {
              DM_FR.palavra[i] = q2;
            }
            setGp(dataGp);
          }
          await sleep(300);
          let linha_fr = " ";
          DM_FR.palavra.some((ab) => {
            linha_fr += ` ${ab}`;
          });

          let letra_ut = " ";
          DM_FR.escreveu.some((cd) => {
            letra_ut += `${cd}, `;
          });

          var RST_T = `- Jogo da forca - ${
            DM_FR.palavra_ofc.length
          } Letras\n\nTema: ${DM_FR.tema}\n\nDica: ${DM_FR.dica}\n
__________-_
\t\t\t\t\t\t\t\t\t_|_\n
\t\t\t\t\t\t\t\t${ERROS + ERRQ >= 1 ? "🤡" : ""}
\t\t\t\t\t\t${ERROS + ERRQ >= 2 ? "👈" : ""} ${
            ERROS + ERRQ >= 3 ? "👉" : ""
          }\t\t\n\t\t\t\t\t\t\t\t\t${ERROS + ERRQ >= 4 ? "👖" : ""}
\t\t\t\t\t\t\t\t\t${ERROS + ERRQ >= 5 ? "👞" : ""} ${
            ERROS + ERRQ >= 6 ? "👞" : ""
          }
\n${linha_fr}\n
___-________-_____\n
Letras ja utilizadas: ${letra_ut}
___-________-_____
`;
          if (q.length > 2) {
            reply("Humm, espertinho quer acertar a palavra toda");
          }
          await sleep(500);
          if (
            DM_FR.palavra_ofc.indexOf(q2) >= 0 ||
            (q2.length > 2 && q2 == DM_FR.palavra_ofc)
          ) {
            reply(
              `${
                q2.length > 2
                  ? `Você acertou a palavra toda e ganhou${
                      IS_sistemGold ? " 10 Golds," : " "
                    }bom menino(a), irei resetar o jogo...`
                  : DM_FR.acertos == DM_FR.palavra_ofc.length
                  ? `Parabéns, toda palavra foi concluída : < ${
                      DM_FR.palavra_ofc
                    } >${
                      IS_sistemGold
                        ? ` você recebeu 5 Golds, por ser o último..,`
                        : " "
                    }irei resetar o jogo..`
                  : `Você acertou uma letra e ganhou${
                      IS_sistemGold ? " 2 Golds " : " "
                    }continue assim..`
              }`
            );
            if (IS_sistemGold) {
              S_Sistema.ADD(
                sender,
                q.length > 2
                  ? 10
                  : DM_FR.acertos == DM_FR.palavra_ofc.length
                  ? 5
                  : 2
              );
            }
            if (q2.length > 2 || DM_FR.acertos == DM_FR.palavra_ofc.length) {
              return rv_forca();
            }
            await sleep(200);
            reply(RST_T);
          } else {
            reply(
              `${
                q2.length > 2
                  ? `Infelizmente você perdeu${
                      IS_sistemGold ? " 3 Golds" : ""
                    }, errou a palavra toda, deveria ter tentado letra por letra né, irei resetar o jogo..`
                  : ERROS + ERRQ == 6
                  ? `Aa, você completou 6 Erros, e perdeu ${
                      IS_sistemGold ? "2 Golds infelizmente," : ", "
                    }irei resetar o jogo..`
                  : `Você Errou, e perdeu ${
                      IS_sistemGold ? "2 Golds" : ""
                    } 😥..`
              }`
            );
            if (IS_sistemGold) {
              S_Sistema.ADD(sender, 2);
            }
            dataGp[0].forca_ofc[0].erros += 1;
            setGp(dataGp);
            if (q2.length > 2 || ERROS + ERRQ == 6) {
              return rv_forca();
            }
            await sleep(200);
            reply(RST_T);
          }
          break;

        case "figemoji":
        case "figroblox":
        case "figmeme":
        case "figanime":
        case "figcoreana":
        case "figraiva":
        case "figengracada":
        case "figdesenho":
        case "fig":
          if (!q)
            return reply(
              "Insira a quantidade de figurinhas que deseja que eu envie."
            );
          if (!Number(args[0]) || Number(q.trim()) > 5)
            return reply(
              "Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 5.."
            );
          const owner = "badDevelopper";
          const repo = "figus2";
          async function figugit() {
            fetch(
              `https://api.github.com/repos/${owner}/${repo}/contents/${command}`
            )
              .then((response) => response.json())
              .then((data) => {
                const randomIndex = Math.floor(Math.random() * data.length);
                conn.sendMessage(from, {
                  sticker: {
                    url: `https://raw.githubusercontent.com/${owner}/${repo}/main/${command}/${data[randomIndex].name}`,
                  },
                });
              });
          }
          for (i = 0; i < q; i++) {
            await sleep(2000);
            figugit();
          }
          break;

        case "figurinhas":
          {
            if (!q) return reply("Insira a qnd de figu que deja que eu envie");
            if (!Number(args[0]) || Number(q.trim()) > 5)
              return reply(
                "Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 5.."
              );
            const owner = nescessario.donodorepo;
            const repo = nescessario.pastadorepo;
            const pastacomfigu = nescessario.pastacomfigu;
            async function figugit() {
              fetch(
                `https://api.github.com/repos/${owner}/${repo}/contents/${pastacomfigu}`
              )
                .then((response) => response.json())
                .then((data) => {
                  const randomIndex = Math.floor(Math.random() * data.length);
                  conn.sendMessage(from, {
                    sticker: {
                      url: `https://raw.githubusercontent.com/${owner}/${repo}/main/${pastacomfigu}/${data[randomIndex].name}`,
                    },
                  });
                });
            }
            for (i = 0; i < q; i++) {
              await sleep(2000);
              figugit();
            }
          }
          break;

        case "limpar_mortos-cnt":
          if (!SoDono) return reply(Res_SoDono);
          if (!isGroup) return reply(Res_SoDono);
          var RD_CNT =
            countMessage[countMessage.map((i) => i.groupId).indexOf(from)]
              .numbers;
          CNT1 = [];
          for (i of groupMembers) {
            CNT1.push(i.id);
          }
          CNT = [];
          for (i of RD_CNT) {
            if (!CNT1.includes(i.id)) CNT.push(i);
          }
          for (i of CNT) {
            RD_CNT.splice(RD_CNT.map((i) => i.id).indexOf(i.id), 1);
          }
          fs.writeFileSync(
            "./dados/countmsg.json",
            JSON.stringify(countMessage, null, 2)
          );
          reply(
            "Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens.."
          );
          break;

        case "tirar_docnt":
          if (!SoDono) return;
          if (!isGroup) return reply(Res_SoDono);
          var i2 = countMessage.map((a) => a.groupId).indexOf(from);
          var i1 = countMessage[i2].numbers
            .map((b) => b.id)
            .indexOf(q.trim() + SNET);
          countMessage[i2].numbers.splice(i1, 1);
          fs.writeFileSync(
            "./dados/countmsg.json",
            JSON.stringify(countMessage, null, 2)
          );
          reply("Usuário tirado do contador de mensagens com sucesso...");
          break;

        case "anotacao":
        case "anotacoes":
        case "nota":
        case "notas":
          if (!isGroup) return reply(Res_SoGrupo);
          if (command == "anotacao" || command == "nota") {
            if (!q.trim())
              return reply("Digite o título da anotação que deseja puxar..");
            if (!JSON.stringify(anotar).includes(from))
              return reply("Este grupo não tem nenhuma anotação...");
            var i2 = anotar.map((i) => i.grupo).indexOf(from);
            if (!JSON.stringify(anotar[i2].puxar).includes(q))
              return reply("Não contém nenhuma anotação com este título.");
            var i3 = anotar[i2].puxar.map((i) => i.nota).indexOf(q.trim());
            mention(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`);
          } else {
            var i2 = anotar.map((i) => i.grupo).indexOf(from);
            if (i2 < 0) return reply("Este grupo não tem nenhuma anotação...");
            var i2 = anotar.map((i) => i.grupo).indexOf(from);
            var antr = anotar[i2]?.puxar;
            txtin = "──────────────────\n\n";
            for (i = 0; i < antr?.length; i++) {
              txtin += `↝ Anotação: ⟮ ${anotar[i2]?.puxar[i]?.nota} ⟯ - 〈 ${anotar[i2]?.puxar[i]?.anotacao} 〉\n\n`;
            }
            txtin += "──────────────────\n\n";
            mention(txtin);
          }
          break;

        case "download-link":
          if (q.includes("video") || q.includes("mp4")) {
            conn
              .sendMessage(
                from,
                { video: { url: q }, mimetype: "video/mp4" },
                { quoted: info }
              )
              .catch((e) => {
                reply("Erro, visualize se este link é válido...");
              });
          } else if (q.includes("webp") || q.includes("jpg")) {
            conn
              .sendMessage(from, { image: { url: q } }, { quoted: info })
              .catch((e) => {
                reply("Erro, visualize se este link é válido...");
              });
          }
          break;

        case "signo":
          try {
            if (!q.trim())
              return reply(
                `Digite seu signo, exemplo: ${prefix + command} virgem`
              );
            ABC = await reqapi.signo(q.trim());
            conn
              .sendMessage(from, {
                image: { url: ABC.img },
                caption: `Signo: ${q}\n\n${ABC.title}\n${ABC.body}`,
              })
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        case "moedas":
        case "moeda":
          try {
            ABC = await reqapi.moedas();
            reply(
              `${ABC?.dolar}\n\n${ABC?.euro}\n\n${ABC?.libra}\n\n${ABC?.bitcoin}\n\n${ABC?.ethereum}\n\n${ABC?.bovespa}\n\n${ABC?.ouro}`
            );
          } catch {
            return reply("Erro, breve volta.");
          }
          break;

        case "esportenoticias":
        case "esportenoticia":
        case "espnoticia":
        case "espnoticias":
        case "noticiasesporte":
        case "noticiaesporte":
        case "noticiaesp":
        case "noticiasesp":
        case "esporte_noticias":
        case "esporte_noticia":
        case "esporte-noticias":
        case "esporte-noticia":
          reply("Aguarde, realizando ação..");
          try {
            ABC = await reqapi.esporte();
            AB = "";
            for (i = 1; i < ABC.length; i++) {
              AB += `${ABC[i].titulo}\n\n`;
            }
            conn.sendMessage(
              from,
              { image: { url: ABC[0].img }, caption: AB },
              { quoted: info }
            );
          } catch {
            return reply(
              "Erro, tente novamente ou aguarde até voltar ao normal."
            );
          }
          break;

        case "letra":
        case "liryc":
        case "letram":
        case "letramusic":
        case "letramusica":
        case "letra_musica":
        case "letrademusica":
          {
            if (!q.trim())
              return reply(`Exemplo: ${prefix + command} Ela me traiu`);
            try {
              reply(Res_Aguarde);
              const abc = await reqapi.letra_m(q.trim());
              reply(
                ` - Titulo: ${abc.titulo || "Erro..."}\n\n - Compositor: ${
                  abc.compositor || "Erro..."
                }\n\n - Letra:\n\n${abc.letra || "Erro..."}`
              );
            } catch (e) {
              reply("Erro... 🥱");
            }
          }
          break;

        case "aptoide_pesquisa":
          if (!q.trim()) return reply("Exemplo: WhatsApp");
          try {
            abc = await reqapi.aptoide_pesquisa(q.trim());
            reply(abc);
          } catch {
            return reply("Erro... 🥱");
          }
          break;

        case "aptoide":
          if (!q.trim().includes("aptoide.com"))
            return reply(
              `Exemplo: ${
                prefix + command
              } link do aptoide\n\nUse o comando ${prefix}aptoide_pesquisa Exemplo: whatsapp, ae vai receber as url, pegue a url e use.`
            );
          reply(Res_Aguarde);
          try {
            abc = await reqapi.aptoide(q.trim());
            conn.sendMessage(
              from,
              {
                document: { url: abc.link },
                mimetype: "application/vnd.android.package-archive",
                fileName: abc.titulo,
              },
              { quoted: info }
            );
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        case "playstore":
          try {
            if (q.length < 2)
              return reply("Cade o título do apk que deseja pesquisar?");
            abc = await reqapi.playstore(q.trim());
            ABC = "Play Store pesquisa:\n\n";
            for (let a of abc.resultados) {
              ABC += ` - NOME DO APK: ${a.title}\n - ID: ${a.appId}\n - URL: ${
                a.url
              }\n\n${"-".repeat(20)}\n\n`;
            }
            reply(ABC);
          } catch {
            return reply("Erro... 🥱");
          }
          break;

        case "logos1":
          if (!q.trim()) return reply(`Exemplo: ${prefix + command} LadyBot`);
          var LOGOS = [
            "shadow",
            "metalgold",
            "cup",
            "txtborboleta",
            "cemiterio",
            "efeitoneon",
            "harryp",
            "lobometal",
            "neon2",
            "madeira",
            "lovemsg3",
            "coffecup",
            "coffecup2",
            "florwooden",
            "narutologo",
            "fire",
            "romantic",
            "smoke",
            "papel",
            "lovemsg",
            "lovemsg2",
            "fiction",
            "3dstone",
            "areia",
            "style",
            "blood",
            "pink",
            "cattxt",
            "neondevil",
            "carbon",
            "metalfire",
            "thunder",
            "vidro",
            "jokerlogo",
            "transformer",
            "demonfire",
            "jeans",
            "metalblue",
            "natal",
            "ossos",
            "asfalto",
            "break",
            "glitch2",
            "colaq",
            "neon3",
            "nuvem",
            "horror",
            "matrix",
            "berry",
            "luxury",
            "lava",
            "thunderv2",
            "neongreen",
            "neve",
            "neon",
            "neon1",
            "neon3d",
            "gelo",
            "neon3",
            "3dgold",
            "lapis",
            "toxic",
            "demongreen",
            "rainbow",
            "halloween",
            "angelwing",
            "hackneon",
            "fpsmascote",
            "equipemascote",
            "txtquadrinhos",
            "ffavatar",
            "mascotegame",
            "angelglx",
            "gizquadro",
            "wingeffect",
            "blackpink",
            "metalgold",
            "girlmascote",
            "logogame",
          ];
          var ENV = [];
          for (var a = 0; a < LOGOS.length; a++) {
            ENV.push({
              title: LOGOS[a],
              description: `Logo personalizada: ${a + 1}`,
              rowId: prefix + LOGOS[a] + ` ${q}`,
            });
          }
          LGS = "LOGOS DE 1 TEXTO:\n\n";
          for (let i of ENV) {
            LGS += `${i.description}\n\nLogo: ${i.title}\n\nExemplo: ${i.rowId}\n\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n`;
          }
          reply(LGS);
          break;
        case "amazon":
        case "amazonsearch":
          if (q.trim().length < 4)
            return reply(`Exemplo: ${prefix + command} fone redmi airdots 2`);
          try {
            reply(Res_Aguarde);
            ABC = await reqapi.amazon(q.trim());
            RST = "Pesquisa Amazon:\n\n";
            for (i = 0; i < (ABC.length > 40 ? 40 : ABC.length); i++) {
              RST += `( ${i + 1} ) - Titulo: ${ABC[i].titulo}\n- Preço: ${
                ABC[i].preco
              }\n- Url: ${ABC[i].url}\n${"_".repeat(27)}\n\n`;
            }
            reply(RST);
          } catch {
            return reply(`Erro, não foi possivel encontrar.`);
          }
          break;
        case "pesquisa":
        case "pesquisar":
          try {
            bla = await reqapi.pesquisa(q.trim());
            conn.sendMessage(from, { text: bla.msg }, { quoted: info });
          } catch {
            return reply("Erro... 🥱");
          }
          break;

        case "menu":
        case "helpp":
        case "menup":
        case "comandosp":
          if (isGroup) {
            let GtGp;
            try {
              GtGp = await conn.groupFetchAllParticipating();
            } catch {
              GtGp = false;
            }

            if (GtGp) {
              var groups = Object.entries(GtGp)
                .slice(0)
                .map((entry) => entry[1]);
              for (var c = 0; c < groupMetadata_RG?.length; c++) {
                if (groups.map((i) => i.id !== groupMetadata_RG[c].id)) {
                  groupMetadata_RG.splice(
                    groupMetadata_RG.findIndex(
                      (l) => l.id === groupMetadata_RG[c].id
                    ),
                    1
                  );
                  fs.writeFileSync(
                    "./dados/global/groups.json",
                    JSON.stringify(groupMetadata_RG, null, 2)
                  );
                }
              }
            }
          }

          conn.sendMessage(
            from,
            {
              image: { url: logoslink.logo },
              caption: menu(prefix, NomeDoBot, sender),
              mentions: [sender],
            },
            { quoted: info }
          );
          break;

        case "info":
          {
            if (!q_2) return reply(`Exemplo: ${prefix + command} play`);
            if (!infos.some((i) => i.comando === q_2))
              return reply(
                `Comando -> ${q_2} não encontrado na lista de informações, sinto muito.`
              );
            if (infos.map((i) => i.comando === q_2))
              return reply(
                infos
                  .find((i) => i.comando === q_2)
                  .info.replaceAll("#prefixo#", prefix)
              );
          }
          break;

        case "addinfo":
          {
            if (!SoDono) return reply(Res_SoDono);
            const comando = q_2.split("|")[0];
            const info = q.trim().split("|")[1];
            if (comando && info && !comando.startsWith(prefix)) {
              const info_a = infos.find((i) => i.comando === comando)?.info;
              if (!info_a) {
                infos.push({ comando: comando, info: info });
                fs.writeFileSync(
                  "./dados/org/json/infos.json",
                  JSON.stringify(infos, null, 2)
                );
                reply(
                  `Informação adicionada com sucesso, use: ${prefix}info ${comando} para ver a informação do comando, que você adicionou.`
                );
              } else {
                reply(
                  `Informação do comando -> ${comando} foi atualizada com sucesso, Como era a informação anterior:\n\n${info_a}`
                );
                infos[infos.findIndex((i) => i.comando === comando)].info =
                  info;
                fs.writeFileSync(
                  "./dados/org/json/infos.json",
                  JSON.stringify(infos, null, 2)
                );
              }
            } else {
              return reply(
                `Cade o comando que você deseja renovar ou acrescentar informação ? Exemplo: ${
                  prefix + command
                } play|Este comando é usado para pedir música ou baixar vídeos/áudios, use por exemplo: ${prefix}play e o nome da música, ou se for um video, use: ${prefix}playmp4 e o nome do vídeo.`
              );
            }
          }
          break;

        case "ativarfuncoesdono":
        case "ativacoes_dono":
          if (!SoDono) return reply(Res_SoDono);
          reply(`
_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

Quiser saber as informações de como usar, e comandos que tiver junto com o comando que deseja, use "${prefix}info antipv" o antipv é só exemplo, serve para os outros também...

- Comando de Ativar / Desativar o bloqueador de quando ligarem pro bot, so
digitar o comando ligar, e denovo pra desligar: 
${prefix}antiligar
Status: ${nescessario?.anticall ? "✓" : "✕"}

- Comando para ativar ou desativar o visualizador de mensagem, visualizar
mensagem de tudo, so digitar o comando pra ligar, e o comando novamente pra
desligar: 
${prefix}visualizarmsg
Status: ${nescessario?.visualizarmsg ? "✓" : "✕"}

- Comando de desativar o que mostra comandos dados no console, so digitar o
comando 1 vez ora ativar, e digitar o comando novamente pra desativar:
${prefix}console
Status: ${nescessario?.consoleoff ? "✓" : "✕"}

- Comando para ativar o bloqueador de quando algum usuário mande mensagem
privado do bot, seja bloqueado, o comando usado 1 vez, ele ativa, usado
novamente ele desativar:
${prefix}antipv
Status: ${nescessario?.antipv ? "✓" : "✕"}

- Comando de falar que não pode mandar mensagem privado, para alterar a
mensagem, so usar o comando ${prefix}msgantipv e coloque o que quer, para ativar
o comando é digitar ele uma vez, e digitar novamente para desativar: 
${prefix}antipv2
Status: ${nescessario?.antipv2 ? "✓" : "✕"}

- Este terceiro antipv, ele apenas ignora qualquer coisa enviada no privado do bot, e também ignora comandos pedido.
Use uma vez para ativar, e se quiser desativar, só usar novamente, Comando: ${prefix}antipv3
Status: ${nescessario?.antipv3 ? "✓" : "✕"}

- Comando de ativar e desativar o audio do menu:
${prefix}audio-menu
Status: ${nescessario?.menu_audio ? "✓" : "✕"}

- Comando de ativar e desativar o verificado de marcação: 
${prefix}verificado-global
Status: ${nescessario?.verificado ? "✓" : "✕"}

- Comando de desativar o bot completamente para ninguém usar:
${prefix}botoff
Status: ${nescessario?.botoff ? "✓" : "✕"}

- Comando de funcionar só comandos pra administrador:
${prefix}So_Adm
Status: ${dataGp[0]?.soadm ? "✓" : "✕"}

- Comando para recolher link de grupos que o bot estiver:
${prefix}recolherlink
Status: ${nescessario?.isRecolherLink ? "✓" : "✕"}

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
`);
          break;

        case "verificado-global":
          if (!SoDono) return reply(Res_SoDono);
          if (!isVerificado) {
            nescessario.verificado = true;
            setNes(nescessario);
            reply(
              `- O Verificado foi Ativado de todos os comandos que tem, para tirar novamente só digitar o comando novamente..`
            );
          } else if (isVerificado) {
            nescessario.verificado = false;
            setNes(nescessario);
            reply(
              `- O Verificado de todos os menu / comando, foi Desativado, para ativar novamente só digitar o comando novamente..`
            );
          }
          break;

        case "audio-menu":
          if (!SoDono) return reply(Res_SoDono);
          if (!isAudioMenu) {
            nescessario.menu_audio = true;
            setNes(nescessario);
            reply(
              `- O Áudio foi ativado para o menu _- COM SUCESSO - _\n\nSe quiser Desativar - Só digitar o comando novamente`
            );
          } else if (isAudioMenu) {
            nescessario.menu_audio = false;
            setNes(nescessario);
            reply(
              `- O Áudio foi Desativado do menu _- COM SUCESSO - _\n\nSe quiser Ativar - Só digitar o comando novamente`
            );
          }
          break;

        case "console":
          if (!SoDono) return reply(Res_SoDono);
          if (!isConsole) {
            nescessario.consoleoff = true;
            setNes(nescessario);
            reply(
              `- O comando de tirar o console foi ativado _- COM SUCESSO - _ Agora não verá mais os comandos nem mensagem dadas no console, mas funcionará perfeitamente, ok?, é bom para evitar banimento de spam no heroku.\n\nSe quiser Desativar - Só digitar o comando novamente`
            );
          } else if (isConsole) {
            nescessario.consoleoff = false;
            setNes(nescessario);
            reply(
              `- O comando de tirar o console foi Desativado_- COM SUCESSO - _ Agora verá os comandos e mensagens dadas no console, mas se for utilizar no heroku, recomendo ativar. é bom para evitar banimento de spam no heroku.\n\nSe quiser Ativar - Só digitar o comando novamente`
            );
          }
          break;

        case "logos":
        case "menulogo":
        case "menulogos":
          conn.sendMessage(
            from,
            {
              image: { url: logoslink.logo },
              caption: menulogos(prefix, sender),
              mentions: [sender],
            },
            { quoted: info }
          );
          break;

        case "menuadm":
        case "menuadms":
        case "adm":
          conn.sendMessage(
            from,
            {
              image: { url: logoslink.logo },
              caption: adms(prefix, sender),
              mentions: [sender],
            },
            { quoted: info }
          );
          if (isAudioMenu) {
            conn.sendMessage(
              from,
              {
                audio: { url: "./dados/audios/admin.ogg" },
                mimetype: "audio/ogg; codecs=opus",
                ptt: true,
              },
              { quoted: info }
            );
          }
          break;

        case "menudono":
        case "donomenu":
          conn.sendMessage(
            from,
            {
              image: { url: logoslink.logo },
              caption: menudono(prefix, sender),
              mentions: [sender],
            },
            { quoted: info }
          );
          break;

        case "efeitosimg":
        case "efeitos":
        case "efeitoimg":
        case "efeitosmarcar":
          conn.sendMessage(
            from,
            {
              image: { url: logoslink.logo },
              caption: efeitos(prefix, sender),
              mentions: [sender],
            },
            { quoted: info }
          );
          break;

        case "alteradores":
          conn.sendMessage(
            from,
            {
              image: { url: logoslink.logo },
              caption: alteradores(prefix, sender),
              mentions: [sender],
            },
            { quoted: selo }
          );
          break;
        case "menubrincadeiras":
        case "brincadeiras":
        case "brincadeira":
          if (!isModobn) return reply(Res_SoModoBN);
          conn.sendMessage(
            from,
            {
              image: { url: logoslink.logo },
              caption: brincadeiras(prefix, sender),
              mentions: [sender],
            },
            { quoted: selo }
          );
          if (isAudioMenu) {
            conn.sendMessage(
              from,
              {
                audio: { url: "./dados/audios/nubrinks.ogg" },
                mimetype: "audio/ogg; codecs=opus",
                ptt: true,
              },
              { quoted: info }
            );
          }
          break;

        case "menupremium":
        case "menuprem":
          conn.sendMessage(
            from,
            { text: menuprem(prefix, sender), mentions: [sender] },
            { quoted: selo }
          );
          break;

        case "configurar-bot":
          conn.sendMessage(from, { text: configbot(prefix) }, { quoted: selo });
          break;

        case "comandos-termux":
          conn.sendMessage(
            from,
            { text: cmd_termux(prefix) },
            { quoted: selo }
          );
          break;

        case "perfil":
          let ppimg;
          try {
            // Corrigido para Baileys 7.0+ - usar sender diretamente
            ppimg = await conn.profilePictureUrl(sender, "image");
          } catch {
            ppimg = "https://telegra.ph/file/b5427ea4b8701bc47e751.jpg";
          }
          var indnum = numbersIds.indexOf(sender);
          var RSM_CN = countMessage[ind].numbers[indnum];
          try {
            dptr = `
✨🌟✨ Nome: ( ${pushname} ) ✨🌟✨
 
📩 Mensagens: ${RSM_CN.messages}
💻 Comandos: ${RSM_CN.cmd_messages}
🎭 Figurinhas: ${RSM_CN.figus}
🐂 Corno: ${Math.floor(Math.random() * 100)}%
🐄 Gado: ${Math.floor(Math.random() * 100)}%
😇 Santo(a): ${Math.floor(Math.random() * 100)}%
😈 Safado(a): ${Math.floor(Math.random() * 100)}%
💼 Empresário(a): ${Math.floor(Math.random() * 100)}%
🦥 Vagabundo(a): ${Math.floor(Math.random() * 100)}%
😍 Lindo(a): ${Math.floor(Math.random() * 100)}%
 
✨🌟✨✨🌟✨✨🌟✨✨🌟✨`;
            conn.sendMessage(
              from,
              { image: { url: ppimg }, caption: dptr, mentions: [sender] },
              { quoted: selo }
            );
          } catch (e) {
            console.log(e);
          }
          break;

        case "conselhobiblico":
        case "conselhosbiblico":
        case "conselhosb":
        case "conselhob":
          var conselhosb =
            conselhob[Math.floor(Math.random() * conselhob.length)];
          jr = `${tempo} ${pushname} 

Conselhos Bíblico para você: 

- ${conselhosb} 

> Bot: ${NomeDoBot}
> Grupo: ${groupName}`;
          conn.sendMessage(
            from,
            { text: jr },
            { quoted: info, contextInfo: { mentionedJid: jr } }
          );
          break;

        //========(FUNÇÕES-PREMIUM-AQUI)=======\\

        case "mediafire":
          try {
            if (!q.includes("mediafire.com"))
              return reply(
                "Faltando o link do mediafire para download do arquivo, cade?"
              );
            ABC = await reqapi.mediafire(q.trim());
            reply(
              `Enviando: ${ABC.resultado[0].nama}\n\nPeso: ${ABC.resultado[0].size}`
            );
            conn
              .sendMessage(from, {
                document: { url: ABC.resultado[0].link },
                mimetype: "application/" + ABC.resultado[0].mime,
                fileName: ABC.resultado[0].nama,
              })
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        case "test":
          conn.sendMessage(from, {});
          break;

        case "ler":
        case "ocr":
        case "lerfoto":
          if (
            ((isMedia && !info.message.videoMessage) || isQuotedImage) &&
            !q.length <= 1
          ) {
            encmedia = isQuotedImage
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .imageMessage
              : info.message.imageMessage;
            rane = getRandom("." + (await getExtension(encmedia.mimetype)));
            buffimg = await getFileBuffer(encmedia, "image");
            fs.writeFileSync(rane, buffimg);
            media = rane;
            reply(Res_Aguarde);
            await recognize(media, { lang: "eng+ind", oem: 1, psm: 3 })
              .then((teks) => {
                reply(teks.trim());
                DLT_FL(media);
              })
              .catch((err) => {
                reply(err.message);
                DLT_FL(media);
              });
          } else {
            reply("Somente fotos!");
          }
          break;

        case "abrirgp":
          if (!isGroup)
            return reply("Somente sm grupo pode-se usar este comando.");
          if (!isGroupAdmins)
            return reply(
              "Somente adminstradores do grupo podem usar este comando."
            );
          if (!isBotGroupAdmins)
            return reply("O bot não é adminstrador do grupo.");
          if (!q)
            return reply(`Retorne após o comando o tempo em que o grupo abrirá, seguindo os exemplos:
${prefix + command} 12:00 _(horário exato)_
ou
${prefix + command} 4h _(daqui a 4 horas a frente)_`);
          letra = q.slice(q.length - 1, q.length).toLowerCase();
          if (letra == `s`) {
            nmr = Number(q.slice(0, q.length - 1));
            mention(
              `*Sucesso @${
                sender.split("@")[0]
              }, o grupo ${groupName} será aberto em ${q}* ✔`
            );
            setTimeout(async () => {
              conn.groupSettingUpdate(from, "not_announcement");
              await sleep(2500);
              conn.sendMessage(from, {
                text: `[❕] *O grupo foi aberto com sucesso após ${q}* ✔`,
              });
            }, nmr * 1000);
          } else {
            addOpenCloseGP(from, q, sender, `open`);
            last = getLastOpenCloseGP(from);
            day = last.dias;
            mention(
              `*Sucesso @${
                sender.split("@")[0]
              }, o grupo ${groupName} será aberto ${
                last.dias > 0
                  ? sendFutureTime([{ valor: last.dias, type: `days` }])
                      .toLowerCase()
                      .split(` `)[0] + ` `
                  : ``
              }às ${last.hora}* ✔`
            );
          }
          break;

        case "fechargp":
          if (!isGroup)
            return reply("Somente sm grupo pode-se usar este comando.");
          if (!isGroupAdmins)
            return reply(
              "Somente adminstradores do grupo podem usar este comando."
            );
          if (!isBotGroupAdmins)
            return reply("O bot não é adminstrador do grupo.");
          if (!q)
            return reply(`Retorne após o comando o tempo em que o grupo fechará, seguindo os exemplos:
${prefix + command} 12:00 _(horário exato)_
ou
${prefix + command} 4h _(daqui a 4 horas a frente)_`);
          letra = q.slice(q.length - 1, q.length).toLowerCase();
          if (letra == `s`) {
            nmr = Number(q.slice(0, q.length - 1));
            mention(
              `*Sucesso @${
                sender.split("@")[0]
              }, o grupo ${groupName} será fechado em ${q}* ✔`
            );
            setTimeout(async () => {
              conn.groupSettingUpdate(from, "announcement");
              await sleep(2500);
              conn.sendMessage(from, {
                text: `[❗] *O grupo foi fechado com sucesso após ${q}* ❌`,
              });
            }, nmr * 1000);
          } else {
            addOpenCloseGP(from, q, sender, `close`);
            last = getLastOpenCloseGP(from);
            day = last.dias;
            mention(
              `*Sucesso @${
                sender.split("@")[0]
              }, o grupo ${groupName} será fechado ${
                last.dias > 0
                  ? sendFutureTime([{ valor: last.dias, type: `days` }])
                      .toLowerCase()
                      .split(` `)[0] + ` `
                  : ``
              }às ${last.hora}* ⏱`
            );
          }
          break;

        case "startpaid":
        case "stoppaid":
          if (!isGroup) return reply("Somente em grupos");
          if (!isGroupAdmins)
            return reply("Somente os adminstradores do grupo!");
          horarios2 = getGroupInPaid(from);
          if (horarios2.start) {
            horarios2.start = false;
            savePaid();
            return reply(
              `O sistema de horários foi desativado com sucesso neste grupo 🐅`
            );
          } else {
            horarios2.start = true;
            savePaid();
            return reply(
              `O sistema de horários foi ativado com sucesso neste grupo 🐯`
            );
          }
          break;

        case "addhorarios":
        case "addhorario":
        case "addpaid":
          if (!isGroup) return reply("Somente em grupos");
          if (!isGroupAdmins)
            return reply("Somente os adminstradores do grupo!");
          if (!getGroupInPaid(from).start)
            return reply(
              `O sistema de horários está desativado... Caso queira usar, primeiro ligue eles usando ${prefix}startpaid 🐯`
            );
          if (!q)
            return reply(`Retorne após o comando o intervalo de tempo entre cada envio de slot, ex:
${prefix + command} 30m
ou
${prefix + command} 1h`);
          nmr = q.slice(0, q.length - 1);
          letra = q.slice(q.length - 1, q.length).toLowerCase();
          if (letra != `h` && letra != `m`)
            return reply(`Use apenas horas ou minutos, ex: 30m ou 1h`);
          if (!Number(nmr))
            return reply(`"${nmr}" precisa ser um número maior que zero`);
          addPaid(from, q);
          reply(`Horário pagante definido com sucesso 🐯`);
          break;

        case "fundohorario":
        case "fundohorarios":
        case "fundopaid":
          if (!isGroup) return reply("Somente em grupos");
          if (!isGroupAdmins)
            return reply("Somente os adminstradores do grupo!");
          if (!getGroupInPaid(from).start)
            return reply(
              `O sistema de horários está desativado... Caso queira usar, primeiro ligue eles usando ${prefix}startpaid 🐯`
            );
          ggip = getGroupInPaid(from);
          if (!q || Number(q) !== 0) {
            if (!isImage && !isQuotedImage)
              return reply(
                `Marque uma image com o comando ${prefix + command}`
              );
            try {
              getinfoimg = isQuotedImage
                ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                    .message.extendedTextMessage.contextInfo.message
                    .imageMessage
                : info.message.imageMessage;
              getfl = await getFileBuffer(getinfoimg, "image");
              //fs.writeFileSync(`./operacao/horarios/${from}.jpg`, getfl)
              uptele = await upload(getfl);
              ggip.fundoperso = true;
              ggip.url = uptele; //`./operacao/horarios/${from}.jpg`
              savePaid();
              return reply(
                `O fundo dos horários foi atualizado para ${uptele} com sucesso ✔`
              );
              //return reply(`O fundo dos horários foi atualizado com sucesso ✔`)
            } catch (e) {
              console.log(e);
              reply(`Não foi possível salvar a imagem... Tente novamente 🐯`);
            }
          } else {
            if (Number(q) === 0) {
              ggip.fundoperso = false;
              savePaid();
              rmGroupLinkInPaid(from);
              return reply(
                `O fundo personalizado dos horários foi deletado com sucesso ✔`
              );
            } else
              return reply(
                `Use ${
                  prefix + command
                } [marque uma imagem] para personalizar o fundo dos horários pagantes e ${
                  prefix + command
                } 0 para deletar a imagem salva.`
              );
          }
          break;

        case "rmhorarios":
        case "rmhorario":
        case "rmpaid":
          if (!isGroup) return reply("Somente em grupos");
          if (!isGroupAdmins)
            return reply("Somente os adminstradores do grupo!");
          if (!getGroupInPaid(from).start)
            return reply(
              `O sistema de horários está desativado... Caso queira usar, primeiro ligue eles usando ${prefix}startpaid 🐯`
            );
          if (!q)
            return reply(
              `Retorne após o comando o ID do horário pagante que você quer deletar`
            );
          if (!isIDinPaid(from, q))
            return reply("[❗] ID do usuário não encontrado ou inexistente ❌");
          rmPaid(from, q);
          reply(`Horário pagante deletado com sucesso 🐅`);
          break;

        case "listahorarios":
        case "listahorario":
        case "listpaid":
        case "paidlist":
          if (!isGroup) return reply("Somente em grupos");
          if (!isGroupAdmins)
            return reply("Somente os adminstradores do grupo!");
          if (!getGroupInPaid(from).start)
            return reply(
              `O sistema de horários está desativado... Caso queira usar, primeiro ligue eles usando ${prefix}startpaid 🐯`
            );
          horarios2 = getGroupInPaid(from).horarios;
          if (horarios2.length <= 0)
            return reply(`Não há horários pagantes definidos neste grupo 🐯`);
          reply(`🐯 *_Horários pagantes do grupo ${groupName}:_*
${horarios2
  .map(
    (i) => `🆔 *ID:* ${i.id}
⏳ *Intervalo de tempo:* ${String(i.nmr) + i.letra}
🍀 *Próximo horário:* ${i.tempo}`
  )
  .join(`\n\n`)}`);
          break;

        case "attgrouplink":
        case "atualizarfotoshorarios":
          if (!isGroup) return reply("Somente em grupos");
          if (!isGroupAdmins)
            return reply("Somente os adminstradores do grupo!");
          if (!getGroupInPaid(from).start)
            return reply(
              `O sistema de horários está desativado... Caso queira usar, primeiro ligue eles usando ${prefix}startpaid 🐯`
            );
          horarios3 = [];
          for (glp of groupLinkPaid) {
            if (!isJsonIncludes(horarios3, glp.id)) horarios3.push(glp);
          }
          saveJSON(horarios3, `./operacao/horarios/grouplink.json`);
          reply(`Database de fotos dos grupos/slots atualizada com sucesso 🐯`);
          await sleep(700);
          console.log(colors.green(`Restart necessário para save de dados..`));
          process.exit();
          break;

        case "attpaid":
        case "atualizarhorarios":
          if (!isGroup) return reply("Somente em grupos");
          if (!isGroupAdmins)
            return reply("Somente os adminstradores do grupo!");
          if (!getGroupInPaid(from).start)
            return reply(
              `O sistema de horários está desativado... Caso queira usar, primeiro ligue eles usando ${prefix}startpaid 🐯`
            );
          horarios4 = [];
          for (p of paidHours) {
            if (p.horarios.length > 0) horarios4.push(p);
          }
          saveJSON(horarios4, `./operacao/horarios/horarios.json`);
          saveJSON([], `./operacao/horarios/grouplink.json`);
          reply(`Pasta de slots limpa e atualizada com sucesso 🐯`);
          await sleep(700);
          console.log(colors.green(`Restart necessário para save de dados..`));
          process.exit();
          break;

        case "rvisu":
        case "open":
        case "revelar":
          try {
            RSMM =
              info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
            boij22 =
              RSMM?.imageMessage ||
              info.message?.imageMessage ||
              RSMM?.viewOnceMessageV2?.message?.imageMessage ||
              info.message?.viewOnceMessageV2?.message?.imageMessage ||
              info.message?.viewOnceMessage?.message?.imageMessage ||
              RSMM?.viewOnceMessage?.message?.imageMessage;
            boijj =
              RSMM?.videoMessage ||
              info.message?.videoMessage ||
              RSMM?.viewOnceMessageV2?.message?.videoMessage ||
              info.message?.viewOnceMessageV2?.message?.videoMessage ||
              info.message?.viewOnceMessage?.message?.videoMessage ||
              RSMM?.viewOnceMessage?.message?.videoMessage;
            boij33 =
              RSMM?.audioMessage ||
              info.message?.audioMessage ||
              RSMM?.viewOnceMessageV2?.message?.audioMessage ||
              info.message?.viewOnceMessageV2?.message?.audioMessage ||
              info.message?.viewOnceMessage?.message?.audioMessage ||
              RSMM?.viewOnceMessage?.message?.audioMessage;
            if (boijj) {
              px = boijj;
              px.viewOnce = false;
              px.video = { url: px.url };
              await conn.sendMessage(from, px, { quoted: info });
            } else if (boij22) {
              px = boij22;
              px.viewOnce = false;
              px.image = { url: px.url };
              await conn.sendMessage(from, px, { quoted: info });
            } else if (boij33) {
              px = boij33;
              px.viewOnce = false;
              px.audio = { url: px.url };
              await conn.sendMessage(from, px, { quoted: info });
            } else {
              return reply(
                "Por favor, *mencione uma imagem, video ou áudio em visualização única* para executar o comando."
              );
            }
          } catch (e) {
            console.error(e);
            await reply("Ocorreu um erro");
          }
          break;

        case "getquoted":
        case "getinfo":
        case "get":
          reply(
            JSON.stringify(
              info.message.extendedTextMessage.contextInfo,
              null,
              3
            )
          );
          break;

        case "get-txt":
          reply(
            JSON.stringify(
              info.message.extendedTextMessage.contextInfo.quotedMessage
                .conversation,
              null,
              2
            )
          );
          break;

        case "vrcpf":
        case "vr_cpf":
        case "vr-cpf":
          {
            try {
              conn.sendMessage(
                from,
                { image: { url: reqapi.vrcpf(q.trim()) } },
                { quoted: info }
              );
            } catch {
              return reply("Erro... 🥱");
            }
          }
          break;

        case "gerarcpf":
          cp1 = `${Math.floor(Math.random() * 300) + 600}`;
          cp2 = `${Math.floor(Math.random() * 300) + 600}`;
          cp3 = `${Math.floor(Math.random() * 300) + 600}`;
          cp4 = `${Math.floor(Math.random() * 30) + 60}`;
          cpf = `${cp1}.${cp2}.${cp3}-${cp4}`;
          conn.sendMessage(
            from,
            { text: `CPF gerado com sucesso : ${cpf}` },
            { quoted: info }
          );
          break;

        case "cep":
          try {
            if (!q.trim())
              return reply("digite o CEP que deseja buscar informações..");
            ABC = await reqapi.cep(q.trim());
            reply(`Cep: ${ABC.cep}\nRua: ${ABC.rua}\nComplemento:
${ABC.complemento}\nBairro: ${ABC.vizinhança}\nCidade: ${ABC.cidade}\nEstado:
${ABC.estado}\nGia: ${ABC.gia}\nIbge: ${ABC.ibge}\nddd: ${ABC.ddd}\nSiafi:
${ABC.siafi}`);
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        case "ddd":
          if (args.length < 1) return reply(`Use ${prefix + command} 62`);
          ddd = body.slice(5);
          ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);
          dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`;
          for (let i = 0; i < ddds.data.cities.length; i++) {
            dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n`;
          }
          conn.sendMessage(from, { text: dddlist }, { quoted: info });
          break;

        case "encurtalink":
          if (args.length < 1)
            return reply(
              `Exemplo:\n${prefix}encurtalink https://youtube.com/c/LadyBot𝘽𝙤𝙩`
            );
          try {
            link = args[0];
            anu = await axios.get(
              `https://tinyurl.com/api-create.php?url=${link}`
            );
            reply(`${anu.data}`);
          } catch (e) {
            emror = String(e);
            reply(`${e}`);
          }
          break;

        //===========(ADMS-FUNÇÕES-AKI)=========\\

        case "calculadora":
        case "calcular":
        case "calc":
          rsp = q
            .replace("x", "*")
            .replace('"', ":")
            .replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "")
            .replace("÷", "/");
          return reply(JSON.stringify(eval(rsp, null, "\t")));
          break;

        case "listatm":
          if (!SoDono) return reply(Res_SoDono);
          if (rgp.length == 0)
            return reply(
              `Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`
            );
          bl = "_-_-_-_-_-_-_-_-_-_-_-_-\n\n";
          for (i = 0; i < rgp.length; i++) {
            bl += `${i + 1} - ID: ${rgp[i].id}\n\n- NOME DO USUÁRIO OU GRUPO: ${
              rgp[i].infonome
            }\n\n`;
          }
          reply(bl);
          break;

        case "rgtm":
          if (!SoDono) return reply(Res_SoDono);
          if (JSON.stringify(rgp).includes(from))
            return reply(
              "Este grupo ja está registrado na lista de transmissão"
            );
          rgp.push({ id: from, infonome: `${isGroup ? groupName : pushname}` });
          fs.writeFileSync("./dados/org/json/TMGP.json", JSON.stringify(rgp));
          reply(
            "Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista."
          );
          break;

        case "tirardatm":
          if (!SoDono) return reply(Res_SoDono);
          if (!JSON.stringify(rgp).includes(from))
            return reply(
              "Este grupo não está registrado para ser tirado da lista de transmissão"
            );
          if (q.trim().length > 4) {
            var ustm = rgp.map((i) => i.id).indexOf(q.trim());
          } else {
            var ustm = rgp.map((i) => i.id).indexOf(from);
          }
          rgp.splice(ustm, 1);
          fs.writeFileSync("./dados/org/json/TMGP.json", JSON.stringify(rgp));
          reply("Grupo/Usuário tirado da lista de transmissão com sucesso");
          break;

        case "fazertm":
          if (!SoDono) return reply(Res_SoDono);
          if (rgp.lengh == 0)
            return reply(
              "Não contém nenhum grupo registrado para realizar transmissão"
            );
          await sleep(1000);
          let DFC = "";
          var rsm =
            info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
          var pink = isQuotedImage
            ? rsm?.imageMessage
            : info.message?.imageMessage;
          var blue = isQuotedVideo
            ? rsm?.videoMessage
            : info.message?.videoMessage;
          var red = isQuotedMsg ? rsm?.textMessage : info.message?.textMessage;
          var purple = isQuotedDocument
            ? rsm?.documentMessage
            : info.message?.documentMessage;
          var yellow = isQuotedDocW
            ? rsm?.documentWithCaptionMessage?.message?.documentMessage
            : info.message?.documentWithCaptionMessage?.message
                ?.documentMessage;
          var aud_d = isQuotedAudio ? rsm.audioMessage : "";
          var figu_d = isQuotedSticker ? rsm.stickerMessage : "";
          var red =
            isQuotedMsg &&
            !aud_d &&
            !figu_d &&
            !pink &&
            !blue &&
            !purple &&
            !yellow
              ? "Transmissão Do Dono: " + rsm.conversation
              : info.message?.conversation;
          var green =
            isQuotedMsg2 &&
            !aud_d &&
            !figu_d &&
            !red &&
            !pink &&
            !blue &&
            !purple &&
            !yellow
              ? "Transmissão Do Dono: " + rsm.extendedTextMessage?.text
              : info?.message?.extendedTextMessage?.text;
          if (pink) {
            DFC = pink;
            pink.caption =
              q.length > 1
                ? "Transmissão Do Dono: " + q
                : pink.caption.replace(
                    new RegExp(prefix + command, "gi"),
                    `TRANSMISSÃO DO DONO: ${NickDono}\n\n`
                  );
            pink.image = { url: pink.url };
          } else if (blue) {
            DFC = blue;
            blue.caption =
              q.length > 1
                ? "Transmissão Do Dono: " + q
                : blue.caption.replace(
                    new RegExp(prefix + command, "gi"),
                    `TRANSMISSÃO DO DONO: ${NickDono}\n\n`
                  );
            blue.video = { url: blue.url };
          } else if (red) {
            black = {};
            black.text = red.replace(
              new RegExp(prefix + command, "gi"),
              `TRANSMISSÃO DO DONO: ${NickDono}\n\n`
            );
            DFC = black;
          } else if (!aud_d && !figu_d && green) {
            brown = {};
            brown.text = green.replace(
              new RegExp(prefix + command, "gi"),
              `TRANSMISSÃO DO DONO: ${NickDono}\n\n`
            );
            DFC = brown;
          } else if (purple) {
            DFC = purple;
            purple.document = { url: purple.url };
          } else if (yellow) {
            DFC = yellow;
            yellow.caption =
              q.length > 1
                ? "Transmissão Do Dono: " + q
                : yellow.caption.replace(
                    new RegExp(prefix + command, "gi"),
                    `TRANSMISSÃO DO DONO: ${NickDono}\n\n`
                  );
            yellow.document = { url: yellow.url };
          } else if (figu_d) {
            DFC = figu_d;
            figu_d.sticker = { url: figu_d.url };
          } else if (aud_d) {
            DFC = aud_d;
            aud_d.audio = { url: aud_d.url };
          }
          for (i = 0; i < rgp.length; i++) {
            conn.sendMessage(rgp[i].id, DFC);
          }
          break;

        case "reviverqr":
          if (!SoDono && !isnit) return;
          exec("cd dados/QR && rm -rf pre-key* sender* session*");
          setTimeout(async () => {
            reply(
              "♻️ Ｒｅｉｎｉｃｉａｎｄｏ...✨ *Limpando cache e otimizando o sistema 💨⚡ Voltamos em instantes!*"
            );
            setTimeout(async () => {
              process.exit();
            }, 1200);
          }, 1000);
          break;

        case "sairgp":
          if (isGroup && !SoDono && !info.key.fromMe)
            return reply("Este comando só meu dono pode executar 🙄");
          try {
            conn.groupLeave(from);
          } catch (erro) {
            reply(String(erro));
          }
          break;

        case "seradm":
          if (!SoDono && !isnit)
            return reply(
              "Só dono pode executar este comando, tu está querendo roubar o grupo é seu ladrãozinho 🙄"
            );
          mentions(
            `@${sender2} Pronto mestre - Agora você é um administrador 🥰`,
            [sender],
            true
          );
          conn.groupParticipantsUpdate(from, [sender], "promote");
          break;

        case "sermembro":
          if (!SoDono && !isnit)
            return reply(
              "Só dono pode executar este comando seu tolinho rs,rs."
            );
          mentions(
            `@${sender2} ✨ Pronto - Mestre agora você é um membro comum e continua com seus poderes de ADM 🤩💫`,
            [sender],
            true
          );
          conn.groupParticipantsUpdate(from, [sender], "demote");
          break;

        //======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

        case "apresentar":
        case "apr":
          inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`;
          conn.sendMessage(from, { text: inff }, { quoted: selo });
          break;

        case "papof":
        case "regraspp":
          if (!isGroupAdmins) return reply(Res_SoAdm);
          txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`;
          conn.sendMessage(from, { text: txtz }, { quoted: selo });
          break;

        case "digt":
          bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
 ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
【✔】ʟᴏʟɪ🍭【✔】ɢᴀᴅᴏ🐃
【✔】ɢᴀʏ🏳️‍🌈 【✔】ʟᴇsʙɪᴄᴀ✂️
【✔】ᴠᴀᴅɪᴀ💄【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`;
          conn.sendMessage(from, { text: bla }, { quoted: selo });
          break;

        case "sairdogp":
          if (!SoDono) return reply(Res_SoDono);
          if (!q.trim())
            return reply(
              `Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`
            );
          var getGroups = await conn.groupFetchAllParticipating();
          var groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          var ingfoo = groups.map((v) => v);
          ingfoo.sort((a, b) => a[0] < b.length);
          try {
            conn.sendMessage(ingfoo[q].id, {
              text: `Irei sair do grupo venceu o mês. Adeus! Me contratar de novo eu gosto desse grupo,vocês são a minha família 😭\nEntrem em contato com meu dono chame ele 🥹 👇🏻\nhttps://wa.me/${numerodono_ofc}`,
            });
            setTimeout(() => {
              conn.groupLeave(ingfoo[q].id);
            }, 5000);
          } catch (erro) {
            reply("Erro.. 🙂");
          }
          reply(
            "Pronto mestrE!sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar 🙇🏻‍♀️"
          );
          break;

        case "listagp":
          {
            if (!SoDono && !isnit && !info.key.fromMe)
              return reply("❌️<SÓ MEU DONO>❌");
            let LinkDoGp;
            var getGroups = await conn.groupFetchAllParticipating();
            var groups = Object.entries(getGroups)
              .slice(0)
              .map((entry) => entry[1]);
            var ingfoo = groups.map((v) => v);
            ingfoo.sort((a, b) => a[0] < b.length);
            teks1 = `*LISTA DE GRUPOS*\n*Total de Grupos* : ${ingfoo.length}\n\n`;
            for (let i = 0; i < ingfoo.length; i++) {
              try {
                LinkDoGp = await conn.groupInviteCode(ingfoo[i].id);
              } catch {
                LinkDoGp = "Não foi possivel puxar.";
              }
              var isC = ingfoo[i].isCommunity;
              teks1 += `${
                isC ? "• *Comunidade*" : "• *Grupo*"
              }• : ${i}\n• É uma comunidade ? ${isC ? "Sim" : "Não"}\n${
                isC
                  ? ""
                  : `• Link Do Grupo: https://chat.whatsapp.com/${LinkDoGp}\n`
              }• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${
                ingfoo[i].id
              }\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000)
                .tz("America/Sao_Paulo")
                .format("DD/MM/YYYY HH:mm:ss")}\n${
                isC
                  ? ""
                  : `• *Total de Membros* : ${ingfoo[i].participants.length}\n`
              }\n${"-".repeat(25)}\n\n`;
            }
            reply(teks1);
          }
          break;

        case "atividade":
        case "atividades":
          try {
            if (!isGroupAdmins && !issupre && !ischyt) return reply(Res_SoAdm);
            if (!isGroup) return reply(Res_SoGrupo);
            var i6 = countMessage.map((i) => i.groupId).indexOf(from);
            if (i6 < 0) {
              return reply(
                "❌ O bot não tem dados de atividade deste grupo ainda."
              );
            }
            if (
              !countMessage[i6].numbers ||
              countMessage[i6].numbers.length === 0
            ) {
              return reply(
                "❌ Nenhuma atividade registrada neste grupo ainda."
              );
            }
            teks = `*Atividade dos membros do grupo:*\n\n`;
            const mentionArray = [];
            for (i = 0; i < countMessage[i6].numbers.length; i++) {
              var uscnt = countMessage[i6].numbers[i];
              if (uscnt && uscnt.id) {
                const participantNumber = uscnt.id.split("@")[0];
                mentionArray.push(uscnt.id);
                teks += `*• Membro:* @${participantNumber}\n*• Comandos:* ${
                  uscnt.cmd_messages || 0
                }*\n*• Mensagens:* ${uscnt.messages || 0}*\n*• Aparelho:* ${
                  uscnt.aparelho || "Desconhecido"
                }*\n\n----------------------------------\n\n`;
              }
            }
            conn.sendMessage(
              from,
              { text: teks.trim(), mentions: mentionArray },
              { quoted: info }
            );
          } catch (e) {
            console.log(e);
            reply("❌ Erro ao buscar atividades. Tente novamente.");
          }
          break;

        case "inativos":
        case "inativo":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (q.match(/[a-z]/i) || !q)
            return reply(
              `Exemplo: ${
                prefix + command
              } 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`
            );
          await LIMPARDOCNT_QUEMJASAIU();
          var i2 = countMessage?.map((x) => x.groupId)?.indexOf(from);
          blue = [];
          for (i of countMessage[i2].numbers) {
            if (i.messages <= q.trim())
              if (i.figus <= q.trim())
                if (i.cmd_messages <= q.trim())
                  if (!groupAdmins.includes(i.id))
                    if (
                      !numerodono.includes(i.id) &&
                      !numerodono.includes(i.phoneNumber)
                    )
                      if (i.id != botNumber)
                        if (groupMembers.map((i) => i.id).includes(i.id))
                          blue.push(i.id);
          }
          for (i of countMessage[i2].numbers) {
            if (!groupMembers.map((a) => a.id == i.id))
              if (i.id.length > 5) blue.push(i.id);
          }
          if (blue.length == 0)
            return reply(`Não tem pessoas com ${q}mensagens..`);
          bli = `Usuários com ${q.trim()} mensagem(ns) pra baixo..\n\n`;
          for (ac = 0; ac < blue.length; ac++) {
            bli += `${ac + 1} - _ Usuário: @${blue[ac].split("@")[0]}\n\n`;
          }
          mention(bli);
          break;

        case "forainativo":
        case "banghost":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isGroupAdmins) return reply(Res_SoDono);
          if (q.match(/[a-z]/i) || !q || q.length > 3)
            return reply(
              `Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${
                prefix + command
              } 0`
            );
          var i2 = countMessage?.map((x) => x.groupId)?.indexOf(from);
          blue = [];
          for (i of countMessage[i2].numbers) {
            if (i.messages <= Number(q.trim()))
              if (i.figus <= Number(q.trim()))
                if (i.cmd_messages <= Number(q.trim()))
                  if (!groupAdmins.includes(i.id))
                    if (
                      !numerodono.includes(i.id) &&
                      !numerodono.includes(i.phoneNumber)
                    )
                      if (i.id != botNumber)
                        if (groupMembers.map((i) => i.id).includes(i.id))
                          blue.push(i.id);
          }
          for (i of countMessage[i2].numbers) {
            if (!groupMembers.map((i) => i.id).includes(i.id))
              if (i.id.length > 5) blue.push(i.id);
          }
          if (blue.length == 0)
            return reply(
              `Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`
            );
          for (i = 0; i < blue.length; i++) {
            await sleep(1000);
            conn.groupParticipantsUpdate(from, [blue[i]], "remove");
          }
          break;

        case "nome-bot":
          if (!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono);
          NomeDoBot = q.trim();
          setting.NomeDoBot = q.trim();
          fs.writeFileSync(
            "./dados/settings.json",
            JSON.stringify(setting, null, 2)
          );
          reply(`O nome do seu bot foi alterado com sucesso para 😏 ${q}`);
          break;

        case "nick-dono":
          if (!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono);
          setting.NickDono = q.trim();
          NickDono = setting.NickDono;
          fs.writeFileSync(
            "./dados/settings.json",
            JSON.stringify(setting, null, 2)
          );
          reply(`O Nick Do Dono foi configurado para 😏 ${q}`);
          break;

        case "numero-dono":
          if (!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono);
          if (q.match(/[a-z]/i)) return reply("É apenas números..");
          reply(`O número dono foi configurado com sucesso para 😏 ${q}`);
          setting.numerodono = q
            .trim()
            .replace(new RegExp("[()+-/ +/]", "gi"), "");
          numerodono[0] = setting.numerodono;
          numerodn = setting.numerodono;
          numerodono_ofc = setting.numerodono;
          nmrdn_dono2 = setting.numerodono + SNET;
          fs.writeFileSync(
            "./dados/settings.json",
            JSON.stringify(setting, null, 2)
          );
          break;

        case "prefixo-bot":
        case "setprefix":
          if (args.length < 1) return;
          if (!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono);
          setting.prefix = q;
          fs.writeFileSync(
            "./dados/settings.json",
            JSON.stringify(setting, null, 2)
          );
          reply(`O prefixo foi alterado com sucesso para 😏 ${setting.prefix}`);
          break;

        case "fotomenu":
        case "fundomenu":
          if (!SoDono) return reply(Res_SoDono);
          if (!isQuotedImage) return reply("Marque uma imagem 😏");
          if (
            ((isMedia && !info.message.videoMessage) || isQuotedImage) &&
            !q.length <= 1
          ) {
            reply(
              `- Calma ae amigo(a), já estou trocando a foto do menu para você 😏`
            );
            boij = isQuotedImage
              ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo.message.imageMessage
              : info.message.imageMessage;
            owgi = await getFileBuffer(boij, "image");
            res = await reqapi.uploadDropbox(owgi);
            logoslink.logo.splice([]);
            fs.writeFileSync(
              "./dados/logos.json",
              JSON.stringify(logoslink, null, 2)
            );
            setTimeout(() => {
              logoslink.logo.push(res);
              fs.writeFileSync(
                "./dados/logos.json",
                JSON.stringify(logoslink, null, 2)
              );
              reply(
                `A foto do menu foi alterada com sucesso para 😏 ${logoslink.logo}`
              );
            }, 1200);
          } else {
            reply(
              `Mande uma imagem com o comando ${
                prefix + command
              } para trocar a foto de todos menu..`
            );
          }
          break;

        case "setprefixs":
          if (args.length < 1) return;
          if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
            return reply(Res_SoDono);
          prefix = args[0];
          setting.prefix = prefix;
          fs.writeFileSync(
            "./dados/settings.json",
            JSON.stringify(setting, null, 2)
          );
          reply(`O prefixo foi alterado com sucesso para 😏 ${prefix}`);
          break;

        case "nomegp":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          conn.groupUpdateSubject(from, `${body.slice(9)}`);
          conn.sendMessage(
            from,
            { text: "Sucesso, alterou o nome do grupo" },
            { quoted: info }
          );
          break;

        case "fotobot":
          if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
            return reply(Res_SoDono);
          if (!isQuotedImage)
            return reply(
              `Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`
            );
          buff = await getFileBuffer(
            info.message.extendedTextMessage.contextInfo.quotedMessage
              .imageMessage,
            "image"
          );
          conn.updateProfilePicture(botNumber, buff);
          reply("Obrigada pelo novo perfil 🥰");
          break;

        case "clonar":
          if (!SoDono && !isnit && !issupre && !ischyt)
            return reply("Você quem é o proprietário?");
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (args.length < 1)
            return reply(
              "Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @"
            );
          if (!menc_jid2[0] || menc_jid2[1])
            return reply(
              "Marque o @ do usuário para roubar a foto do perfil dele, para a do bot.."
            );
          let { jid, id, notify } = groupMembers.find(
            (x) => x.id === menc_jid2[0]
          );
          try {
            pp = await conn.profilePictureUrl(id);
            buffer = await getBuffer(pp);
            conn.updateProfilePicture(botNumber, buffer);
            mentions(
              `Foto do perfil atualizada com sucesso, usando a foto do perfil @${
                id.split("@")[0]
              }`,
              [id],
              true
            );
          } catch (e) {
            reply("Putz, deu erro, a pessoa deve estar sem foto 😔");
          }
          break;

        case "bcgp":
        case "bcgc":
          if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
            return reply(Res_SoDono);
          if (!isGroupAdmins) return reply(Res_SoAdm);
          if (!q.trim()) return reply("Cade o texto?");
          var nomor = info.participant;
          if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
            encmedia = await getFileBuffer(
              info.message.extendedTextMessage.contextInfo.quotedMessage
                .imageMessage,
              "image"
            );
            for (i = 0; i < groupMembers.length; i++) {
              await sleep(2000);
              conn.sendMessage(
                groupMembers[i].id,
                { image: buff },
                {
                  caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${
                    sender.split("@")[0]
                  }\nMensagem : ${body.slice(6)}`,
                }
              );
            }
            reply("Transmissão enviada..");
          } else {
            for (i = 0; i < groupMembers.length; i++) {
              await sleep(2000);
              sendMess(
                groupMembers[i].id,
                `*「 TRANSMISSÃO 」*\n\nGrupo : ${groupName}\n Número : wa.me/${
                  sender.split("@")[0]
                }\nMensagem : ${body.slice(6)}`
              );
            }
            reply("Grupo de transmissão bem-sucedido");
          }
          break;

        case "dono1":
          if (args.length < 1) return;
          if (!SoDono && !isnit && !issupre && !ischyt)
            return reply(Res_SoDono);
          nescessario.dono1 = q.trim().replaceAll("@", "");
          dono1 = nescessario.dono1;
          setNes(nescessario);
          reply(
            `Agora contem um segundo dono(a) alterado com sucesso para 😏 ${q}`
          );
          break;

        case "dono2":
          if (args.length < 1) return;
          if (!SoDono && !isnit && !issupre && !ischyt)
            return reply(Res_SoDono);
          nescessario.dono2 = q.trim().replaceAll("@", "");
          dono2 = nescessario.dono2;
          setNes(nescessario);
          reply(
            `Agora contem um segundo dono(a) alterado com sucesso para 😏 ${dono2}`
          );
          break;

        case "dono3":
          if (args.length < 1) return;
          if (!SoDono && !isnit && !issupre && !ischyt)
            return reply(Res_SoDono);
          nescessario.dono3 = q.trim().replaceAll("@", "");
          dono3 = nescessario.dono3;
          setNes(nescessario);
          reply(
            `Agora contem um terceiro dono(a) alterado com sucesso para 😏 ${dono3}`
          );
          break;

        case "dono4":
          if (args.length < 1) return;
          if (!SoDono && !isnit && !issupre && !ischyt)
            return reply(Res_SoDono);
          nescessario.dono4 = q.trim().replaceAll("@", "");
          dono4 = nescessario.dono4;
          setNes(nescessario);
          reply(
            `Agora contem um quarto dono(a) alterado com sucesso para 😏 ${dono4}`
          );
          break;

        case "dono5":
          if (args.length < 1) return;
          if (!SoDono && !isnit && !issupre && !ischyt)
            return reply(Res_SoDono);
          nescessario.dono5 = q.trim().replaceAll("@", "");
          dono5 = nescessario.dono5;
          setNes(nescessario);
          reply(
            `Agora contem um quinto dono(a) alterado com sucesso para 😏 ${dono5}`
          );
          break;

        case "dono6":
          if (args.length < 1) return;
          if (!SoDono && !isnit && !issupre && !ischyt)
            return reply(Res_SoDono);
          nescessario.dono6 = q.trim().replaceAll("@", "");
          dono6 = nescessario.dono6;
          setNes(nescessario);
          reply(
            `Agora contem um quinto dono(a) alterado com sucesso para 😏 ${dono6}`
          );
          break;

        case "getquoted":
          reply(
            JSON.stringify(
              info.message.extendedTextMessage.contextInfo,
              null,
              3
            )
          );
          break;

        case "donos":
          p = `[ 𝗗𝗢𝗡𝗢𝗦 𝗕𝗼𝘁 ${NomeDoBot} ] 

Dono Oficial do bot: ${numerodono_ofc}

- [ 1 ] ${dono1}\n- [ 2 ] ${dono2}\n- [ 3 ] ${dono3}\n- [ 4 ] ${dono4}\n- [ 5 ] ${dono5}\n- [ 6 ] ${dono6}`;
          reply(p);
          break;

        case "admins":
        case "listadmins":
        case "adms":
          if (!isGroup) return reply(Res_SoGrupo);
          ytb = `Lista de admins do grupo *${
            groupMetadata?.subject || "Não foi posssivel puxar o nome."
          }*\nTotal : ${groupAdmins.length}\n\n`;
          no = 0;
          for (let admon of groupAdmins) {
            no += 1;
            ytb += `[${no.toString()}] @${admon.split("@")[0]}\n`;
          }
          mentions(ytb, groupAdmins, true);
          break;

        case "criartabela":
        case "criartbl":
        case "criartab":
          if (!isGroupAdmins && !SoDono)
            return reply("Só adm ou dono pode utilizar este comando.");
          if (!q.trim())
            return reply("Digite o que deseja colocar na tabela do grupo..");
          msgz = args.join(" ");
          msgtmpol = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
          datinhaofc = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
          fs.writeFileSync(
            `./dados/org/json/TABELA/tabela-${from}.json`,
            JSON.stringify(
              { Horario: msgtmpol, Data: datinhaofc, Tabela: msgz },
              null,
              2
            )
          );
          reply(`Tabela do grupo foi criada com sucesso 😏`);
          break;

        case "tabelagp":
        case "tabeladogp":
        case "tabelinha":
          if (!fs.existsSync(`./dados/org/json/TABELA/tabela-${from}.json`)) {
            return reply(
              `Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela LadyBot linda: e etc ..`
            );
          }
          const tabelagpofc = JSON.parse(
            fs.readFileSync(`./dados/org/json/TABELA/tabela-${from}.json`)
          );
          blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`;
          mention(blity);
          break;

        case "ativo":
        case "on":
        case "voltei":
          if (!isGroupAdmins && !SoDono)
            return reply("Comando apenas para administradores ou dono..");
          if (DonoOficial) {
            if (
              fs.existsSync("./dados/org/json/afk-@" + numerodono_ofc + ".json")
            ) {
              DLT_FL("./dados/org/json/afk-@" + numerodono_ofc + ".json");
              reply("Bem vindo de volta, agora você está online 🙂");
            } else {
              reply("Você não registrou nenhuma mensagem de ausência 🥱");
            }
          } else if (isGroupAdmins) {
            if (!JSON.stringify(dataGp[0].ausentes).includes(sender))
              return reply("Não há nenhum registro de ausência sua 🥱");
            dataGp[0].ausentes.splice(
              dataGp[0].ausentes.map((x) => x.id).indexOf(sender),
              1
            );
            setGp(dataGp);
            reply("Registro de ausência tirada com sucesso 😏");
          }
          break;

        case "ausente":
        case "off":
        case "afk":
          if (!isGroupAdmins && !SoDono)
            return reply("Comando apenas para Adms e você não é um 🤨");
          if (DonoOficial) {
            msgtmp = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
            fs.writeFileSync(
              `./dados/org/json/afk-@${setting.numerodono.replace(
                new RegExp("[()+-/ +/]", "gi"),
                ""
              )}.json`,
              JSON.stringify(
                {
                  Ausente_Desde: msgtmp,
                  Motivo_Da_Ausência: q,
                },
                null,
                2
              )
            );
            reply(`Mensagem de ausência criada com sucesso 😏`);
          } else if (isGroupAdmins) {
            if (!q.trim())
              return reply(
                `Digite a mensagem de ausência, Exemplo: ${
                  prefix + command
                } Estou cagando 😏💩`
              );
            if (!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
              dataGp[0].ausentes.push({ id: sender, msg: q.trim() });
              setGp(dataGp);
              reply(
                "Mensagem de ausência criada com sucesso..\n\nSe deseja Desativar a mensagem de ausência use o comando ativo 😏"
              );
            } else {
              dataGp[0].ausentes[
                dataGp[0].ausentes.map((i) => i.id).indexOf(sender)
              ].msg = q.trim();
              setGp(dataGp);
              reply(
                "Mensagem de ausência alterada com sucesso..\n\nSe deseja Desativar a mensagem de ausência use o comando ativo"
              );
            }
          } else {
            return reply("Comando apenas para Adms e você não é um 🤨");
          }
          break;

        case "reagir":
          const reactionMessage = {
            react: {
              text: "💖",
              key: info.key,
            },
          };
          sendMsg = conn.sendMessage(from, reactionMessage);
          break;

        case "7addcmdgold":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          let [comando, gold] = q.trim().toLowerCase().split("/");
          comando.replace(prefix, "");
          if (comando && gold) {
            if (
              dataGp[0]?.comandos_gold?.length >= 1 &&
              dataGp[0].comandos_gold.some((i) => i.comando === comando)
            )
              return reply("Este comando, já encontra incluso na lista gold.");
            !dataGp[0]["comandos_gold"]
              ? (dataGp[0]["comandos_gold"] = [{ comando, gold }])
              : dataGp[0].comandos_gold.push({ comando, gold });
            setGp(dataGp);
            reply(
              `Comando -> ${comando} adicionado com sucesso na lista de comandos golds, que só vão ser executado com consumo gold, após usuários executar o comando.`
            );
          } else {
            return reply(
              `Faltando o(a) ${
                !comando ? "comando" : !q.trim().includes("/") ? "/" : "gold"
              }, Exemplo: ${
                prefix + command
              } play/3 *Este exemplo ele adicionará o comando play como um comando gold, que após ativar o ${prefix}sistemgold, só poderá ser usado consumindo gold do usuário que usar o comando, se não tiver gold, o usuário não terá como usar o comando play.`
            );
          }
          break;

        case "7rmcmdgold":
        case "7delcmdgold":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!q.trim()) return reply(`Exemplo: ${prefix + command} play`);
          q.trim().replace(prefix, "");
          if (
            !dataGp[0].comandos_gold.some(
              (i) => i.comando === q.trim().toLowerCase()
            )
          )
            return reply(
              "Este comando não se encontra na lista gold, então não é possível eu remover algo inexistente."
            );
          dataGp[0].comandos_gold.splice(
            dataGp[0].comandos_gold.findIndex(
              (i) => i.comando === q.trim().toLowerCase()
            ),
            1
          );
          setGp(dataGp);
          reply(
            `Comando -> ${q.trim()} tirado com sucesso da lista de comandos golds.`
          );
          break;

        case "addcmdpremium":
          if (!SoDono) return reply(Res_SoDono);
          if (nescessario.cmdpremium.includes(q.replace(prefix, "").trim()))
            return reply("Este comando já se encontra na lista premium.");
          if (!q.trim().includes("/")) {
            nescessario.cmdpremium.push(q.replace(prefix, "").trim());
          } else {
            var itens = q.split("/");
            for (i of itens) {
              if (nescessario.cmdpremium.includes(i))
                return reply(
                  `O comando ${i} já se encontra na lista premium, não pode adicionar novamente.`
                );
              nescessario.cmdpremium.push(i);
            }
          }
          cmdpremium = nescessario.cmdpremium;
          setNes(nescessario);
          reply(`Comandos adicionado para apenas usuarios premium usar.`);
          break;

        case "tirarcmdpremium":
        case "rmcmdpremium":
          if (!SoDono) return reply(Res_SoDono);
          if (!nescessario.cmdpremium.includes(q.replace(prefix, "").trim()))
            return reply(
              "Este comando não é premium, não esta na lista para ser tirado."
            );
          nescessario.cmdpremium.splice(
            nescessario.cmdpremium.indexOf(q.replace(prefix, "").trim()),
            1
          );
          cmdpremium = nescessario.cmdpremium;
          setNes(nescessario);
          reply(`Comando ${q.trim()} tirado da lista premium.`);
          break;

        case "cmdpremium":
          if (nescessario.cmdpremium.length == 0)
            return reply("Não contém nenhum comando na lista Premium");
          ABC = "Comandos Premium:\n\n";
          for (i of nescessario.cmdpremium) {
            ABC += `_- ${i}\n\n`;
          }
          reply(ABC);
          break;

        case "addpremium":
        case "renovarpremium":
          {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!SoDono && !info.key.fromMe) return reply(Res_SoDono);
            if (!menc_os2)
              return reply(
                "Marque o usuário do grupo ou digite o número do usuário ou marque a mensagem dele.."
              );
            const [usu, temp] = q_2.split("/");
            const tempORG = Math.floor(Date.now() / 1000);
            const tempo = temp?.includes("d")
              ? tempORG +
                1 * 60 * 60 * 24 * Math.floor(temp?.split("d")[0].trim())
              : temp?.includes("h")
              ? tempORG + 1 * 60 * 60 * Math.floor(temp?.split("h")[0].trim())
              : temp?.includes("m")
              ? tempORG + 1 * 60 * Math.floor(temp?.split("m")[0].trim())
              : false;
            if (!tempo)
              return reply(
                `Exemplo: ${prefix + command} @usuario/30d ou ${
                  prefix + command
                } /30d marcando a mensagem do usuário, use ${prefix}info addpremium para saber como usar.`
              );
            bla = premium.map((i) => i.usus).includes(menc_os2);
            if (bla) {
              const FCLT_RN =
                Math.floor(
                  premium[premium.findIndex((ab) => ab.usus === menc_os2)].tempo
                ) - tempORG;
              premium.find((i) => i.usus === menc_os2).tempo = Math.floor(
                FCLT_RN + tempo
              );
              fs.writeFileSync(
                "./dados/global/premium.json",
                JSON.stringify(premium)
              );
              reply(
                `Premium foi renovado, tempo anterior + tempo adicionado, até dias ou horas será acumulativo, não perderá nada, ficou com: ${kyun(
                  FCLT_RN + tempo - tempORG
                )}`
              );
            } else {
              premium.push({ usus: menc_os2, tempo: tempo });
              fs.writeFileSync(
                "./dados/global/premium.json",
                JSON.stringify(premium)
              );
              conn.sendMessage(
                from,
                {
                  text: `👑@${
                    menc_os2.split("@")[0]
                  } foi adicionado à lista de usuários premium com sucesso👑 ( Tempo: ${kyun(
                    tempo - tempORG
                  )} )`,
                  mentions: [menc_os2],
                },
                { quoted: info }
              );
            }
          }
          break;

        case "delpremium":
        case "rmpremium":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!SoDono && !info.key.fromMe) return reply(Res_SoDono);
          if (!marc_tds)
            return reply(
              "Marque o usuário do grupo ou digite o número do usuário ou marque a mensagem dele.."
            );
          console.log(premium, [
            marc_tds?.split("@")[0],
            marc_tds?.split("@")[0] + LID_NET,
          ]);
          if (
            !premium
              .map((i) => i.usus)
              .includes(marc_tds?.split("@")[0] + LID_NET)
          )
            return reply("*Este número não está incluso na lista premium..*");
          processo = premium.findIndex((a) =>
            [
              marc_tds?.split("@")[0],
              marc_tds?.split("@")[0] + LID_NET,
            ].includes(a.usus)
          );
          premium.splice(processo, 1);
          fs.writeFileSync(
            "./dados/global/premium.json",
            JSON.stringify(premium)
          );
          conn.sendMessage(
            from,
            {
              text: ` @${
                marc_tds.split("@")[0]
              } foi tirado da lista premium com sucesso..`,
              mentions: [marc_tds],
            },
            { quoted: info }
          );
          break;

        case "premiumlist":
        case "listapremium":
        case "premiumlista":
          {
            if (!SoDono && !info.key.fromMe) return reply(Res_SoDono);
            if (premium.length === 0)
              return reply(
                `A lista premium está vazia, use ${prefix}info addpremium para saber como funciona.`
              );
            let abc = "Lista de usuários premium global:\n\n";
            let tempo = Math.floor(Date.now() / 1000);
            for (let V = 0; V < premium.length; V++) {
              abc += ` - ( ${V} ): @${
                premium[V].usus.split("@")[0]
              }\n\n - Tempo para expirar: ${kyun(
                Math.floor(premium[V].tempo) - tempo
              )}\n\n${"-".repeat(35)}\n`;
            }
            mention(abc);
          }
          break;

        case "limpar":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`;
          conn.sendMessage(
            from,
            { text: clear },
            {
              quoted: selo,
              contextInfo: { forwardingScore: 500, isForwarded: true },
            }
          );
          break;

        case "d_":
          if (!isPremium) return reply("Apenas premium..");
          conn.sendMessage(from, {
            delete: {
              remoteJid: from,
              fromMe: false,
              id: info.message.buttonsResponseMessage.contextInfo.stanzaId,
              participant: botNumber,
            },
          });
          break;

        case "deletar":
        case "delete":
        case "apagar":
        case "d":
          if (!isGroupAdmins) return reply(Res_SoAdm);
          if (!menc_prt)
            return reply(
              "Marque a mensagem do fdp que deseja apagar, do bot ou de alguém.."
            );
          conn.sendMessage(from, {
            delete: {
              remoteJid: from,
              fromMe: false,
              id: info.message.extendedTextMessage.contextInfo.stanzaId,
              participant: menc_prt,
            },
          });
          break;

        case "fundobemvindo":
        case "fundobv":
          try {
            if (!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono);
            if (
              ((isMedia && !info.message.videoMessage) || isQuotedImage) &&
              !q.length <= 1
            ) {
              boij =
                isQuotedImage || isQuotedVideo
                  ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                      .message.extendedTextMessage.contextInfo.message
                      .imageMessage
                  : info;
              owgi = await getFileBuffer(boij, "image");
              res = await uploader.catbox(owgi);
              fundo1 = res;
              Links_P.fundo1 = res;
              fs.writeFileSync(
                "./dados/links.json",
                JSON.stringify(Links_P, null, 2)
              );
              reply(
                `A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`
              );
            } else {
              return reply(
                "Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok?"
              );
            }
          } catch {
            return reply(
              "Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? mas lembre-se, se não for mesmo, tente trocar a imagem ou o formato dela..."
            );
          }
          break;

        case "fundosaiu":
          if (!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono);
          try {
            if (
              ((isMedia && !info.message.videoMessage) || isQuotedImage) &&
              !q.length <= 1
            ) {
              boij =
                isQuotedImage || isQuotedVideo
                  ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                      .message.extendedTextMessage.contextInfo.message
                      .imageMessage
                  : info;
              owgi = await getFileBuffer(boij, "image");
              res = await uploader.catbox(owgi);
              fundo2 = res;
              Links_P.fundo2 = res;
              fs.writeFileSync(
                "./dados/links.json",
                JSON.stringify(Links_P, null, 2)
              );
              reply(
                `A imagem de saiu foi alterado com sucesso para: ${fundo2}`
              );
            } else {
              return reply(
                "Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok?"
              );
            }
          } catch {
            return reply(
              "Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? mas lembre-se, se não for mesmo, tente trocar a imagem ou o formato dela..."
            );
          }
          break;

        case "antiligar":
        case "antiligacao":
        case "antiligação":
          if (!SoDono) return reply(Res_SoDono);
          nescessario.anticall = !nescessario.anticall;
          setNes(nescessario);
          reply(
            nescessario.anticall
              ? `❗ATIVADO❗\nCaso alguém liguem serão bloqueado 🚫`
              : "❌DESATIVADO❌\nAnti ligação para o BOT 💢🤖💢"
          );
          break;

        case "antipv":
          if (!SoDono) return reply(Res_SoDono);
          nescessario.antipv = !nescessario.antipv;
          setNes(nescessario);
          reply(
            nescessario.antipv
              ? `❗️️️ATIVADO❗️️\n️Anti privado caso mandem mensagem Serão bloqueado 🚫`
              : "❌️DESATIVADO❌️\nAnti privado todos Podem usar o Bot no pv 🤖"
          );
          break;

        case "antipv2":
          if (!SoDono) return reply(Res_SoDono);
          nescessario.antipv2 = !nescessario.antipv2;
          setNes(nescessario);
          reply(
            nescessario.antipv2
              ? "*Alterado para modo antipv2, o pv não poderá ser utilizado, mas não bloquearei, só flodarei a cada mensagem 😏"
              : "*Antipv2 desligado, pv liberado, para a galera 🥳"
          );
          break;

        case "antipv3":
          if (!SoDono) return reply(Res_SoDono);
          nescessario.antipv3 = !nescessario.antipv3;
          setNes(nescessario);
          reply(
            nescessario.antipv3
              ? "*Anti Pv3 Ativado comn sucesso, irei ignorar todas mensagem recebida no privado, exceto: Dono e premium 😏"
              : "*Anti PV3 desligado, pv liberado, para a galera 🥳"
          );
          break;

        case "msgantipv":
          if (!SoDono) return reply(Res_SoDono);
          if (!q.trim()) return reply("KD a mensagem para eu por no antipv2");
          msgantipv1 = q.trim();
          nescessario.msgantipv1 = q.trim();
          setNes(nescessario);
          reply("Mensagem do antipv foi alterada.");
          break;

        case "msgantipv2":
          if (!SoDono) return reply(Res_SoDono);
          if (!q.trim()) return reply("KD a mensagem para eu por no antipv2");
          msgantipv2 = q.trim();
          nescessario.msgantipv2 = q.trim();
          setNes(nescessario);
          reply("Mensagem do antipv2 foi alterada.");
          break;

        case "block":
        case "bloquear":
        case "fora":
          if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
            return reply(Res_SoDono);
          var blcp =
            menc_jid2?.length === 1
              ? menc_jid2[0]
              : menc_prt
              ? menc_prt
              : q.trim()
              ? q.replace(new RegExp("[()+-/ @+/]", "gi"), "") + SNET
              : false;
          if (!menc_prt && !menc_jid2 && !q.trim())
            return reply(
              "Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar..."
            );
          var numblc = ban.indexOf(blcp);
          if (numblc >= 0) return reply("*Esse Número ja esta incluso*");
          ban.push(blcp);
          fs.writeFileSync("./dados/usuarios/banned.json", JSON.stringify(ban));
          susp = `🚫@${
            blcp.split("@")[0]
          } foi banido e não poderá mais usar os comandos do bot, em nenhum grupo ou privado.🚫`;
          conn.sendMessage(from, { text: susp, mentions: [blcp] });
          conn.updateBlockStatus(blcp, "block");
          break;

        case "unblock":
        case "desbloc":
        case "👉🏻":
          if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
            return reply(Res_SoDono);
          var blcp =
            menc_jid2?.length === 1
              ? menc_jid2[0]
              : menc_prt
              ? menc_prt
              : q.trim()
              ? q.replace(new RegExp("[()+-/ @+/]", "gi"), "") + SNET
              : false;
          if (!menc_prt && !menc_jid2 && !q.trim())
            return reply(
              "Marque o @ do fdp que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar..."
            );
          var numbl = ban.indexOf(blcp);
          if (numbl < 0) return reply("*Este fi de rapariga não está incluso*");
          processo = ban.indexOf(blcp);
          ban.splice(processo, 1);
          fs.writeFileSync("./dados/usuarios/banned.json", JSON.stringify(ban));
          susp = `@${
            blcp.split("@")[0]
          } Foi desbanido e poderá usar os comandos do Bot, se continuar a fazer bagunça será bloqueado de novo desgraça 🤬`;
          conn.sendMessage(from, { text: susp, mentions: [blcp] });
          conn.updateBlockStatus(blcp, "unblock");
          break;

        case "blocklist":
          jrc = "ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n";
          for (let benn of ban) {
            jrc += `~> @${benn.split("@")[0]}\n`;
          }
          jrc += `Total : ${ban.length}`;
          conn.sendMessage(from, { text: jrc.trim(), mentions: ban });
          break;

        case "acess":
          if (!SoDono && !isnit && !issupre && !ischyt)
            return reply(Res_SoDono);
          teks = body.slice(7);
          exec(teks, (err, stdout) => {
            if (err)
              return conn.sendMessage(
                from,
                { text: `root@LadyBot-BOT:~ ${err}` },
                { quoted: info }
              );
            if (stdout) {
              conn.sendMessage(from, { text: stdout });
            }
          });
          break;

        case "execut":
          if (!SoDono && !isnit && !issupre && !ischyt) return;
          try {
            return eval(`(async() => { ${args.join(" ")}})()`);
          } catch (e) {
            conn.sendMessage(from, { text: `${e}` });
          }
          break;

        case "exec":
          if (!SoDono && !isnit && !issupre && !ischyt) return;
          try {
            paramsQuoted =
              info.message.extendedTextMessage.contextInfo.quotedMessage
                .conversation ||
              info.message.extendedTextMessage.contextInfo.quotedMessage
                .extendedTextMessage.text;
            console.log(`[EXEC]~> ${paramsQuoted}`);
            return eval(`${paramsQuoted}`);
          } catch (e) {
            reply(e);
          }
          break;

        case "sender": {
          // ✅ Obtém o JID do remetente (lid atualizado)
          const jid = sender?.lid
            ? `${sender.lid}@s.whatsapp.net`
            : sender?.id
            ? sender.id
            : info.key.participant || info.key.remoteJid;

          // ✅ Texto visível (sem mostrar número)
          const msgText = `👤 Usuário: @${jid.split("@")[0]}`;

          // ✅ Envia com menção funcional
          await conn.sendMessage(
            from,
            {
              text: msgText,
              mentions: [jid],
            },
            { quoted: info }
          );
          break;
        }
        case "dados":
        case "ping":
          try {
            conn.sendMessage(from, { react: { text: "🖥️", key: info.key } });

            // Calcular métricas
            r = Date.now() / 1000 - info.messageTimestamp;
            uptime = process.uptime();

            // Horário de Brasília
            const horarioBrasilia = moment
              .tz("America/Sao_Paulo")
              .format("HH:mm:ss");
            const dataBrasilia = moment
              .tz("America/Sao_Paulo")
              .format("DD/MM/YYYY");

            // Consumo de RAM
            const usedMemory = (
              process.memoryUsage().heapUsed /
              1024 /
              1024
            ).toFixed(2);
            const totalMemory = (
              process.memoryUsage().heapTotal /
              1024 /
              1024
            ).toFixed(2);
            const percentMemory = (
              (process.memoryUsage().heapUsed /
                process.memoryUsage().heapTotal) *
              100
            ).toFixed(1);

            // Consumo de CPU (aproximado baseado no uptime)
            const cpuUsage = (process.cpuUsage().user / 1000000).toFixed(2);

            // Texto do comando ping
            const mensagemPing = `
╭━━⌈ ⏰ Horário de Brasília ⌋━━╮
┃ 🕐 Hora: ${horarioBrasilia}
┃ 📅 Data: ${dataBrasilia}
╰━━━━━━━━━━━━━━╯

╭━━⌈ 💻 Desempenho do Sistema ⌋━━╮
┃ 💾 RAM: ${usedMemory}MB / ${totalMemory}MB (${percentMemory}%)
┃ ⚙️ CPU: ${cpuUsage}s
┃ 🚀 Velocidade: ${String(r.toFixed(3))}s
┃ ⏱️ Uptime: ${kyun(uptime)}
╰━━━━━━━━━━━━━━╯
`;

            // Enviar mensagem com imagem
            await conn.sendMessage(
              from,
              {
                image: { url: "./logos/bronxys_ping.jpeg" },
                caption: mensagemPing,
                mentions: [sender],
              },
              { quoted: selo }
            );
          } catch (erro) {
            console.log("Erro no comando ping:", erro);
            conn.sendMessage(
              from,
              { text: "❌ Erro ao processar comando ping. Tente novamente." },
              { quoted: info }
            );
          }
          break;

        case "gtts":
          try {
            if (args.length < 1)
              return conn.sendMessage(
                from,
                {
                  text: `Cade o texto 🙄, digite algo Exemplo:\n${prefix}gtts PT LadyBot`,
                },
                { quoted: info }
              );
            const gtts = require("./dados/org/funcoes/gtts")(args[0]);
            if (args.length < 2)
              return conn.sendMessage(
                from,
                { text: "Falta colocar o código do idioma 🥱" },
                { quoted: info }
              );
            dtt = body.slice(8);
            ranm = getRandom(".mp3");
            rano = getRandom(".ogg");
            if (dtt.length > 200)
              return reply(
                "Para reduzir spam o máximo de letras permitidas são 200!"
              );
            gtts.save(ranm, dtt, function () {
              exec(
                `ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`,
                (err) => {
                  conn
                    .sendMessage(
                      from,
                      {
                        audio: fs.readFileSync(rano),
                        ptt: true,
                        mimetype: "audio/ogg; codecs=opus",
                      },
                      { quoted: info }
                    )
                    .catch((e) => {
                      return reply("Erro... 🥱");
                    });
                  DLT_FL(ranm);
                  DLT_FL(rano);
                }
              );
            });
          } catch {
            return reply("Erro... 🥱");
          }
          break;

        case "tagme":
          const tagme = `@${sender2} ✔️`;
          await mentions(tagme, [sender], true);
          break;

        case "blockcmd":
        case "bloqcmd":
        case "bloquearcmd":
        case "bloquearcomando":
          {
            if (Os_Returns(true, true, true).true)
              return reply(Os_Returns(true, true, true).txt);
            const q_A = q_2.replaceAll(
              command,
              "Não pode bloquear esse comando"
            );
            if (dataGp[0]?.comandosB?.includes(q_A))
              return reply("Este comando já está bloqueado.");
            !dataGp[0]["comandosB"]
              ? (dataGp[0]["comandosB"] = [q_A])
              : dataGp[0]["comandosB"].push(q_A);
            setGp(dataGp);
            reply(`O comando ${q_A} foi Bloqueado com sucesso.`);
          }
          break;

        case "blockcmdg":
        case "bloqcmdg":
        case "bloquearcmdg":
        case "bloquearcomandog":
          {
            if (!SoDono) return reply(Res_SoDono);
            const q_A = q_2.replaceAll(
              command,
              "Não pode bloquear esse comando"
            );
            if (bloq_global.includes(q_A))
              return reply("Este comando já está bloqueado.");
            bloq_global.push(q_A);
            fs.writeFileSync(
              "./dados/global/bloqueargb.json",
              JSON.stringify(bloq_global, null, 2)
            );
            reply(
              `O comando ${q_A} foi Bloqueado com sucesso para todos os grupos e privado.`
            );
          }
          break;

        case "unblockcmdg":
        case "desblockcmdg":
        case "unbloqcmdg":
        case "desbloqcmdg":
        case "desbloquearcmdg":
        case "desbloquearcomandog":
          {
            if (!SoDono) return reply(Res_SoDono);
            const q_A = q_2.replaceAll(
              command,
              "Não pode bloquear esse comando"
            );
            if (!bloq_global.includes(q_A))
              return reply("Este comando já está desbloqueado.");
            bloq_global.splice(bloq_global.indexOf(q_A), 1);
            fs.writeFileSync(
              "./dados/global/bloqueargb.json",
              JSON.stringify(bloq_global, null, 2)
            );
            reply(
              `O comando ${q_A} foi Desbloqueado com sucesso para todos os grupos e privado.`
            );
          }
          break;

        case "unblockcmd":
        case "desblockcmd":
        case "unbloqcmd":
        case "desbloqcmd":
        case "desbloquearcmd":
        case "desbloquearcomando":
          {
            if (Os_Returns(true, true, true).true)
              return reply(Os_Returns(true, true, true).txt);
            const q_A = q_2.replaceAll(
              command,
              "Não pode bloquear esse comando"
            );
            if (!dataGp[0]?.comandosB?.includes(q_A))
              return reply("Este comando já está desbloqueado.");
            dataGp[0]["comandosB"].splice(
              dataGp[0]["comandosB"].indexOf(q_A),
              1
            );
            setGp(dataGp);
            reply(`O comando ${q_A} foi Desbloqueado com sucesso.`);
          }
          break;

        case "listacomandos":
        case "listblockcmd":
        case "listablockcmd":
        case "comandosbloqueado":
        case "comandosblock":
        case "comandobloqueado":
          {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!dataGp[0]?.comandosB?.length > 0)
              return reply("Não contém nenhum comando bloqueado.");
            let bla = "";
            for (let V = 0; V < dataGp[0].comandosB.length; V++) {
              bla += `│ ${V}: ${dataGp[0].comandosB[V]}\n`;
            }
            conn.sendMessage(from, { text: bla }, { quoted: info });
          }
          break;

        case "listacomandosg":
        case "listblockcmdg":
        case "listablockcmdg":
        case "comandosbloqueadog":
        case "comandosblockg":
        case "comandobloqueadog":
          {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!bloq_global.length > 0)
              return reply("Não contém nenhum comando bloqueado.");
            let bla =
              "Comandos que estão bloqueado para todos os grupos e privado:\n\n";
            for (let V = 0; V < bloq_global.length; V++) {
              bla += `│ ${V}: ${bloq_global[V]}\n`;
            }
            conn.sendMessage(from, { text: bla }, { quoted: info });
          }
          break;

        case "avalie":
          const avalie = body.slice(8);
          if (args.length <= 1)
            return reply(
              `Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`
            );
          if (args.length >= 400)
            return conn.sendMessage(
              from,
              { text: "Máximo 400 caracteres" },
              { quoted: info }
            );
          var nomor = info.participant;
          tdptls = `[ Avaliação ]\nDe: wa.me/${
            sender.split(SNET)[0]
          }\n: ${avalie}`;
          conn.sendMessage(nmrdn, { text: tdptls }, { quoted: info });
          reply(
            "mensagem enviada ao meu dono, obrigada pela avaliação, iremos melhorar a cada dia."
          );
          break;

        case "bug":
          const bug = body.slice(5);
          if (args.length <= 1)
            return reply(
              `Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`
            );
          if (args.length >= 800)
            return conn.sendMessage(
              from,
              { text: "Máximo 800 caracteres" },
              { quoted: info }
            );
          var nomor = info.participant;
          teks1 = `[ Problema ]\nDe: wa.me/${
            sender.split(SNET)[0]
          }\nErro ou bug: ${bug}`;
          conn.sendMessage(nmrdn, { text: teks1 }, { quoted: info });
          reply(
            "mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot."
          );
          break;

        case "sugestão":
        case "sugestao":
          const sugestao = body.slice(10);
          if (args.length <= 1)
            return reply(
              `Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`
            );
          if (args.length >= 800)
            return conn.sendMessage(
              from,
              { text: "Máximo 800 caracteres" },
              { quoted: info }
            );
          var nomor = info.participant;
          sug = `[ Sugestões ]\nDe: wa.me/${
            sender.split(SNET)[0]
          }\n: ${sugestao}`;
          conn.sendMessage(nmrdn, { text: sug }, { quoted: info });
          reply(
            "mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões."
          );
          break;

        //==========(BAIXAR/PESQUISAS)==========\\

        case "grupos":
          {
            reply("Realizando ação, aguarde.");
            blue = await reqapi.grupos(q);
            let red = "Listagem de grupos para você:\n\n";
            blue.forEach(function (ab) {
              red += ` - Url do Grupo: ${ab.link}\n\n - Descrição: ${
                ab.desc
              }\n\n${"-".repeat(20)}\n\n`;
            });
            reply(red);
          }
          break;

        case "gimage":
          try {
            if (!q.trim()) return reply(`Exemplo: ${prefix + command} naruto`);
            ABC = await reqapi.gimage(q.trim());
            conn
              .sendMessage(from, {
                image: { url: ABC[Math.floor(Math.random() * ABC.length)].url },
              })
              .catch(() => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;
        case "pinterest":
          try {
            if (!q.trim()) return reply(`Exemplo: ${prefix + command} naruto`);
            ABC = await reqapi.pinterest(q.trim());
            conn
              .sendMessage(from, {
                image: { url: ABC[Math.floor(Math.random() * ABC.length)] },
              })
              .catch(() => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        case "triggered":
          try {
            if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
              boij = isQuotedImage
                ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                    .message.extendedTextMessage.contextInfo.message
                    .imageMessage
                : info.message.imageMessage;
              owgi = await getFileBuffer(boij, "image");
              link = await uploader.catbox(owgi);
              sendStickerFromUrl(from, reqapi.trigger(link));
            } else {
              reply("Marque uma imagem no WhatsApp...");
            }
          } catch {
            reply("Erro");
          }
          break;

        case "gerarlink":
        case "gerarlink2":
        case "imgpralink2":
          {
            try {
              if ((isMedia && info.message.imageMessage) || isQuotedImage) {
                reply(Res_Aguarde);
                var Fl =
                  info?.message?.extendedTextMessage?.contextInfo
                    ?.quotedMessage;
                var muk =
                  Fl?.viewOnceMessageV2?.message?.imageMessage ||
                  Fl?.viewOnceMessage?.message?.imageMessage ||
                  Fl?.imageMessage;
                let base64String = await getFileBuffer(muk, "image");
                var abcd = await reqapi.uploadDropbox(base64String);
                reply(`✅ Link da imagem gerado com sucesso:\n\n${abcd}`);
              } else {
                return reply(
                  "❌ Marque uma imagem, para que eu possa converter em link."
                );
              }
            } catch (error) {
              console.error("Erro no gerarlink2:", error);
              reply("❌ Erro ao gerar link da imagem. Tente novamente.");
            }
          }
          break;

        case "ytsearch":
          try {
            if (!q.trim())
              return reply(
                `Digite o nome de algum vídeo ou música que deseja encontrar..`
              );
            AB = await reqapi.ytsearch(q.trim());
            ABC = `${"-\t".repeat(13)}\n\n`;
            for (var i of AB) {
              ABC += `Titulo: ${i.titulo}\nUrl: ${i.url}\nTempo: ${i.tempo}\nPostado: ${i.postado}\n\nDescrição: ${i.desc}\n\n`;
              ABC += `${"-\t".repeat(13)}\n\n`;
            }
            reply(ABC);
          } catch (e) {
            return reply(`Erro... 🥱`);
          }
          break;

        case "votar_duelo":
        case "votar_combate":
          if (isGroup)
            return reply(
              `Este comando só deve ser utilizado em privado após a votação ser iniciada em algum grupo, lá terá o exemplo..`
            );
          var [nmr_v, id_g] = q.trim().split("/");
          if (!id_g)
            return reply(
              `Digite o comando ${prefix}votar no grupo que iniciou a votação para ver como votar no formato correto.`
            );
          if (!fs.existsSync(`./dados/org/json/DUELO/duelo_${id_g}.json`))
            return reply(`Nenhum duelo foi iniciado nesse grupo..`);
          var dl_JsOn = JSON.parse(
            fs.readFileSync(`./dados/org/json/DUELO/duelo_${id_g}.json`)
          );
          if (dl_JsOn.voto_usu1.includes(sender))
            return reply(
              "Você já votou em alguem, então não pode votar novamente."
            );
          if (dl_JsOn.voto_usu2.includes(sender))
            return reply(
              "Você já votou em alguem, então não pode votar novamente."
            );
          if (dl_JsOn.usu1 == nmr_v + "@s.whatsapp.net") {
            dl_JsOn.voto_usu1.push(sender);
          } else {
            dl_JsOn.voto_usu2.push(sender);
          }
          fs.writeFileSync(
            `./dados/org/json/DUELO/duelo_${id_g}.json`,
            JSON.stringify(dl_JsOn, null, 2)
          );
          reply(
            "Votou com sucesso, agora só aguardar terminar, para ver os resultados 🙂."
          );
          break;

        case "votar":
        case "como_votar":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!fs.existsSync(`./dados/org/json/DUELO/duelo_${from}.json`))
            return reply(`Nenhum duelo foi iniciado nesse grupo..`);
          reply("Como votar foi enviado no seu privado a explicação dos 2.");
          var dl_JsOn = JSON.parse(
            fs.readFileSync(`./dados/org/json/DUELO/duelo_${from}.json`)
          );
          conn.sendMessage(sender, {
            text: `Para votar no primeiro usario: 
Use o comando: ${setting.prefix}votar_duelo ${dl_JsOn.usu1}/${from} 

Para votar no segundo usuario:

Use o comando: ${setting.prefix}votar_duelo ${dl_JsOn.usu2}/${from} 
`,
          });
          break;

        case "zerar_duelo":
        case "zerar_combate":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isGroupAdmins) return reply("Apenas administrador..");
          if (!fs.existsSync(`./dados/org/json/DUELO/duelo_${from}.json`))
            return reply(`Nenhum duelo foi iniciado nesse grupo..`);
          DLT_FL(`./dados/org/json/DUELO/duelo_${from}.json`);
          reply("Duelo resetado / cancelado..");
          break;

        case "terminar_votacao":
          try {
            if (!isGroup) return reply(Res_SoGrupo);
            if (!isGroupAdmins) return reply("Apenas administrador..");
            if (!fs.existsSync(`./dados/org/json/DUELO/duelo_${from}.json`))
              return reply(`Nenhum duelo foi iniciado nesse grupo..`);
            dl_JsOn = JSON.parse(
              fs.readFileSync(`./dados/org/json/DUELO/duelo_${from}.json`)
            );
            if (dl_JsOn.voto_usu1.length == dl_JsOn.voto_usu2.length)
              return reply(`[ OBS ] - OS 2 USUARIOS TERMINARAM EMPATE, COM MESMA PONTUAÇÃO:

1: ${dl_JsOn.voto_usu1.length} Votos

2: ${dl_JsOn.voto_usu2.length} Votos

Então a decisão está na mão dos administradores, se vai refazer o duelo, ou decidir o ganhador de alguma fórma..`);
            let blak = `[ Ganhador: @${
              dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length
                ? dl_JsOn.usu1.split("@")[0]
                : dl_JsOn.usu2.split("@")[0]
            } ]\n\nUsuário _- 1 - @${
              dl_JsOn.usu1.split("@")[0]
            }\n\nQuantidade de votos: ${
              dl_JsOn.voto_usu1.length
            }\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\nUsuário _- 2 - @${
              dl_JsOn.usu2.split("@")[0]
            }\n\nQuantidade de votos: ${dl_JsOn.voto_usu2.length}\n`;
            try {
              pfimg = await conn.profilePictureUrl(
                `${
                  dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length
                    ? dl_JsOn.usu1.split("@")[0]
                    : dl_JsOn.usu2.split("@")[0]
                }@c.us`,
                "image"
              );
            } catch {
              pfimg = "https://telegra.ph/file/b5427ea4b8701bc47e751.jpg";
            }
            bl1 = await getBuffer(pfimg);
            bl_up = await uploader.catbox(bl1);
            blar = await getBuffer(
              `https://eruakorl.sirv.com/josival-aleatory/ganhador.jpg?text.0.text=${
                dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length
                  ? dl_JsOn.usu1.split("@")[0]
                  : dl_JsOn.usu2.split("@")[0]
              }&text.0.position.gravity=center&text.0.position.y=22%25&text.0.size=62&text.0.color=000000&text.0.font.family=Source%20Serif%20Pro&text.0.font.weight=700&text.0.font.style=italic`
            );
            bli = await uploader.catbox(blar);
            conn.sendMessage(from, {
              image: { url: reqapi.duelowin(bl_up, bli) },
              caption: blak,
              mentions: [dl_JsOn.usu1, dl_JsOn.usu2],
            });
          } catch {
            reply("Erro, tente novamente..");
          }
          U_S_US = `Usuarios que votou em: ${dl_JsOn.usu1.split("@")[0]}\n\n`;
          for (let i of dl_JsOn.voto_usu1) {
            U_S_US += `- ( https://wa.me/${i.split("@")[0]} )\n\n`;
          }

          U_S_US += `Usuarios que votou em: ${dl_JsOn.usu2.split("@")[0]}\n\n`;
          for (let i of dl_JsOn.voto_usu2) {
            U_S_US += `- ( https://wa.me/${i.split("@")[0]} )\n`;
          }
          conn.sendMessage(sender, { text: U_S_US });
          await setTimeout(() => {
            DLT_FL(`./dados/org/json/DUELO/duelo_${from}.json`);
          }, 30000);
          break;

        case "iniciar_votacao":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isGroupAdmins) return reply("Apenas administrador..");
          if (!fs.existsSync(`./dados/org/json/DUELO/duelo_${from}.json`))
            return reply(`Nenhum duelo foi iniciado nesse grupo..`);
          dl_JsOn = JSON.parse(
            fs.readFileSync(`./dados/org/json/DUELO/duelo_${from}.json`)
          );
          mention(`[ ATENÇÃO ] - Votação iniciada, prestem atenção.

@${dl_JsOn.usu1.split("@")[0]}
Para votar no primeiro usuario do duelo: 
https://wa.me/${botNumber.split("@")[0]}?text=${setting.prefix}votar_duelo%20${
            dl_JsOn.usu1.split("@")[0]
          }/${from}

@${dl_JsOn.usu2.split("@")[0]}
Para votar no segundo usuario do duelo:
https://wa.me/${botNumber.split("@")[0]}?text=${prefix}votar_duelo%20${
            dl_JsOn.usu2.split("@")[0]
          }/${from}`);
          break;

        case "duelo":
        case "combate":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isGroupAdmins) return reply("Apenas administrador..");
          try {
            TXTEX = `Olá, para iniciar o duelo, você precisa marcar 2 pessoas.\nExemplo: ${
              prefix + command
            } @fulano1 @fulano2.`;
            if (!menc_jid2 || menc_jid2?.length > 2) return reply(TXTEX);
            try {
              pfimg = await conn.profilePictureUrl(
                `${menc_jid2[0].split("@")[0]}@c.us`,
                "image"
              );
            } catch {
              pfimg = "https://telegra.ph/file/b5427ea4b8701bc47e751.jpg";
            }
            bl1 = await getBuffer(pfimg);
            bl_up = await uploader.catbox(bl1);
            try {
              pfimg2 = await conn.profilePictureUrl(
                `${menc_jid2[1].split("@")[0]}@c.us`,
                "image"
              );
            } catch {
              pfimg2 = "https://telegra.ph/file/b5427ea4b8701bc47e751.jpg";
            }
            bl2 = await getBuffer(pfimg2);
            bl_up2 = await uploader.catbox(bl2);
            gtb = await getBuffer(
              `https://eruakorl.sirv.com/josival-aleatory/vs.jpg?text.0.text=${
                menc_jid2[0].split("@")[0]
              }&text.0.position.gravity=southwest&text.0.position.x=6%25&text.0.position.y=-2%25&text.0.size=32&text.0.color=ff0000&text.0.font.family=Source%20Serif%20Pro&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=100&text.1.text=${
                menc_jid2[1].split("@")[0]
              }&text.1.position.x=-7%25&text.1.position.y=-2%25&text.1.size=32&text.1.color=0022ff&text.1.font.family=Source%20Serif%20Pro&text.1.font.weight=700&text.1.font.style=italic`
            );
            txtimg = await uploader.catbox(gtb);
            conn
              .sendMessage(from, {
                image: { url: reqapi.duelo(bl_up, bl_up2, txtimg) },
                caption: `[ ATENÇÃO ]:\n\n@${
                  menc_jid2[0].split("@")[0]
                }\n\t\t\t\t\t~ VS ~\n@${
                  menc_jid2[1].split("@")[0]
                }\n\n[ Combate iniciado ] - Respeitem os Combatentes. Os dois participantes irão combater no momento. Posteriormente um ADM vai iniciar a votação. Digitando: !iniciar_votação. Atenção a votação, avalie com responsabilidade. Não atrapalhem o momento do combate para não serem removidos.`,
                mentions: menc_jid2,
              })
              .catch((e) => {
                reply("Erro");
              });
            await sleep(1000);
            fs.writeFileSync(
              `./dados/org/json/DUELO/duelo_${from}.json`,
              JSON.stringify(
                {
                  usu1: menc_jid2[0],
                  usu2: menc_jid2[1],
                  iniciou: false,
                  voto_usu1: [],
                  voto_usu2: [],
                },
                null,
                2
              )
            );
          } catch (e) {
            reply("Erro, tente novamente..");
          }
          break;

        case "qc":
        case "fakechat":
          if (!q) return reply("Precisa digitar algo...");
          if (Os_Returns(true, false, false).true)
            return reply(Os_Returns(true, false, false).txt);
          if (budy2.includes("@"))
            return reply(
              "somente marcando uma mensagem ou fazendo sua própria sem marcar nada"
            );
          async function fkchat(nome, foto, mensagem) {
            try {
              let jsonstik = {
                type: "quote",
                format: "image",
                backgroundColor: "#1f2c34",
                width: 512,
                height: 768,
                scale: 2,
                messages: [
                  {
                    entities: [],
                    avatar: true,
                    from: {
                      id: 1,
                      name: nome || "Desconhecido",
                      photo: { url: foto },
                    },
                    text: mensagem,
                    replyMessage: {},
                  },
                ],
              };
              await axios
                .post("https://bot.lyo.su/quote/generate", jsonstik)
                .then((res) => {
                  resultx = res.data.result;
                });
              return resultx;
            } catch (error) {
              throw new Error(error);
            }
          }
          try {
            ppimg8 = await conn.profilePictureUrl(menc_os2 ? menc_os2 : sender);
          } catch {
            ppimg8 = "https://telegra.ph/file/2a7516ef21d72cf8d9452.jpg";
          }
          try {
            reply(Res_Aguarde);
            if (menc_os2) {
              axps = countMessage
                .find((i) => i.groupId === from)
                .numbers.find((i) => i.id === menc_os2).nick;
            } else {
              axps = pushname;
            }
            ab = await fkchat(axps, ppimg8, q);
            base64ss = `data:image/jpeg;base64,${ab.image.toString("base64")}`;
            mantap = await convertSticker(base64ss, axps, NomeDoBot);
            stiti = Buffer.from(mantap, "base64");
            await delay(1000);
            await conn
              .sendMessage(from, { sticker: stiti })
              .catch(() => reply("Erro!"));
          } catch (e) {
            console.log(e);
            reply("Erro!");
          }
          break;

        case "kwai":
          {
            if (!q.trim().includes("kwai"))
              return reply(`Exemplo: ${prefix + command} LINK DO KWAI`);
            reply(Res_Aguarde);
            try {
              conn.sendMessage(
                from,
                {
                  video: { url: reqapi.kwai_mp4(q.trim()) },
                  mimetype: "video/mp4",
                },
                { quoted: info }
              );
            } catch {
              return reply("Erro... 🥱");
            }
          }
          break;

        case "ifunny":
          {
            if (!q.trim())
              return reply(
                `Faltando link do ifunny, Exemplo: https://br.ifunny.co/video/w9Eaa2bOB?s=cl`
              );
            try {
              conn.sendMessage(
                from,
                {
                  video: { url: reqapi.ifunny_mp4(q.trim()) },
                  mimetype: "video/mp4",
                },
                { quoted: info }
              );
            } catch (e) {
              console.log(e);
              reply("Erro... 🥱");
            }
          }
          break;

        case "spotify":
          {
            if (!q.trim().includes("spotify"))
              return reply(
                `Cadê a url do spotiy? exemplo: ${
                  prefix + command
                } https://open.spotify.com/intl-pt/track/4m3mrHuttXhK58f6Tenai1\nNão baixo playlist, quiser pegar o link da música, acessa o site: https://open.spotify.com/search e pesquisa lá.`
              );
            reply(Res_Aguarde);
            try {
              conn
                .sendMessage(
                  from,
                  {
                    audio: { url: reqapi.spotify_mp3(q.trim()) },
                    mimetype: "audio/mpeg",
                  },
                  { quoted: info }
                )
                .catch(() => reply("Erro!"));
            } catch {
              return reply("Erro... 🥱");
            }
          }
          break;

        case "horarios":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isGroupAdmins) return reply(Res_SoAdm);
          try {
            data = await fetchJson(
              `https://api.sabrinabot.xyz/api/outros/horarios-pagantes?apikey=@mosca_virus`
            );
            resultado = data.resultado.schedules
              .map((v, index) => {
                times = v.times.map((v2, index2) => `\t${v2}`).join("\n");
                return `${v.name}\n${times}`;
              })
              .join("\n\n");
            await reply(
              `HORARIO PAGANTE DAS ${moment
                .tz("America/Sao_Paulo")
                .format("HH")}:00\n\n${resultado}`
            );
          } catch (error) {
            return reply("Horários não disponíveis!");
          }
          break;

        case "sorte":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          porc = Math.floor(Math.random() * 100);
          await reply(
            `${tempo}, *${pushname}*, Sua sorte hoje está com a seguinte porcentagem:☛ *${porc}%* 😏🍀`
          );
          break;

        // CASE PLAY / PLAY2 – Áudio 🎧
        case "play":
        case "play2":
          conn.sendMessage(from, { react: { text: "🎯", key: info.key } });
          try {
            if (!q.trim())
              return reply(
                `🎵 Exemplo: ${prefix}play nome da música\n\nA música será baixada automaticamente. Se não funcionar, o YouTube pode ter restringido o download.`
              );
            reply(Res_Aguarde);
            data = await reqapi.ytsearch(q.trim());
            if (data[0]?.tempo?.length >= 7)
              return reply(
                "🚫 O áudio é muito longo. Tente algo com menos de 1 hora."
              );

            var N_E = "Não encontrado.";
            var bla = `
🎧 𝗕𝗔𝗜𝗫𝗔𝗡𝗗𝗢 𝗦𝗨𝗔 𝗠𝗨́𝗦𝗜𝗖𝗔...

🎶 Título: ${data[0]?.titulo || N_E}
⏱️ Duração: ${data[0]?.tempo || N_E}
📅 Postado: ${data[0]?.postado || N_E}
📝 Descrição: ${data[0]?.desc || N_E}
> ▶︎ •၊၊||၊|။||||။‌‌‌‌၊|• 0:10  

💡 Para vídeo: ${prefix}playmp4 ${q.trim()}
📄 Para documento: ${prefix}playdoc ${q.trim()}
    `;

            conn.sendMessage(
              from,
              {
                image: { url: data[0]?.thumb || logoslink.logo },
                caption: bla.trim(),
              },
              { quoted: info }
            );

            conn
              .sendMessage(
                from,
                {
                  audio: {
                    url:
                      command === "play2"
                        ? reqapi.play2(q.trim(), true)
                        : reqapi.play(q.trim(), true),
                  },
                  mimetype: "audio/mpeg",
                  fileName: data[0]?.titulo || "play.mp3",
                },
                { quoted: info }
              )
              .catch(() => reply("⚠️ Erro ao enviar o áudio."));
          } catch {
            reply(
              "😿 A API de músicas está em reparos. Tente novamente mais tarde."
            );
          }
          break;

        // CASE PLAYDOC – Documento 📄
        case "playdoc":
          try {
            if (!q.trim())
              return reply(
                `📄 Exemplo: ${prefix}playdoc nome da música\n\nO áudio será baixado em formato de documento.`
              );

            data = await reqapi.ytsearch(q.trim());
            if (data[0]?.tempo?.length >= 7)
              return reply(
                "🚫 O arquivo é muito longo. Tente algo menor que 1 hora."
              );

            var N_E = "Não encontrado.";
            var bla = `
📄 𝗕𝗔𝗜𝗫𝗔𝗡𝗗𝗢 𝗦𝗘𝗨 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗢...

🎶 Título: ${data[0]?.titulo || N_E}
⏱️ Duração: ${data[0]?.tempo || N_E}
📅 Postado: ${data[0]?.postado || N_E}
📝 Descrição: ${data[0]?.desc || N_E}
> ▶︎ •၊၊||၊|။||||။‌‌‌‌၊|• 0:10  

💡 Para vídeo: ${prefix}playmp4 ${q.trim()}
🎧 Para áudio: ${prefix}play ${q.trim()}
    `;

            conn.sendMessage(
              from,
              {
                image: { url: data[0]?.thumb || logoslink.logo },
                caption: bla.trim(),
              },
              { quoted: info }
            );

            conn
              .sendMessage(
                from,
                {
                  document: { url: reqapi.play(q.trim(), true) },
                  mimetype: "audio/mpeg",
                  fileName: data[0]?.titulo || "play.mp3",
                },
                { quoted: info }
              )
              .catch(() => reply("⚠️ Erro ao enviar documento."));
          } catch {
            reply(
              "❌ Seja mais específico, não foi possível encontrar o resultado."
            );
          }
          break;

        // CASE PLAYMP4 / PLAY_VIDEO – Vídeo 🎬
        case "playmp4":
        case "play_video":
          try {
            if (!q.trim())
              return reply(
                `🎬 Exemplo: ${prefix}playmp4 nome da música\n\nO vídeo será baixado automaticamente.`
              );

            reply(Res_Aguarde);
            data = await reqapi.ytsearch(q.trim());
            if (data[0]?.tempo?.length >= 7)
              return reply(
                "🚫 O vídeo é muito longo. Escolha um com menos de 1 hora."
              );

            var N_E = "Não encontrado.";
            var bla = `
🎬 𝗕𝗔𝗜𝗫𝗔𝗡𝗗𝗢 𝗦𝗘𝗨 𝗩𝗜́𝗗𝗘𝗢...

🎶 Título: ${data[0]?.titulo || N_E}
⏱️ Duração: ${data[0]?.tempo || N_E}
📅 Postado: ${data[0]?.postado || N_E}
📝 Descrição: ${data[0]?.desc || N_E}
> ▶︎ •၊၊||၊|။||||။‌‌‌‌၊|• 0:10  

💡 Para áudio: ${prefix}play ${q.trim()}
📄 Para documento: ${prefix}playdoc ${q.trim()}
    `;

            conn.sendMessage(
              from,
              {
                image: { url: data[0]?.thumb || logoslink.logo },
                caption: bla.trim(),
              },
              { quoted: info }
            );

            conn
              .sendMessage(
                from,
                {
                  video: { url: reqapi.play(q.trim(), false) },
                  mimetype: "video/mp4",
                  fileName: data[0]?.titulo || "play.mp4",
                },
                { quoted: info }
              )
              .catch(() => reply("⚠️ Erro ao enviar o vídeo."));
          } catch {
            reply("❌ Não foi possível encontrar esse vídeo. Tente novamente.");
          }
          break;

        // DOWNLOADS
        case "ytmp4":
        case "play_mp4":
          try {
            if (!q.trim())
              return reply(`Exemplo: ${prefix + command} link ou nome`);
            reply(Res_Aguarde);
            data = await reqapi.ytsearch(q.trim());
            conn
              .sendMessage(
                from,
                {
                  video: { url: reqapi.play(q.trim(), false) },
                  mimetype: "video/mp4",
                  fileName: data[0]?.titulo || "play.mp4",
                },
                { quoted: info }
              )
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;
        case "play_audio":
        case "ytmp3":
        case "playaudio":
        case "playmp3":
          conn.sendMessage(from, { react: { text: "🤹🏻‍♀️", key: info.key } });
          try {
            if (!q.trim())
              return reply(`Exemplo: ${prefix + command} link ou nome 😼`);
            reply(Res_Aguarde);
            data = await reqapi.ytsearch(q.trim());
            conn
              .sendMessage(
                from,
                {
                  audio: { url: reqapi.play(q.trim(), true) },
                  mimetype: "audio/mpeg",
                  fileName: data[0]?.titulo,
                },
                { quoted: info }
              )
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;
        case "tiktok_video":
        case "tiktok":
          try {
            if (!q.trim())
              return reply(`Exemplo: ${prefix + command} link do Tiktok`);
            reply(Res_Aguarde);
            conn
              .sendMessage(
                from,
                {
                  video: { url: reqapi.tiktok(q.trim()) },
                  mimetype: "video/mp4",
                  caption: `Se deseja baixar em formato audio, use o comando: ${prefix}tiktok_audio ${q.trim()}`,
                },
                { quoted: info }
              )
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;
        case "tiktok_audio":
          try {
            if (!q.trim())
              return reply(`Exemplo: ${prefix + command} link do Tiktok`);
            reply(Res_Aguarde);
            conn
              .sendMessage(
                from,
                {
                  audio: { url: reqapi.tiktok(q.trim()) },
                  mimetype: "audio/mpeg",
                },
                { quoted: info }
              )
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;
        case "face_video":
        case "facebook":
          try {
            if (!q.trim())
              return reply(`Exemplo: ${prefix + command} o link do Facebook`);
            reply(Res_Aguarde);
            conn
              .sendMessage(from, {
                video: { url: reqapi.facebook(q.trim(), false) },
                mimetype: "video/mp4",
                caption: `Se deseja baixar em formato audio, use o comando: ${prefix}face_audio ${q.trim()}`,
              })
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;
        case "face_audio":
          try {
            if (!q.trim())
              return reply(`Exemplo: ${prefix + command} o link do Facebook`);
            reply(Res_Aguarde);
            conn
              .sendMessage(from, {
                audio: { url: reqapi.facebook(q.trim(), true) },
                mimetype: "audio/mpeg",
              })
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;
        case "twitter_video":
        case "twitter":
          try {
            if (!q.trim())
              return reply(`Exemplo: ${prefix + command} o link do Twitter`);
            reply(Res_Aguarde);
            conn
              .sendMessage(from, {
                video: { url: reqapi.twitter(q.trim(), false) },
                mimetype: "video/mp4",
                caption: `Se deseja baixar em formato audio, use o comando: ${prefix}twitter_audio ${q.trim()}`,
              })
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;
        case "twitter_audio":
          try {
            if (!q.trim())
              return reply(`Exemplo: ${prefix + command} o link do Twitter`);
            reply(Res_Aguarde);
            conn
              .sendMessage(from, {
                audio: { url: reqapi.twitter(q.trim(), true) },
                mimetype: "audio/mpeg",
              })
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;
        case "insta_video":
        case "instagram":
          try {
            if (q.length < 5)
              return reply(`Exemplo: ${prefix + command} o link`);
            reply("Realizando ação..");
            ABC = await reqapi.instagram(q.trim());
            let DM_T = ABC.msg[0].type;
            var A_T =
              DM_T === "mp4"
                ? "video/mp4"
                : DM_T === "webp"
                ? "image/webp"
                : DM_T === "jpg"
                ? "image/jpeg"
                : DM_T === "mp3"
                ? "audio/mpeg"
                : "video/mp4";
            conn
              .sendMessage(
                from,
                {
                  [A_T.split("/")[0]]: { url: ABC.msg[0].url },
                  mimetype: A_T,
                  caption: `Se deseja baixar no formato áudio, use o comando: ${prefix}insta_audio ${q.trim()}`,
                },
                { quoted: info }
              )
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;
        case "insta_audio":
          try {
            if (!q.trim()) return reply(`Exemplo: ${prefix + command} o link`);
            ABC = await reqapi.instagram(q.trim());
            reply(Res_Aguarde);
            let DM_T = ABC.msg[0].type;
            var A_T =
              DM_T === "webp"
                ? "image/webp"
                : DM_T === "jpg"
                ? "image/jpeg"
                : DM_T === "mp3"
                ? "audio/mpeg"
                : "audio/mpeg";
            conn
              .sendMessage(
                from,
                { [A_T.split("/")[0]]: { url: ABC.msg[0].url }, mimetype: A_T },
                { quoted: info }
              )
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        case "bc":
        case "bcgroup":
        case "transmitir":
        case "transmissão":
          {
            if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
              return reply(Res_SoDono);
            if (!q.trim())
              return reply(
                `Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `
              );
            let getGroups = await conn.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
              .slice(0)
              .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            for (i = 0; i < anu.length; i++) {
              await sleep(1500);
              let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`;
              conn.sendMessage(anu[i], { text: txt });
            }
            reply(`Enviando com sucesso `);
          }
          break;

        case "celular":
          try {
            if (!q.trim())
              return reply(`Exemplo: ${prefix + command} galaxy a71 2020`);
            reply(Res_Aguarde);
            ABC = await reqapi.celular(q.trim());
            reply(
              `📱 Celular: ${
                ABC?.celular || "Não encontrado"
              }\n\nInformações:\n${
                ABC?.resumo ||
                ABC?.infoc ||
                "Não encontrado, seja mais específico, a marca e a versão"
              }`
            );
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        case "join":
        case "entrar":
          if (!SoDono) return reply(Res_SoDono);
          var string = args.join(" ");
          if (!string)
            return reply("Insira um link de convite ao lado do comando.");
          if (
            string.includes("chat.whatsapp.com/") ||
            reply("Ops, verifique o link que você inseriu.")
          ) {
            link = string.split("app.com/")[1];
            try {
              conn.groupAcceptInvite(`${link}`);
            } catch (erro) {
              if (String(erro).includes("resource-limit")) {
                reply("O grupo já está com o alcance de 1.024 membros.");
              }
              if (String(erro).includes("not-authorized")) {
                reply("Não foi possível entrar no grupo.\nMotivo: Banimento.");
              }
            }
          }
          break;

        case "antidocumento":
        case "antidoc":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          dataGp[0].antidoc = !dataGp[0].antidoc;
          setGp(dataGp);
          reply(
            dataGp[0]?.antidoc
              ? "🌀 𝘼𝙏𝙄𝙑𝙊𝙐 🌀\nCom sucesso (𝙖𝙣𝙩𝙞-𝙙𝙤𝙘𝙪𝙢𝙚𝙣𝙩𝙤)Neste grupo 📚✍🏻"
              : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nCom sucesso (𝙖𝙣𝙩𝙞-𝙙𝙤𝙘𝙪𝙢𝙚𝙣𝙩𝙤)Neste grupo 📚✍🏻"
          );
          break;

        case "antictt":
        case "anticontato":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          dataGp[0].antictt = !dataGp[0].antictt;
          setGp(dataGp);
          reply(
            dataGp[0]?.antictt
              ? "🌀 𝘼𝙏𝙄𝙑𝙊𝙐 🌀\nCom sucesso o recurso de (𝙖𝙣𝙩𝙞-𝙘𝙤𝙣𝙩𝙖𝙩𝙤)Neste grupo 🎯"
              : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nCom sucesso o recurso de (𝙖𝙣𝙩𝙞-𝙘𝙤𝙣𝙩𝙖𝙩𝙤)Neste grupo 🎯"
          );
          break;

        case "dononogrupo":
          if (!SoDono) return reply(Res_SoDono);
          nescessario.EstaNogrupo = !nescessario.EstaNogrupo;
          setNes(nescessario);
          reply(
            nescessario?.EstaNogrupo
              ? "🌀 𝘼𝙏𝙄𝙑𝙊𝙐 🌀\nCom sucesso o recurso,agora o bot só vai funcionar se você estiverno grupo 😏"
              : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nCom sucesso o recurso,de o bot só funcionar quando você estiver no grupo 🥱"
          );
          break;

        case "antilinkhard":
        case "x9":
        case "antiloc":
        case "antiaudio":
        case "antivideo":
        case "antifake":
        case "antilink":
        case "antilinkgp":
        case "antisticker":
        case "antiimg":
          {
            if (Os_Returns(true, true, true).true)
              return reply(Os_Returns(true, true, true).txt);
            if (command === "antilink") {
              command = "antilinkhard";
            }
            dataGp[0][command] = !dataGp[0][command];
            setGp(dataGp);
            reply(
              dataGp[0][command]
                ? `🌀 𝘼𝙏𝙄𝙑𝙊𝙐 🌀\nCom sucesso o recurso de *_(${command})_*Neste grupo 📛`
                : ` ❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nCom sucesso o recurso de *_(${command})_*Neste grupo 📛`
            );
          }
          break;

        case "advlink":
        case "advtlink":
        case "advtlinks":
        case "advlinks":
          {
            if (Os_Returns(true, true, true).true)
              return reply(Os_Returns(true, true, true).txt);
            dataGp[0].antilinkhard =
              !dataGp[0].advlink && !dataGp[0].antilinkhard
                ? true
                : dataGp[0].advlink && !dataGp[0].antilinkhard
                ? false
                : false;
            dataGp[0].advlink = !dataGp[0].advlink;
            setGp(dataGp);
            reply(
              dataGp[0]?.advlink
                ? "Foi ativado com sucesso, a função de avertir 3/3, quem enviar link, na terceira é removido"
                : "Função de adverter após um membro comum enviar link, foi desativada."
            );
          }
          break;

        case "advlinkgp":
        case "advtlinkgp":
        case "advtlinksgp":
        case "advlinksgp":
          {
            if (Os_Returns(true, true, true).true)
              return reply(Os_Returns(true, true, true).txt);
            dataGp[0].antilinkgp =
              !dataGp[0].advlinkgp && !dataGp[0].antilinkgp
                ? true
                : dataGp[0].advlinkgp && !dataGp[0].antilinkgp
                ? false
                : false;
            dataGp[0].advlinkgp = !dataGp[0].advlinkgp;
            setGp(dataGp);
            reply(
              dataGp[0]?.advlinkgp
                ? "Foi ativado com sucesso, a função de avertir 3/3, quem enviar link de grupo, na terceira é removido"
                : "Função de adverter após um membro comum enviar link de grupo, foi desativada."
            );
          }
          break;

        case "visualizarmsg":
          if (!SoDono) return reply(Res_SoDono);
          nescessario.visualizarmsg = !nescessario.visualizarmsg;
          visualizarmsg = !nescessario.visualizarmsg;
          setNes(nescessario);
          reply(
            nescessario?.visualizarmsg
              ? "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nO recurso de (𝙫𝙞𝙨𝙪𝙖𝙡𝙞𝙯𝙖𝙧)Mensagens em grupos e privado 👁️👁️️️"
              : " 🌀 𝘼𝙏𝙄𝙑𝙊𝙐 🌀\nO recurso de (𝙫𝙞𝙨𝙪𝙖𝙡𝙞𝙯𝙖𝙧)Mensagens em grupos e privado 👁️👁️"
          );
          break;

        case "7gold":
        case "7statusgold":
        case "7statusgolds":
        case "7golds":
        case "7consultargold":
          if (!IS_sistemGold)
            return reply(
              `Só é possível utilizar este comando ativando o sistema de Golds\nExemplo: ${prefix}sistemgold 1`
            );
          if (!isGroup) return reply(Res_SoGrupo);
          if (command == "consultargold") {
            ConsultarGold(IS_sistemGold, menc_os2);
          } else {
            var U_N = menc_os2 || sender;
            var Ch = dataGp[0].Chances;
            var Ch_ = Ch[Ch.findIndex((i) => i.id === U_N)];
            let Blue = "";
            let Devendo = "";
            Ch.forEach((a) => {
              if (JSON.stringify(a.ChanceR).includes(U_N))
                Blue += ` ${a.id.split("@")[0]}\n_-_-_-_-_-_-_-_-\n`;
            });
            rggold[ID_G_GOLD].usus.forEach(function (a, b) {
              if (a?.emp_G && JSON.stringify(a.emp_G).includes(U_N))
                Devendo += ` -> Devedor: ${a.id.split("@")[0]}\n -> ${
                  a.emp_G[0].Golds
                } Golds que te deve\n________________________\n`;
            });
            var quiz = Ch_?.quiz?.find((i) => i)?.errou;
            var quiz2 = Ch_?.quiz?.find((i) => i)?.acertou;
            var FCLT_G = rggold[ID_G_GOLD].usus.find((i) => i.id === U_N);
            mention(`Aqui estão as estatísticas Gold:

- Golds acumulados: ${FCLT_G?.Golds || 0}

- Com escudo ?: ${Ch_?.Escudo?.length > 0 ? "Sim" : "Não"}

- Total de vezes que roubou: ${Ch_?.ChanceR?.length || 0}/5

- Chances restantes para minerar Gold: ${Ch_?.ChanceG || 0}/3

- Chances restantes para apostar Gold:${Ch_?.ChanceAp || 0}/15

- Chances restantes para Vingança: ${Ch_?.Vinganca || 0}/1

- Chances restantes para a Roleta da Sorte: ${Ch_?.roletadasorte ? 1 : 0}/1

- Chances restantes no cassino: ${Ch_?.cassino || 0}/5

- Chances restantes no Quiz Número: ${
              !Ch_?.quiz?.length > 0
                ? "0/2"
                : quiz2 === 2
                ? "2/2"
                : quiz === 2
                ? "2/2"
                : quiz === 1 && quiz2 === 1
                ? "1/2"
                : quiz2 === 1 && quiz === 0
                ? "1/2"
                : quiz === 1 && quiz2 === 0
                ? "1/2"
                : "0/2"
            }

- Chances de enviar cachaça: ${Ch_?.Cachaca || 0}/1

- Devendo a: ${
              FCLT_G?.emp_G && FCLT_G?.emp_G.length > 0
                ? `@${FCLT_G.emp_G[0].id.split("@")[0]} / ${
                    FCLT_G.emp_G[0].Golds
                  } Golds`
                : "Ninguém."
            }

- Lista de usuários que estão te devendo:

${Devendo}

- Lista de usuários que te roubaram:

${Blue}

Bot: ${NomeDoBot}`);
          }
          break;

        case "7zerarrankgold":
        case "7zerarrankgolds":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!SoDono) return reply(Res_SoDono);
          rggold.splice(ID_G_GOLD, 1);
          Goldrgs(rggold);
          reply(
            "Rank de golds e todos os Gold dos usuários, foram zerados com sucesso."
          );
          break;

        case "zerarrank":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!SoDono) return reply(Res_SoDono);
          countMessage.splice(
            countMessage.findIndex((i) => i.groupId === from),
            1
          );
          fs.writeFileSync(
            "./dados/countmsg.json",
            JSON.stringify(countMessage, null, 2) + "\n"
          );
          reply(
            "Rank de mensagem ( Contador de mensagens ), foi zerada com sucesso desse grupo."
          );
          break;

        case "7rankgold":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!IS_sistemGold)
            return reply(
              `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
            );
          await LIMPARDOCNT_QUEMJASAIU();
          var uss_ = rggold[ID_G_GOLD].usus;
          var groupMemberId = groupMembers.map((a) => a.id);
          uss_ = uss_.filter((i) => groupMemberId.includes(i.id));
          Goldrgs(rggold);
          galo = uss_.map((i) => i);
          rank = galo.sort((a, b) => (a.Golds < b.Golds ? 0 : -1));
          ment = [];
          ble = `💰 *Rank de Golds* 💰\n`;
          for (i = 0; i < (uss_.length < 10 ? uss_.length : 10); i++) {
            if (i != null) {
              var Ch = dataGp[0]?.Chances;
              var Ch_ = Ch[Ch.findIndex((a) => a.id === rank[i].id)];
              var quiz = Ch_?.quiz?.find((i) => i)?.errou;
              var quiz2 = Ch_?.quiz?.find((i) => i)?.acertou;
              if (rank[i]?.id)
                ble += `
┌───────────────
│ ${i + 1}º : @${rank[i]?.id?.split("@")[0] || "Não foi possível solicitar."}
│
│ Saldo: ${rank[i]?.Golds || 0} Golds
│
│ Quantos já roubou: ${Ch_?.ChanceR?.length || 0}/5
│ 
│ Chances de minerar gold: ${Ch_?.ChanceG || 0}/3
│
│ Chances de apostar gold: ${Ch_?.ChanceAp || 0}/3
│
│ Chance de vingança: ${Ch_?.Vinganca || 0}/1
│
│ Chances quiznumero: ${
                  !Ch_?.quiz?.length > 0
                    ? "0/2"
                    : quiz2 === 2
                    ? "2/2"
                    : quiz === 2
                    ? "2/2"
                    : quiz === 1 && quiz2 === 1
                    ? "1/2"
                    : quiz2 === 1 && quiz === 0
                    ? "1/2"
                    : quiz === 1 && quiz2 === 0
                    ? "1/2"
                    : "0/2"
                }
│
│ Chance roleta da sorte: ${Ch_?.roletadasorte ? 1 : 0}/1
│
│ Chances em cassino: ${Ch_?.cassino || 0}/5
│
│ Chances de enviar cachaça: ${Ch_?.Cachaca || 0}/1
│
│ Com escudo ?: ${Ch_?.Escudo?.length > 0 ? "Sim" : "Não"}
│
└────────────\n`;
            }
          }
          mention(ble);
          break;

        case "7addgold":
        case "7tirargold":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!IS_sistemGold)
            return reply(
              `Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`
            );
          if (!menc_os2)
            return reply(
              `Você deve Marcar a mensagem do usuário com ${
                prefix + command
              } /100 por exemplo, ou ${
                prefix + command
              } @xpessoa/100, a quantidade é quanto quiser.`
            );
          if (!SoDono) return reply(Res_SoDono);
          var [usu, qp] = q.trim().split("/");
          if (!q.trim().includes("/"))
            return reply(
              `Contém 2 fórmas, Exemplo1: ${
                prefix + command
              } /5\n\n O exemplo 1, você marca a mensagem do usuário, já o Exemplo2: ${
                prefix + command
              } @marca/5\n\nO exemplo 2, você marca ele no grupo com @/5 que é a quantidade de golds.`
            );
          if (!Number(qp))
            return reply(
              `Contém 2 fórmas, Exemplo1: ${
                prefix + command
              } /5\n\n O exemplo 1, você marca a mensagem do usuário, já o Exemplo2: ${
                prefix + command
              } @marca/5\n\nO exemplo 2, você marca ele no grupo com @/5 que é a quantidade de golds.`
            );
          if (command == "addgold") {
            AddGold(IS_sistemGold, Number(qp), menc_os2);
          } else {
            TirarGold(IS_sistemGold, Number(qp), menc_os2);
          }
          break;

        case "7sistemgold":
        case "7systemgold":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          dataGp[0].sistemGold = !dataGp[0].sistemGold;
          setGp(dataGp);
          reply(
            dataGp[0]?.sistemGold
              ? "Sistema de golds ativado com sucesso neste grupo. ( Obs: Use uma vez para ativar, e use novamente para desativar. )"
              : "Sistema de golds desativado. ( Obs: Use uma vez para ativar, e use novamente para desativar. )"
          );
          break;

        case "x9visuunica":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          dataGp[0].visuUnica = !dataGp[0].visuUnica;
          setGp(dataGp);
          reply(
            dataGp[0]?.visuUnica
              ? "🤫 𝘼𝙏𝙄𝙑𝙊𝙐 🤭, Nosso segredo! 🙆🏻‍♂️"
              : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nXato 😜 Tu desativou o recurso de revelar (visu única) neste grupo 😂"
          );
          break;

        case "autobaixar":
        case "auto-baixar":
        case "auto-download":
        case "autodownload":
        case "auto-downloader":
        case "autodownloader":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          dataGp[0].autobaixar = !dataGp[0].autobaixar;
          setGp(dataGp);
          reply(
            dataGp[0]?.autobaixar
              ? "-> Ativou com sucesso o recurso de baixar mídias automáticas, por exemplo: tiktok, twitter, instagram, facebook, spotify, transcrição de áudio automatico ( Obs: Use uma vez para ativar, e use novamente para desativar. )"
              : "‼️ -> Desativou com sucesso o recurso de baixar mídias automáticas, por exemplo: tiktok, twitter, instagram, facebook, spotify, transcrição de áudio automatico ✔️ ( Obs: Use uma vez para ativar, e use novamente para desativar. )"
          );
          break;

        case "so_adm":
        case "so-adm":
        case "soadm":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (args.length < 1) return reply("1 pra ligar / 0 pra desligar 🥱");
          if (Number(args[0]) === 1) {
            if (So_Adm) return reply("Ja esta ativo 😼");
            dataGp[0].soadm = true;
            setGp(dataGp);
            reply(" - Agora somente os Admiros vão usar os comandos do Bot 😝");
          } else if (Number(args[0]) === 0) {
            if (!So_Adm) return reply("Ja esta Desativado 😼");
            dataGp[0].soadm = false;
            setGp(dataGp);
            reply(
              "‼️ Pronto seus chorões agora vocês podem utilizar os meus comandos 🥱️"
            );
          } else {
            reply("1 para ativar, 0 para desativar 🥱");
          }
          break;

        case "odelete":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!SoDono) return reply(Res_SoDono);
          if (!isBotGroupAdmins) return reply(Res_BotADM);
          if (args.length < 1) return reply("1 pra ligar / 0 pra desligar 🥱");
          if (Number(args[0]) === 1) {
            if (IS_DELETE) return reply("Ja esta ativo 😼");
            nescessario.Odelete = true;
            setNes(nescessario);
            reply(
              "📛 𝘼𝙏𝙄𝙑𝙊𝙐 📛\nCom sucesso o recurso de delete nos grupos ⚠️💫"
            );
          } else if (Number(args[0]) === 0) {
            if (!IS_DELETE) return reply("Ja esta Desativado 😼");
            nescessario.Odelete = false;
            setNes(nescessario);
            reply(
              "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nCom sucesso o recurso de delete nos grupos 🎯️"
            );
          } else {
            reply("1 para ativar, 0 para desativar 🥱");
          }
          break;

        case "prefixos":
          if (!isGroup) return reply(Res_SoGrupo);
          if (dataGp[0].prefixos.length < 1)
            return reply(
              "Não contem nenhum prefixo a + adicionado neste grupo."
            );
          bla = `Lista de prefixos para uso do bot, no Grupo: ${groupName}\n\n`;
          for (i of dataGp[0].prefixos) {
            bla += `Prefixo: ${i}\n\n`;
          }
          reply(bla);
          break;

        case "add_prefixo":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!isMultiP)
            return reply(
              `Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`
            );
          if (ANT_LTR_MD_EMJ(q))
            return reply("Não pode letra modificada, nem emoji..");
          if (!q.trim())
            return reply("Determine o novo prefixo, não pode espaço vazio...");
          if (q.trim() > 1)
            return reply(
              `Calma, o prefixo só pode ser um\nExemplo: ${
                prefix + command
              } _\nAe o bot vai passar á responder _ como prefixo do bot..`
            );
          if (dataGp[0].prefixos.indexOf(q.trim()) >= 0)
            return reply(
              `Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`
            );
          dataGp[0].prefixos.push(q.trim());
          setGp(dataGp);
          reply(
            `Prefixo ${q.trim()} Adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`
          );
          break;

        case "tirar_prefixo":
        case "rm_prefixo":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!isMultiP)
            return reply(
              `Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`
            );
          if (ANT_LTR_MD_EMJ(q))
            return reply("Não pode letra modificada, nem emoji..");
          if (!q.trim())
            return reply(
              "Determine o prefixo que deseja tirar, não pode espaço vazio..."
            );
          if (q.trim() > 1)
            return reply(
              `Calma, o prefixo só pode ser tirado um por vez\nExemplo: ${
                prefix + command
              } _\nAe o bot não vai responder mais com _`
            );
          if (dataGp[0].prefixos.indexOf(q.trim()) < 0)
            return reply(
              `Esse prefixo não está incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`
            );
          if (dataGp[0].prefixos.length == 1)
            return reply(
              "Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro."
            );
          dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1);
          setGp(dataGp);
          reply(
            `Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`
          );
          break;

        case "multiprefixo":
        case "multiprefix":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isGroupAdmins && !SoDono) return reply(Res_SoAdm);
          if (!isMultiP) {
            dataGp[0].multiprefix = true;
            setGp(dataGp);
            reply(
              "🌀 𝘼𝙏𝙄𝙑𝙊𝙐 🌀\nCom sucesso o recurso de\n(𝙈𝙐𝙇𝙏𝙄 - 𝙋𝙍𝙀𝙁𝙄𝙓𝙊𝙎) 😏❗"
            );
          }
          if (isMultiP) {
            dataGp[0].multiprefix = false;
            setGp(dataGp);
            reply(
              "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nCom sucesso o recurso de\n(𝙈𝙐𝙇𝙏𝙄 - 𝙋𝙍𝙀𝙁𝙄𝙓𝙊𝙎) 😏❗️"
            );
          }
          break;

        case "anticatalogo":
        case "anticatalg":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          dataGp[0].anticatalogo = !dataGp[0].anticatalogo;
          setGp(dataGp);
          reply(
            dataGp[0]?.anticatalogo
              ? "🌀 𝘼𝙏𝙄𝙑𝙊𝙐 🌀\nCom sucesso o recurso de (𝙖𝙣𝙩𝙞-𝙘𝙖𝙩𝙖𝙡𝙤𝙜𝙤)Neste grupo 📝"
              : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nCom sucesso o recurso de (𝙖𝙣𝙩𝙞-𝙘𝙖𝙩𝙖𝙡𝙤𝙜𝙤)Neste grupo 📝"
          );
          break;

        case "bemvindo":
        case "welcon1":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!SoDono) return reply(Res_SoDono);
          dataGp[0].wellcome[0].bemvindo1 = !dataGp[0].wellcome[0].bemvindo1;
          setGp(dataGp);
          reply(
            dataGp[0]["wellcome"][0]["bemvindo1"]
              ? "📛 𝘼𝙏𝙄𝙑𝙊𝙐 📛\nCom sucesso o (𝙗𝙚𝙢-𝙫𝙞𝙣𝙙𝙤❶)Neste grupo 🤩"
              : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nCom sucesso o (𝙗𝙚𝙢-𝙫𝙞𝙣𝙙𝙤❶)Neste grupo 🤩"
          );
          break;
        case "bemvindo2":
        case "welcon2":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!SoDono) return reply(Res_SoDono);
          dataGp[0].wellcome[1].bemvindo2 = !dataGp[0].wellcome[1].bemvindo2;
          setGp(dataGp);
          reply(
            dataGp[0]["wellcome"][1]["bemvindo2"]
              ? "📛 𝐀𝐓𝐈𝐕𝐎𝐔 📛\nCom sucesso o (𝐃𝐞𝐦-𝐯𝐢𝐧𝐝𝐨)Neste grupo 🤩"
              : "❌𝐃𝐄𝐒𝐀𝐓𝐈𝐕𝐎𝐔❌\nCom sucesso o (𝐃𝐞𝐦-𝐯𝐢𝐧𝐝𝐨)Neste grupo 🤩"
          );
          break;

        case "legendabv":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!q.trim()) return reply("*Escreva a mensagem de boas-vindas 😏*");
          if (isWelkom) {
            dataGp[0].wellcome[0].legendabv = q.trim();
            setGp(dataGp);
            reply("📛 Mensagem de (𝙗𝙤𝙖𝙨 𝙫𝙞𝙣𝙙𝙖𝙨)Definida com sucesso 📛");
          } else {
            reply(`Ative o ${prefix}bemvindo 1`);
          }
          break;

        case "legendasaiu":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!q.trim()) return reply("*Escreva a mensagem de saída 😏*");
          if (isWelkom) {
            dataGp[0].wellcome[0].legendasaiu = q.trim();
            setGp(dataGp);
            reply("👾 Mensagem de ( 𝙨𝙖𝙞́𝙙𝙖 ) Definida com sucesso 👾");
          } else {
            reply(`Ative o ${prefix}bemvindo 1`);
          }
          break;

        case "legendabv2":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!q.trim()) return reply("*Escreva a mensagem de boas-vindas 😏*");
          if (isWelkom2) {
            dataGp[0].wellcome[1].legendabv = q.trim();
            setGp(dataGp);
            reply("📛 Mensagem de (𝐃𝐨𝐚𝐬 𝐯𝐢𝐧𝐝𝐚𝐬)Definida com sucesso 📛");
          } else {
            reply(`Ative o ${prefix}bemvindo2 primeiro!`);
          }
          break;

        case "legendasaiu2":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!q.trim()) return reply("*Escreva a mensagem de saída 😏*");
          if (isWelkom2) {
            dataGp[0].wellcome[1].legendasaiu = q.trim();
            setGp(dataGp);
            reply("🎗️👾 Mensagem de ( 𝐬𝐚𝐢́𝐝𝐚 ) Definida com sucesso 👾🎗");
          } else {
            reply(`Ative o ${prefix}bemvindo2 primeiro!`);
          }
          break;

        case "legenda_estrangeiro":
        case "legenda_estrangeiros":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!q.trim())
            return reply("*Escreva a mensagem de remoção de estrangeiros 😏*");
          if (isAntifake) {
            dataGp[0].legenda_estrangeiro = q.trim();
            setGp(dataGp);
            reply(
              "*Mensagem de remoção de estrangeiros definida com sucesso 🥱*"
            );
          } else {
            reply(`Ative o antifake primeiro ${prefix}antifake 🥱`);
          }
          break;

        case "legenda_listanegra":
        case "legenda_listban":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!q.trim())
            return reply(
              "*Escreva a mensagem de remoção de usuários que estiver na lista negra*"
            );
          dataGp[0].legenda_listanegra = q.trim();
          setGp(dataGp);
          reply(
            "*Mensagem de remoção de usuários que se encontra na lista negra definida com sucesso!*"
          );
          break;

        case "legenda_video":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!q.trim())
            return reply("*Escreva a mensagem de remoção de estrangeiros*");
          dataGp[0].legenda_video = q.trim();
          setGp(dataGp);
          reply("*Mensagem de remoção de video definida com sucesso!*");
          break;

        case "legenda_imagem":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!q.trim())
            return reply("*Escreva a mensagem de remoção de estrangeiros*");
          dataGp[0].legenda_imagem = q.trim();
          setGp(dataGp);
          reply("*Mensagem de remoção de imagem definida com sucesso!*");
          break;

        case "legenda_documento":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          if (!q.trim())
            return reply("*Escreva a mensagem de remoção de estrangeiros*");
          dataGp[0].legenda_documento = q.trim();
          setGp(dataGp);
          reply("*Mensagem de remoção de Documento definida com sucesso!*");
          break;

        case "autobang":
        case "listanegrag":
          if (!SoDono) return reply(Res_SoDono);
          if (!mrc_ou_numero)
            return reply(
              "Marque a mensagem do lixo com o comando!Então utilize o comando com o número do lixo que deseja adicionar na Lista Global 🚯"
            );
          // Corrigido para Baileys 7.0+ - compatibilidade com LID
          if (isJidInList(mrc_ou_numero, listanegraG))
            return reply(
              "𝘀𝘴𝘵𝘦 𝘪𝘯𝘶́𝘵𝘪𝘭 𝘫𝘢 𝘦𝘴𝘵𝘢 𝘪𝘯𝘤𝘭𝘶𝘴𝘰 𝘯𝘢 𝘛𝘐𝘎𝘛𝘼_𝘂𝘛𝘖𝘉𝘼𝘛,𝘴𝘦 𝘦𝘭𝘦 𝘥𝘢 𝘢𝘴 𝘤𝘢𝘳𝘢𝘴 𝘦𝘮 𝘲𝘶𝘢𝘭𝘲𝘶𝘦𝘳 𝘨𝘳𝘶𝘱𝘰 𝘲𝘶𝘦 𝘦𝘶 𝘦𝘴𝘵𝘪𝘫𝘦𝘳 𝘪𝘳𝘦𝘪 𝘱𝘢𝘴𝘴𝘢𝘳 𝘢 𝘧𝘢𝘤𝘢 𝘴𝘦𝘮 𝘥𝘰́ 𝘦 𝘴𝘦𝘮 𝘱𝘪𝘦𝘥𝘢𝘥𝘦 🥱"
            );
          // Adicionar usando função que normaliza o JID
          addJidToList(mrc_ou_numero, listanegraG);
          fs.writeFileSync(
            "./dono/nescessario.json",
            JSON.stringify(nescessario, null, "\t")
          );
          reply(
            `𝘐𝘦𝘴𝘵𝘳𝘦 𝘱𝘰𝘳 𝘴𝘶𝘢𝘴 𝘰𝘳𝘥𝘦𝘯𝘴 𝘦𝘶 𝘢𝘥𝘪𝘤𝘪𝘰𝘯𝘦𝘪 𝘯𝘢 ❮𝘛𝘐𝘎𝘛𝘼_𝘂𝘛𝘖𝘉𝘼𝘛❯ 𝘎𝘦 𝘦𝘭𝘦 𝘥𝘢 𝘢𝘴 𝘤𝘢𝘳𝘢𝘴 𝘦𝘮 𝘯𝘰𝘴𝘴𝘰𝘴 𝘨𝘳𝘶𝘱𝘰𝘴, 𝘫𝘰𝘶 𝘱𝘢𝘴𝘴𝘢 𝘢 𝘧𝘢𝘤𝘢 😏`
          );
          break;

        case "tirardalistag":
          if (!SoDono) return reply(Res_SoDono);
          if (!mrc_ou_numero)
            return reply(
              "𝘐𝘢𝘳𝘲𝘶𝘦 𝘢 𝘮𝘦𝘯𝘴𝘢𝘨𝘦𝘮 𝘥𝘰 𝘪𝘥𝘪𝘰𝘵𝘢 𝘤𝘰𝘮 𝘰 𝘤𝘰𝘮𝘢𝘯𝘥𝘰!𝘀𝘯𝘵𝘢̃𝘰 𝘶𝘵𝘪𝘭𝘪𝘻𝘦 𝘰 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘤𝘰𝘮 𝘰 𝘯𝘶́𝘮𝘦𝘳𝘰 𝘥𝘰 𝘵𝘳𝘰𝘶𝘹𝘢 𝘲𝘶𝘦 𝘥𝘦𝘴𝘦𝘫𝘢 𝘵𝘪𝘳𝘢𝘳 𝘥𝘢 𝘛𝘐𝘎𝘛𝘼 𝘂𝘛𝘖𝘉𝘼𝘛 😒"
            );
          // Corrigido para Baileys 7.0+ - compatibilidade com LID
          if (!isJidInList(mrc_ou_numero, listanegraG))
            return reply("𝘀𝘴𝘵𝘦 𝘭𝘪𝘹𝘰 𝘯𝘢̃𝘰 𝘦𝘴𝘵𝘢 𝘪𝘯𝘤𝘭𝘶𝘴𝘰 🥱");
          // Remover usando função que normaliza o JID
          nescessario.listanegraG = removeJidFromList(
            mrc_ou_numero,
            listanegraG
          );
          fs.writeFileSync(
            "./dono/nescessario.json",
            JSON.stringify(nescessario, null, "\t")
          );
          reply(
            `𝘛𝘢𝘨𝘢𝘣𝘢 𝘵𝘪𝘳𝘢𝘥𝘰 𝘥𝘢 𝘭𝘪𝘴𝘵𝘢 𝘥𝘰𝘴 𝘪𝘯𝘶́𝘵𝘦𝘪𝘴, 𝘢𝘨𝘰𝘳𝘢 𝘱𝘰𝘥𝘦 𝘦𝘯𝘵𝘳𝘢𝘳 𝘦𝘮 𝘲𝘶𝘢𝘭𝘲𝘶𝘦𝘳 𝘨𝘳𝘶𝘱𝘰 𝘲𝘶𝘦 𝘦𝘶 𝘦𝘴𝘵𝘪𝘫𝘦𝘳.𝘕𝘢̃𝘰 𝘫𝘰𝘶 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳 𝘦𝘴𝘴𝘦 𝘭𝘪𝘹𝘰 𝘱𝘰𝘳 𝘰𝘳𝘥𝘦𝘮 𝘥𝘰 𝘮𝘦𝘶 𝘥𝘰𝘯𝘰,𝘐𝘰𝘴𝘤𝘢 𝘛𝘪́𝘳𝘶𝘴 😾`
          );
          break;

        case "token_gpt":
          if (!SoDono) return reply(Res_SoDono);
          nescessario.TOKEN_GPT = q.trim();
          setNes(nescessario);
          reply(
            "Token registrado com sucesso para o Chat Gpt, bom uso amigo(a).."
          );
          break;

        case "crimg":
        case "superimg":
        case "imgcr":
          if (TOKEN_GPT === 0)
            return mention(`Olá @${numerodono_ofc} tá faltando o
token do gpt, vai no site: https://platform.openai.com/account/api-keys gera a
key, ou manda alguma pessoa criar.. e usa o comando ${prefix}token_gpt e o token
aqui, boa sorte..`);
          try {
            reply("Realizando pedido..");
            conn
              .sendMessage(
                from,
                {
                  image: {
                    url: reqapi.superimg(q.trim(), nescessario.TOKEN_GPT),
                  },
                },
                { quoted: info }
              )
              .catch(() => {
                return reply("Erro... 🥱");
              });
          } catch {
            return reply("Erro... 🥱");
          }
          break;

        case "pergunta":
        case "openai":
        case "gpt":
        case "chatgpt":
          try {
            if (!q.trim())
              return reply(
                `Faça uma pergunta, exemplo: ${
                  prefix + command
                } Quantos anos para o plástico se decompor.`
              );
            reply(
              "Aguarde, criando / pesquisando sobre o que esta perguntando ou pedindo."
            );
            ABC = await reqapi.gpt(q.trim(), nescessario.TOKEN_GPT);
            reply(`( ${ABC.msg} )`);
          } catch {
            reply("Erro... 🥱");
          }
          break;

        case "simi":
          if (!isGroup) return reply(Res_SoGrupo);
          try {
            datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {
              method: "POST",
              headers: { "content-type": "application/x-www-form-urlencoded" },
              body: "text=" + q + "&lc=pt",
            });
            return reply(datasimi.message);
          } catch (e) {
            return reply("Resposta não encontrada.. 🥱");
          }
          break;

        case "simih2":
          if (!isGroupAdmins) return reply(Res_SoGrupo);
          if (args.length < 1) return reply(`𝙁𝙤𝙙𝙖-𝙨𝙚 🥱`);
          if (Number(args[0]) === 1) {
            if (isSimi2) return reply("𝙁𝙤𝙙𝙖-𝙨𝙚 🥱");
            dataGp[0].simi2 = true;
            await setGp(dataGp);
            await reply("🌀 𝘼𝙏𝙄𝙑𝙊𝙐 🌀\n𝙊(< 𝙎𝙞𝙢𝙞𝙝❷ >)Neste Grupo 😈");
          } else if (Number(args[0]) === 0) {
            if (!isSimi2) return reply("𝙁𝙤𝙙𝙖-𝙨𝙚 🥱");
            dataGp[0].simi2 = false;
            await setGp(dataGp);
            await reply("❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\n𝙏𝙪 𝙙𝙚𝙨𝙖𝙩𝙞𝙫𝙤𝙪 𝙢𝙤𝙙𝙤 𝙎𝙞𝙢𝙞𝙝❷ 𝙥𝙤𝙧𝙦𝙪𝙚?🖕🏿😡️");
          } else {
            reply("𝙁𝙤𝙙𝙖-𝙨𝙚 🥱");
          }
          break;

        case "simih":
          if (!isGroupAdmins) return reply(Res_SoAdm);
          dataGp[0].simi1 = !dataGp[0].simi1;
          setGp(dataGp);
          reply(
            dataGp[0]?.simi1
              ? "🌀 𝘼𝙏𝙄𝙑𝙊𝙐 🌀\n𝙊(< 𝙎𝙞𝙢𝙞𝙝 >)Neste Grupo 😈"
              : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\n𝙏𝙪 𝙙𝙚𝙨𝙖𝙩𝙞𝙫𝙤𝙪 𝙢𝙤𝙙𝙤 𝙎𝙞𝙢𝙞𝙝 𝙥𝙤𝙧𝙦𝙪𝙚?🖕🏿😡"
          );
          break;

        case "autofigu":
        case "autosticker":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          dataGp[0].autosticker = !dataGp[0].autosticker;
          setGp(dataGp);
          reply(
            dataGp[0]?.autosticker
              ? "♻️ 𝘼𝙏𝙄𝙑𝙊𝙐 ♻️\nCom sucesso𝙖𝙪𝙩𝙤-𝙛𝙞𝙜𝙪𝙧𝙞𝙣𝙝𝙖𝙨,Neste grupo 📸"
              : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nCom sucesso o 𝙖𝙪𝙩𝙤-𝙛𝙞𝙜𝙪𝙧𝙞𝙣𝙝𝙖𝙨Neste grupo 📸"
          );
          break;

        case "autoresposta":
        case "ativar":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          dataGp[0].autoresposta = !dataGp[0].autoresposta;
          setGp(dataGp);
          reply(
            dataGp[0]?.autoresposta
              ? "🌀> AUTO RESPOSTA DO 𝗕𝗢𝗧-𝗔𝗧𝗜𝗩𝗔𝗗𝗢>🌀"
              : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nAHHH!!Agora eu não vou mais participar do grupo 😭"
          );
          break;

        case "modobrincadeira":
        case "modobrincadeiras":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          dataGp[0].jogos = !dataGp[0].jogos;
          setGp(dataGp);
          reply(
            dataGp[0]?.jogos
              ? "🎯🌀 𝘼𝙏𝙄𝙑𝙊𝙐 🌀\n🌈Com sucesso o recurso de 𝙢𝙤𝙙𝙤 𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖...Neste grupo 🤹🏻‍♂️🪀"
              : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\n🌈Com sucesso o recurso de 𝙢𝙤𝙙𝙤 𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖...Neste grupo 🤹🏻‍♂️🪀"
          );
          break;

        case "bangp":
        case "unbangp":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!SoDono) return reply(Res_SoDono);
          if (command == "bangp") {
            if (isBanchat) return reply(`Este grupo ja está banido`);
            dataGp[0].bangp = true;
            setGp(dataGp);
            reply(`Grupo banido com sucesso`);
          } else {
            if (!isBanchat) return reply(`Este grupo não está mais banido`);
            dataGp[0].bangp = false;
            setGp(dataGp);
            reply(`Grupo desbanido...`);
          }
          break;

        case "boton":
        case "botoff":
          if (!SoDono) return reply(Res_SoDono);
          nescessario.botoff = !nescessario.botoff;
          setNes(nescessario);
          reply(
            nescessario?.botoff
              ? "Desativando funções e parando a execução de comandos por membros com sucesso..."
              : `Ativando todos os funcionamentos do bot novamente...`
          );
          break;

        case "antipalavrão":
        case "antipalavra":
        case "antinotafake":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          dataGp[0].antipalavrao.active = !dataGp[0].antipalavrao.active;
          setGp(dataGp);
          reply(
            dataGp[0]["antipalavrao"]["active"]
              ? "🌀 𝘼𝙏𝙄𝙑𝙊𝙐 🌀\nCom sucesso o recurso de 𝙖𝙣𝙩𝙞-𝙣𝙤𝙩𝙖...Neste grupo 🤬"
              : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nCom sucesso o recurso de 𝙖𝙣𝙩𝙞-𝙣𝙤𝙩𝙖...Neste grupo 🤬"
          );
          break;

        case "addnota":
        case "addpalavra":
          if (!isGroupAdmins) return reply(Res_SoAdm);
          if (!isPalavrao)
            return reply(
              `Anti palavras está desativado, você precisa usar o comando ${prefix}antipalavra 🤦🏻‍♀️`
            );
          if (args.length < 1)
            return reply(
              `Use assim : ${prefix + command} [palavrão]. exemplo ${
                prefix + command
              } puta`
            );
          texto = args
            .join(" ")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          if (isPalavras.includes(texto))
            return reply("𝙅𝙖́ 𝙛𝙤𝙞 𝙖𝙙𝙞𝙘𝙞𝙤𝙣𝙖𝙙𝙤 𝙢𝙚𝙨𝙩𝙧𝙚 🙇🏻‍♀️");
          dataGp[0].antipalavrao.palavras.push(texto);
          setGp(dataGp);
          reply("😼 𝘼𝘿𝙄𝘾𝙄𝙊𝙉𝘼𝘿𝙊 𝙈𝙀𝙎𝙏𝙍𝙀 📛");
          break;

        case "remover":
        case "delpalavra":
          if (!isGroupAdmins) return reply(Res_SoAdm);
          if (!isPalavrao) return reply("𝙖𝙣𝙩𝙞-𝙣𝙤𝙩𝙖... desativado 🥱");
          if (args.length < 1)
            return reply(
              `Use assim : ${prefix + command} [palavrão]. exemplo ${
                prefix + command
              } puta`
            );
          texto = args
            .join(" ")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          if (!isPalavras.includes(texto))
            return reply("𝙅𝙖́ 𝙛𝙤𝙞 𝙧𝙚𝙢𝙤𝙫𝙞𝙙𝙖 𝙢𝙚𝙨𝙩𝙧𝙚 🙇🏻‍♀️");
          var i6 = dataGp[0].antipalavrao.palavras.indexOf(texto);
          dataGp[0].antipalavrao.palavras.splice(i6, 1);
          setGp(dataGp);
          reply("🙆🏻‍♀️ 𝙍𝙀𝙈𝙊𝙑𝙄𝘿𝘼 𝙈𝙀𝙎𝙏𝙍𝙀 🚯");
          break;

        case "listapalavrão":
        case "listanota":
        case "listpalavra":
          if (!isPalavrao) return reply("Anti palavrão desativado!");
          let lbw = `Esta é a lista de palavrão\nTotal : ${isPalavras.length}\n`;
          for (let i of isPalavras) {
            lbw += `➸ ${i}\n`;
          }
          await reply(lbw);
          break;

        case "limite":
        case "limiteflood":
        case "limitecaracteres":
          if (Os_Returns(true, true, true).true)
            return reply(Os_Returns(true, true, true).txt);
          dataGp[0].limitec.active = !dataGp[0].limitec.active;
          setGp(dataGp);
          reply(
            dataGp[0]["limitec"]["active"]
              ? `⚠️᪶𝘼𝙏𝙄𝙑𝙊𝙐 ᪶⚠️\nO limite de (𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨) foi ativado.!!Nesse grupo ⛔`
              : "❌𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝙊𝙐❌\nO limite de (𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨) foi desativado.!! Nesse grupo ⛔"
          );
          break;

        case "limitec_global":
        case "limitec":
          if (!SoDono && !isnit && !ischyt) return reply(Res_SoDono);
          if (!isAntiFlood)
            return reply(`Ative primeiro o ☛ ${prefix}limite 😏`);
          if (!q.trim())
            return reply(`Cade a quantidade? Ex: ${prefix + command} 6000`);
          if (isNaN(q) == true) return reply("Digite apenas números");
          if (command == "limitec") {
            dataGp[0].limitec.quantidade = q;
            setGp(dataGp);
            reply(
              `Foi alterado o Limite para: ${q} 😉 Se alguém mandar uma frase acima do limite eu vou passar a faca 😼͜🔪`
            );
          } else {
            var data = { limitefl: q };
            fs.writeFileSync(
              "./dados/usuarios/flood.json",
              JSON.stringify(data, null, "\t")
            );
            reply(`𝙁𝙤𝙞 𝙖𝙙𝙞𝙘𝙞𝙤𝙣𝙖𝙙𝙤 𝙪𝙢 𝙡𝙞𝙢𝙞𝙩𝙚 𝙥𝙖𝙧𝙖 𝙩𝙤𝙙𝙤𝙨 𝙤𝙨 𝙜𝙧𝙪𝙥𝙤𝙨 𝙙𝙚 😏 ${q}`);
          }
          break;

        case "status":
        case "ativarcmds":
        case "ativacoes":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isGroupAdmins && !SoDono && !info.key.fromMe)
            return reply(Res_SoAdm);
          statuszada = `📌 Obs: qualquer comando basta usar uma vez para ativar e novamente para desativar.

⚙︎ CONFIGURAÇÕES DO GRUPO
────────────────────────────

愛 Anti Link: ${dataGp[0]?.antilinkhard ? "✅" : "❌"}
→ ${prefix}antilink

愛 Anti Link de Grupo: ${isAntilinkgp ? "✅" : "❌"}
→ ${prefix}antilinkgp

愛 Limite de Caracteres: ${isAntiFlood ? "✅" : "❌"}
→ ${prefix}limitecaracteres

愛 Anti Palavrão: ${isPalavrao ? "✅" : "❌"}
→ ${prefix}antipalavrao

愛 Anti Fake: ${dataGp[0]?.antifake ? "✅" : "❌"}
→ ${prefix}antifake

愛 Anti Catálogo: ${isAnticatalogo ? "✅" : "❌"}
→ ${prefix}anticatalogo

愛 Anti Localização: ${Antiloc ? "✅" : "❌"}
→ ${prefix}antiloc

愛 Anti Vídeo: ${isAntiVid ? "✅" : "❌"}
→ ${prefix}antivideo

愛 Anti Imagem: ${isAntiImg ? "✅" : "❌"}
→ ${prefix}antiimg

愛 Anti Áudio: ${isAntiAudio ? "✅" : "❌"}
→ ${prefix}antiaudio

愛 Anti Documento: ${Antidoc ? "✅" : "❌"}
→ ${prefix}antidoc

愛 Anti Contato: ${isAntiCtt ? "✅" : "❌"}
→ ${prefix}antictt

愛 Anti Sticker: ${isAntiSticker ? "✅" : "❌"}
→ ${prefix}antisticker

愛 Cargo ADM (X9): ${isx9 ? "✅" : "❌"}
→ ${prefix}x9

愛 Visualização Única: ${isX9VisuUnica ? "✅" : "❌"}
→ ${prefix}x9visuunica

愛 Modo Brincadeira: ${isModobn ? "✅" : "❌"}
→ ${prefix}modobrincadeira

愛 Bemvindo1 (com foto): ${isWelkom ? "✅" : "❌"}
→ ${prefix}bemvindo1

愛 Bemvindo2 (sem foto): ${isWelkom2 ? "✅" : "❌"}
→ ${prefix}bemvindo2

愛 Autofigu: ${isAutofigu ? "✅" : "❌"}
→ ${prefix}autofigu

愛 Auto Resposta: ${isAutorepo ? "✅" : "❌"}
→ ${prefix}autoresposta

愛 Limitar Comando: ${dataGp[0]?.Limitar_CMD ? "✅" : "❌"}
→ ${prefix}limitarcomando

愛 Baixar Mídias Automático: ${dataGp[0]?.autobaixar ? "✅" : "❌"}
→ ${prefix}autobaixar

────────────────────────────`;
          conn.sendMessage(
            from,
            { image: { url: logoslink.logo }, caption: statuszada },
            { quoted: info }
          );
          break;

        case "reiniciar":
          if (!SoDono) return;
          setTimeout(async () => {
            reply("_♻️ Ｒｅｉｎｉｃｉａｎｄｏ...✨_");
            setTimeout(async () => {
              process.exit();
            }, 1200);
          }, 1000);
          break;

        //==========(Sticker-Stickers)===========\\

        case "emoji":
        case "semoji":
          try {
            if (!q.trim()) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`);
            var [emoji, nm] = q.split("/");
            var ABC = await reqapi.semoji(emoji, nm);
            sendStickerFromUrl(from, ABC.rst);
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        case "emoji-mix":
        case "emojimix":
          var [emj1, emj2] = q.trim().split("+");
          if (!q.includes("+"))
            return reply(
              `Olá, está faltando o +\nExemplo: ${prefix + command} 👿+😇`
            );
          try {
            reply(Res_Aguarde);
            sendStickerFromUrl(from, reqapi.emojimix(emj1, emj2));
          } catch (e) {
            return reply(
              "*Ops não foi possivel fazer esse mix de emoji / Ou ocorreu algum problema no sistema..*"
            );
          }
          break;

        case "figfundo":
        case "figvideo":
        case "figusemfundo":
        case "sfundo":
          if (
            ((isMedia && !info.message.videoMessage) || isQuotedImage) &&
            !q.length <= 1
          ) {
            rafa = isQuotedImage
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .imageMessage
              : info.message.imageMessage;
            reply(Res_Aguarde);
            buff = await getFileBuffer(rafa, "image");
            bas64 = `data:image/jpeg;base64,${buff.toString("base64")}`;
            anu = args.join(" ").split("|");
            satu = anu[0] !== "" ? anu[0] : `${pushname}`;
            sd = `📍Criado por↓${NomeDoBot}`;
            dua = typeof anu[1] !== "undefined" ? anu[1] : `${sd}`;
            var mantap = await convertSticker(bas64, `${dua}`, `${satu}`);
            var sti = Buffer.from(mantap, "base64");
            conn.sendMessage(from, { sticker: sti }, { quoted: info });
          } else {
            return reply(`So imagem mano 😑`);
          }
          break;

        case "minha":
          if (!isQuotedSticker) return reply("Marque uma figurinha...");
          encmediats = await getFileBuffer(
            info.message.extendedTextMessage.contextInfo.quotedMessage
              .stickerMessage,
            "sticker"
          );
          reply(Res_Aguarde);
          try {
            bas64 = `data:image/jpeg;base64,${encmediats.toString("base64")}`;
            var mantap = await convertSticker(bas64, `<ᑐᏆ́ᖇᐤᔕ>🥵`, `🥶<ᐱᕆᔕᔕᐤ>`);
            var sti = Buffer.from(mantap, "base64");
            await conn.sendMessage(from, { sticker: sti }, { quoted: info });
          } catch (err) {
            console.error("Erro ao criar sticker:", err);
            reply(`❌️ Erro ao criar sticker: ${err.message}`);
          }
          break;

        case "rename":
        case "roubar":
        case "roubarfigu":
          if (!isQuotedSticker)
            return reply("𝘐𝘢𝘳𝘲𝘶𝘦 𝘶𝘮𝘢 𝘧𝘪𝘨𝘶𝘳𝘪𝘯𝘩𝘢 𝘱𝘢𝘳𝘢 𝘳𝘰𝘶𝘣𝘢𝘳 𝘴𝘦𝘶 𝘭𝘢𝘥𝘳𝘢̃𝘰𝘻𝘪𝘯𝘩𝘰 😏");
          // Corrigido para Baileys 7.0+ - usar optional chaining
          encmediats = await getFileBuffer(
            info.message?.extendedTextMessage?.contextInfo?.quotedMessage
              ?.stickerMessage,
            "sticker"
          );
          var kls = q;
          var pack = kls.split("/")[0];
          var author2 = kls.split("/")[1];
          if (!q.trim()) return reply("Cadê o autor e o nome do pacote 🤔");
          if (!pack)
            return reply(
              `Por favor escreve o formato certo exemplo: ${
                prefix + command
              } LadyBot/𝘽𝙤𝙩`
            );
          if (!author2)
            return reply(
              `Por favor escreve o formato certo exemplo:\n\n${
                prefix + command
              } LadyBot/𝘽𝙤𝙩`
            );
          reply(Res_Aguarde);
          try {
            bas64 = `data:image/jpeg;base64,${encmediats.toString("base64")}`;
            var mantap = await convertSticker(bas64, `${author2}`, `${pack}`);
            var sti = Buffer.from(mantap, "base64");
            await conn.sendMessage(from, { sticker: sti }, { quoted: info });
          } catch (err) {
            console.error("Erro ao criar sticker:", err);
            reply(`❌️ Erro ao criar sticker: ${err.message}`);
          }
          break;

        case "fstiker":
        case "fsticker":
        case "f":
          var RSM =
            info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
          var boij =
            RSM?.imageMessage ||
            info.message?.imageMessage ||
            RSM?.viewOnceMessageV2?.message?.imageMessage ||
            info.message?.viewOnceMessageV2?.message?.imageMessage ||
            info.message?.viewOnceMessage?.message?.imageMessage ||
            RSM?.viewOnceMessage?.message?.imageMessage;
          var boij2 =
            RSM?.videoMessage ||
            info.message?.videoMessage ||
            RSM?.viewOnceMessageV2?.message?.videoMessage ||
            info.message?.viewOnceMessageV2?.message?.videoMessage ||
            info.message?.viewOnceMessage?.message?.videoMessage ||
            RSM?.viewOnceMessage?.message?.videoMessage;
          if (boij) {
            var pack = `⚝ ⇝ Solicitado por:\n⚝ ⇝ Bot:\n⚝ ⇝ Dono:`;
            var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`;
            reply(Res_Aguarde);
            owgi = await getFileBuffer(boij, "image");
            let encmediaa = await sendImageAsSticker(conn, from, owgi, info, {
              packname: pack,
              author: author2,
            });
            await DLT_FL(encmediaa);
          } else if (boij2 && boij2?.seconds < 11) {
            var pack = `⚝ ⇝ Solicitado por:\n⚝ ⇝ Bot:\n⚝ ⇝ Dono:`;
            var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`;
            reply(Res_Aguarde);
            owgi = await getFileBuffer(boij2, "video");
            let encmedia = await sendVideoAsSticker(conn, from, owgi, info, {
              packname: pack,
              author: author2,
            });
            await DLT_FL(encmedia);
          } else {
            reply(
              `Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 10 segundos)`
            );
          }
          break;

        case "figu":
          if (fs.existsSync(DF_TJ))
            return reply(
              "Aguarde um momento, e realize o pedido novamente, não seja tão rápido..."
            );
          var DF_TJ = "./datab/data/CVF.json";
          fs.writeFileSync(
            DF_TJ,
            JSON.stringify([
              isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .imageMessage
                : info.message.imageMessage || isQuotedVideo
                ? info.message.extendedTextMessage.contextInfo.quotedMessage
                    .videoMessage
                : info.message.videoMessage,
            ])
          );
          var PUXJ = JSON.parse(fs.readFileSync(DF_TJ));
          var DFN = PUXJ[0];
          DFN.sticker = { url: DFN.url };
          await delay(1200);
          DLT_FL(DF_TJ);
          conn.sendMessage(from, DFN);
          break;

        case "st":
        case "stk":
        case "sticker":
        case "s":
          var RSM =
            info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
          var boij2 =
            RSM?.imageMessage ||
            info.message?.imageMessage ||
            RSM?.viewOnceMessageV2?.message?.imageMessage ||
            info.message?.viewOnceMessageV2?.message?.imageMessage ||
            info.message?.viewOnceMessage?.message?.imageMessage ||
            RSM?.viewOnceMessage?.message?.imageMessage;
          var boij =
            RSM?.videoMessage ||
            info.message?.videoMessage ||
            RSM?.viewOnceMessageV2?.message?.videoMessage ||
            info.message?.viewOnceMessageV2?.message?.videoMessage ||
            info.message?.viewOnceMessage?.message?.videoMessage ||
            RSM?.viewOnceMessage?.message?.videoMessage;
          if (boij2) {
            var pack = `⚝ ⇝ Solicitado por:\n⚝ ⇝ Bot:\n⚝ ⇝ Dono:`;
            var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`;
            reply(Res_Aguarde);
            owgi = await getFileBuffer(boij2, "image");
            let encmediaa = await sendImageAsSticker2(conn, from, owgi, info, {
              packname: pack,
              author: author2,
            });
            await DLT_FL(encmediaa);
          } else if (boij && boij.seconds < 11) {
            var pack = `⚝ ⇝ Solicitado por:\n⚝ ⇝ Bot:\n⚝ ⇝ Dono:`;
            var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n⚒${NickDono}`;
            reply(Res_Aguarde);
            owgi = await getFileBuffer(boij, "video");
            let encmedia = await sendVideoAsSticker2(conn, from, owgi, info, {
              packname: pack,
              author: author2,
            });
            await DLT_FL(encmedia);
          } else {
            return reply(
              `Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando ${
                prefix + command
              }`
            );
          }
          break;

        case "rvvisu":
        case "rvvisuunica":
        case "revelarvisu":
        case "revelarvisuunica":
          {
            if (Os_Returns(false, true, false).true)
              return reply(Os_Returns(false, true, false).txt);
            try {
              var RSMM =
                info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
              var boij22 =
                RSMM?.imageMessage ||
                info.message?.imageMessage ||
                RSMM?.viewOnceMessageV2?.message?.imageMessage ||
                info.message?.viewOnceMessageV2?.message?.imageMessage ||
                info.message?.viewOnceMessage?.message?.imageMessage ||
                RSMM?.viewOnceMessage?.message?.imageMessage;
              var boijj =
                RSMM?.videoMessage ||
                info.message?.videoMessage ||
                RSMM?.viewOnceMessageV2?.message?.videoMessage ||
                info.message?.viewOnceMessageV2?.message?.videoMessage ||
                info.message?.viewOnceMessage?.message?.videoMessage ||
                RSMM?.viewOnceMessage?.message?.videoMessage;
              var boij33 =
                RSMM?.audioMessage ||
                info.message?.audioMessage ||
                RSMM?.viewOnceMessageV2?.message?.audioMessage ||
                info.message?.viewOnceMessageV2?.message?.audioMessage ||
                info.message?.viewOnceMessage?.message?.audioMessage ||
                RSMM?.viewOnceMessage?.message?.audioMessage;
              if (boijj) {
                var px = boijj;
                px.viewOnce = false;
                px.video = {
                  url: px.url,
                };
                await conn.sendMessage(from, px, {
                  quoted: info,
                });
              } else if (boij22) {
                var px = boij22;
                px.viewOnce = false;
                px.image = {
                  url: px.url,
                };
                await conn.sendMessage(from, px, {
                  quoted: info,
                });
              } else if (boij33) {
                var px = boij33;
                px.viewOnce = false;
                px.audio = {
                  url: px.url,
                };
                await conn.sendMessage(from, px, {
                  quoted: info,
                });
              } else {
                return reply(
                  "Por favor, *mencione uma imagem, video ou áudio em visualização única* para executar o comando."
                );
              }
            } catch (error) {
              await reply(messageJson?.error);
            }
          }
          break;

        case "toimg":
          if (!isQuotedSticker) return reply("❌ adesivo de resposta um ❌");
          try {
            reply(Res_Aguarde);
            buff = await getFileBuffer(
              info.message.extendedTextMessage.contextInfo.quotedMessage
                .stickerMessage,
              "sticker"
            );
            conn
              .sendMessage(from, { image: buff }, { quoted: info })
              .catch((e) => {
                console.log(e);
                reply("ERRO!!");
              });
          } catch {
            reply("Erro... 🥱");
          }
          break;

        //=============(LOGOS)=============\\

        //==========(PLAQUINHAS-LOGOS)===========\

        case "placaloli":
          if (!q.trim()) return reply("Exemplo: ${prefix+command} Lady");
          reply("Aguarde..");
          lod = await fetchJson(
            `https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`
          );
          sendStickerFromUrl(from, lod.message);
          break;

        //=======================================\\

        // LOGOS

        case "angelwing":
        case "hackneon":
        case "fpsmascote":
        case "equipemascote":
        case "txtquadrinhos":
        case "ffavatar":
        case "mascotegame":
        case "angelglx":
        case "gizquadro":
        case "wingeffect":
        case "blackpink":
        case "metalgold":
        case "girlmascote":
        case "logogame":
          try {
            if (!q.trim())
              return reply(
                `Digite algo, Exemplo: ${prefix + command} LadyBot`
              );
            reply(Res_Aguarde);
            ABC = await reqapi.logos_eph(q.trim(), command);
            conn
              .sendMessage(
                from,
                { image: { url: ABC.resultado } },
                { quoted: info }
              )
              .catch(() => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        case "fiction":
        case "3dstone":
        case "areia":
        case "style":
        case "blood":
        case "pink":
        case "cattxt":
        case "neondevil":
        case "carbon":
        case "metalfire":
        case "thunder":
        case "vidro":
        case "jokerlogo":
        case "transformer":
        case "demonfire":
        case "jeans":
        case "metalblue":
        case "natal":
        case "ossos":
        case "asfalto":
        case "break":
        case "glitch2":
        case "colaq":
        case "neon3":
        case "nuvem":
        case "horror":
        case "matrix":
        case "berry":
        case "luxury":
        case "lava":
        case "thunderv2":
        case "neongreen":
        case "neve":
        case "neon":
        case "neon1":
        case "neon3d":
        case "gelo":
        case "neon3":
        case "3dgold":
        case "lapis":
        case "toxic":
        case "demongreen":
        case "rainbow":
        case "halloween":
          try {
            if (!q.trim())
              return reply(
                `Digite algo, Exemplo: ${prefix + command} LadyBot 𝘽𝙤𝙩`
              );
            reply(Res_Aguarde);
            ABC = await reqapi.logos(q.trim(), command);
            bufferImg(ABC.resultado);
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        case "shadow":
        case "metalgold":
        case "cup":
        case "txtborboleta":
        case "cemiterio":
        case "efeitoneon":
        case "harryp":
        case "lobometal":
        case "neon2":
        case "madeira":
        case "lovemsg3":
        case "coffecup":
        case "coffecup2":
        case "florwooden":
        case "narutologo":
        case "fire":
        case "romantic":
        case "smoke":
        case "papel":
        case "lovemsg":
        case "lovemsg2":
          try {
            if (!q.trim())
              return reply(
                `Digite algo, Exemplo: ${prefix + command} LadyBot 𝘽𝙤𝙩`
              );
            reply(Res_Aguarde);
            ABC = await reqapi.logos_pht(q.trim(), command);
            conn
              .sendMessage(
                from,
                { image: { url: ABC.resultado.imageUrl } },
                { quoted: info }
              )
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        case "metadinha":
          try {
            ABC = await reqapi.metadinha();
            conn.sendMessage(from, { image: { url: ABC.link1 } }).catch(() => {
              return reply("Erro... 🥱");
            });
            conn.sendMessage(from, { image: { url: ABC.link2 } }).catch(() => {
              return reply("Erro... 🥱");
            });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        //========(SORTEIO-VOTAR-CASES)=========\\

        case "substituir":
          if (!SoDono && !isnit) return reply("Só dono..");
          if ((isMedia && !info.message.videoMessage) || isQuotedDocument) {
            media = isQuotedDocument
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .documentMessage
              : info.message.documentMessage;
            rane = getRandom("." + (await getExtension(media.mimetype)));
            doc = await getFileBuffer(media, "document");
            fs.writeFileSync(q, doc);
            conn.sendMessage(
              from,
              { text: "Substituido com sucesso.." },
              { quoted: info }
            );
          } else {
            reply("Marque o documento ou arquivo..");
          }
          break;

        case "index-dubot":
          if (!SoDono) return reply(Res_SoDono);
          if ((isMedia && !info.message.videoMessage) || isQuotedDocument) {
            media = isQuotedDocument
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .documentMessage
              : info.message.documentMessage;
            rane = getRandom("." + (await getExtension(media.mimetype)));
            doc = await getFileBuffer(media, "document");
            fs.writeFileSync("./index.js", doc);
            conn.sendMessage(
              from,
              { text: "Pronto novinha.." },
              { quoted: info }
            );
          } else {
            reply(
              "Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir.."
            );
          }
          break;

        case "mete":
          if (!SoDono)
            return reply("𝙎𝙤́ 𝙢𝙚𝙪 𝙢𝙚𝙨𝙩𝙧𝙚 𝙥𝙤𝙙𝙚 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 🖕🏿🤬");
          conn.sendMessage(from, {
            audio: { url: "./dados/audios/ban3.ogg" },
            mimetype: "audio/ogg; codecs=opus",
            ptt: true,
          });
          if (!isBotGroupAdmins) return reply(Res_BotADM);
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "𝙈𝙖𝙧𝙦𝙪𝙚 𝙖 𝙢𝙚𝙣𝙨𝙖𝙜𝙚𝙢 𝙙𝙤 𝙞𝙙𝙞𝙤𝙩𝙖 𝙤𝙪 𝙢𝙖𝙧𝙦𝙪𝙚 𝙤 @ 𝙙𝙚𝙡𝙚.., 𝙡𝙚𝙢𝙗𝙧𝙚 𝙙𝙚 𝙨𝙤́ 𝙢𝙖𝙧𝙘𝙖𝙧 𝙪𝙢 𝙩𝙧𝙤𝙪𝙭𝙖 𝙥𝙤𝙧 𝙫𝙚𝙯,𝙫𝙤𝙪 𝙛𝙞𝙘𝙖𝙧 𝙛𝙚𝙡𝙞𝙯 𝙙𝙚 𝙥𝙖𝙨𝙨𝙖𝙧 𝙖 𝙛𝙖𝙘𝙖 𝙣𝙚𝙡𝙚 😏͜🔪"
            );
          if (!JSON.stringify(groupMembers).includes(menc_os2))
            return reply(
              "𝙀𝙨𝙩𝙚 𝙩𝙧𝙤𝙪𝙭𝙖 𝙟𝙖́ 𝙡𝙚𝙫𝙤𝙪 𝙪𝙢 𝙥𝙚́ 𝙣𝙖 𝙗𝙪𝙣𝙙𝙖 𝙤𝙪 𝙨𝙖𝙞𝙪 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 🤣"
            );
          if (premium.includes(menc_os2))
            return mentions(
              `@${
                menc_os2.split("@")[0]
              } a(o) @${sender2} está querendo banir você, visualiza esse problema ae 😶`,
              [menc_os2],
              true
            );
          if (groupAdmins.includes(menc_os2))
            return mentions(
              `@${
                menc_os2.split("@")[0]
              } a(o) @${sender2} está querendo banir você, visualiza esse problema ae 😶`,
              [menc_os2],
              true
            );
          if (botNumber.includes(menc_os2))
            return reply(
              "𝙉𝙖̃𝙤 𝙨𝙤𝙪 𝙗𝙚𝙨𝙩𝙖 𝙙𝙚 𝙧𝙚𝙢𝙤𝙫𝙚𝙧 𝙚𝙪 𝙢𝙚𝙨𝙢𝙤 𝙣𝙚́ 🙁𝙀𝙨𝙩𝙤𝙪 𝙢𝙪𝙞𝙩𝙤 𝙙𝙚𝙘𝙚𝙥𝙘𝙞𝙤𝙣𝙖𝙙𝙤 𝙘𝙤𝙢 𝙫𝙤𝙘𝙚̂, 🥹"
            );
          if (numerodono.includes(menc_os2))
            return reply(
              "𝙉𝙖̃𝙤 𝙥𝙤𝙨𝙨𝙤 𝙧𝙚𝙢𝙤𝙫𝙚𝙧 𝙢𝙚𝙪 𝙙𝙤𝙣𝙤 𝙣𝙚́ 𝙨𝙚𝙪 𝙛𝙞𝙡𝙝𝙤 𝙙𝙖 𝙥𝙪𝙩𝙖 🖕🏿🤧"
            );
          conn.sendMessage(from, {
            text: `@${menc_os2.split("@")[0]} 𝘾𝘼𝙄 𝙁𝙊𝙍𝘼𝘿𝙀𝙎𝙂𝙍𝘼𝘾̧𝘼🏌🏻‍♂️`,
            mentions: [menc_os2],
          });
          conn.groupParticipantsUpdate(from, [menc_os2], "remove");
          break;

        case "nuke":
        case "arquivargp":
          if (!SoDono && !isnit)
            return reply("Só dono pode utilizar este comando...");
          if (!isBotGroupAdmins) return reply(Res_BotADM);
          if (info.key.fromMe) return;
          blup = [];
          for (i of groupMembers) {
            if (
              !numerodono.includes(i.id) &&
              !numerodono.includes(i.phoneNumber)
            )
              blup.push(i.id);
          }
          blup.splice(blup.indexOf(botNumber), 1);
          for (i = 0; i < blup.length; i++) {
            await sleep(500);
            conn.groupParticipantsUpdate(from, [blup[i]], "remove");
          }
          break;

        //==========(TTPS/ATTP)============\\

        case "attp":
        case "attp2":
          try {
            if (!q.trim())
              return reply(`Exemplo: ${prefix + command} LadyBot`);
            reply(Res_Aguarde);
            conn
              .sendMessage(
                from,
                { sticker: { url: reqapi.attp(q.trim(), command) } },
                { quoted: info }
              )
              .catch((e) => {
                return reply("Erro... 🥱");
              });
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        //======================================\\

        //===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

        case "gerarnick":
        case "fazernick":
        case "nick":
          try {
            if (ANT_LTR_MD_EMJ(q))
              return reply("Não pode letras modificadas nem emoji..");
            if (!q.trim())
              return reply(
                `Escreveva um nome para eu enviar ele com letras modificadas, Exemplo: ${
                  prefix + command
                } LadyBot`
              );
            ABC = await reqapi.gerarnick(q.trim());
            AB = `Lista com base no Nick informado, para encontrar melhor fonte para utilizar:\n\n`;
            for (i of ABC) {
              AB += `${i}\n\n`;
            }
            reply(AB);
          } catch (e) {
            return reply("Erro... 🥱");
          }
          break;

        case "chance":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          var avb = body.slice(7);
          if (args.length < 1)
            return conn.sendMessage(
              from,
              {
                text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`,
              },
              { quoted: info }
            );
          random = `${Math.floor(Math.random() * 100)}`;
          hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`;
          mention(hasil);
          break;

        case "nazista":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          conn.sendMessage(from, {
            text: `❰ Pesquisando a sua ficha de nazista : @${
              sender_ou_n.split("@")[0]
            } aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            conn.sendMessage(
              from,
              {
                image: { url: imgnazista },
                caption: `O quanto você é nazista? \n\n「 @${
                  sender_ou_n.split("@")[0]
                } 」Você é: ❰ ${random}% ❱nazista 卐`,
                mentions: [sender_ou_n],
              },
              { quoted: info }
            );
          }, 7000);
          break;

        case "golpe":
        case "golpista":
        case "dogolpe":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          conn.sendMessage(from, {
            text: `❰ Pesquisando a sua ficha de golpista : @${
              sender_ou_n.split("@")[0]
            } aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            conn.sendMessage(
              from,
              {
                image: { url: rnkgolpista },
                caption: `O quanto você é Golpista? \n\n「 @${
                  sender_ou_n.split("@")[0]
                } 」Você é: ❰ ${Math.floor(Math.random() * 110)}% ❱Golpista 😈`,
                mentions: [sender_ou_n],
              },
              { quoted: info }
            );
          }, 7000);
          break;

        case "gay":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          conn.sendMessage(from, {
            text: `❰ Pesquisando a sua ficha de gay : @${
              sender_ou_n.split("@")[0]
            } aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = Math.floor(Math.random() * 110);
            feio = random;
            boiola = random;
            if (boiola < 20) {
              var bo = "hmm... você é hetero😔";
            } else if (boiola == 21) {
              var bo = "+/- boiola";
            } else if (boiola == 23) {
              var bo = "+/- boiola";
            } else if (boiola == 24) {
              var bo = "+/- boiola";
            } else if (boiola == 25) {
              var bo = "+/- boiola";
            } else if (boiola == 26) {
              var bo = "+/- boiola";
            } else if (boiola == 27) {
              var bo = "+/- boiola";
            } else if (boiola == 2) {
              var bo = "+/- boiola";
            } else if (boiola == 29) {
              var bo = "+/- boiola";
            } else if (boiola == 30) {
              var bo = "+/- boiola";
            } else if (boiola == 31) {
              var bo = "tenho minha desconfiança...😑";
            } else if (boiola == 32) {
              var bo = "tenho minha desconfiança...😑";
            } else if (boiola == 33) {
              var bo = "tenho minha desconfiança...😑";
            } else if (boiola == 34) {
              var bo = "tenho minha desconfiança...😑";
            } else if (boiola == 35) {
              var bo = "tenho minha desconfiança...😑";
            } else if (boiola == 36) {
              var bo = "tenho minha desconfiança...😑";
            } else if (boiola == 37) {
              var bo = "tenho minha desconfiança...😑";
            } else if (boiola == 3) {
              var bo = "tenho minha desconfiança...😑";
            } else if (boiola == 39) {
              var bo = "tenho minha desconfiança...😑";
            } else if (boiola == 40) {
              var bo = "tenho minha desconfiança...😑";
            } else if (boiola == 41) {
              var bo = "você é né?😏";
            } else if (boiola == 42) {
              var bo = "você é né?😏";
            } else if (boiola == 43) {
              var bo = "você é né?😏";
            } else if (boiola == 44) {
              var bo = "você é né?😏";
            } else if (boiola == 45) {
              var bo = "você é né?😏";
            } else if (boiola == 46) {
              var bo = "você é né?😏";
            } else if (boiola == 47) {
              var bo = "você é né?😏";
            } else if (boiola == 4) {
              var bo = "você é né?😏";
            } else if (boiola == 49) {
              var bo = "você é né?😏";
            } else if (boiola == 50) {
              var bo = "você é ou não?🧐";
            } else if (boiola > 51) {
              var bo = "você é gay🙈";
            }
            conn.sendMessage(
              from,
              {
                image: { url: imggay },
                caption: `O quanto você é gay? \n\n 「 @${
                  sender_ou_n.split("@")[0]
                } 」Você é: ❰ ${random}% ❱ gay 🏳️‍🌈\n\n${bo}`,
                mentions: [sender_ou_n],
                thumbnail: null,
              },
              { quoted: info }
            );
          }, 7000);
          break;

        case "feio":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          conn.sendMessage(from, {
            text: `❰ Pesquisando a sua ficha de feio : @${
              sender_ou_n.split("@")[0]
            } aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            feio = random;
            if (feio < 20) {
              var bo = "É não é feio";
            } else if (feio == 21) {
              var bo = "+/- feio";
            } else if (feio == 23) {
              var bo = "+/- feio";
            } else if (feio == 24) {
              var bo = "+/- feio";
            } else if (feio == 25) {
              var bo = "+/- feio";
            } else if (feio == 26) {
              var bo = "+/- feio";
            } else if (feio == 27) {
              var bo = "+/- feio";
            } else if (feio == 2) {
              var bo = "+/- feio";
            } else if (feio == 29) {
              var bo = "+/- feio";
            } else if (feio == 30) {
              var bo = "+/- feio";
            } else if (feio == 31) {
              var bo = "Ainda tá na média";
            } else if (feio == 32) {
              var bo = "Da pra pegar umas(ns) novinha(o) ainda";
            } else if (feio == 33) {
              var bo = "Da pra pegar umas(ns) novinha(o) ainda";
            } else if (feio == 34) {
              var bo = "É fein, mas tem baum coração";
            } else if (feio == 35) {
              var bo = "Tá na média, mas não deixa de ser feii";
            } else if (feio == 36) {
              var bo = "Bonitin mas é feio com orgulho";
            } else if (feio == 37) {
              var bo = "Feio e preguiçoso(a), vai se arrumar praga feia";
            } else if (feio == 3) {
              var bo = "tenho ";
            } else if (feio == 39) {
              var bo = "Feio, mas um banho E se arrumar, deve resolver";
            } else if (feio == 40) {
              var bo =
                "FeiN,mas não existe gente feia, existe gente que não conhece os produtos jequity";
            } else if (feio == 41) {
              var bo = "você é Feio, mas é legal, continue assim";
            } else if (feio == 42) {
              var bo =
                "Nada que uma maquiagem e se arrumar, que não resolva 🥴";
            } else if (feio == 43) {
              var bo = "Feio que dói de ver, compra uma máscara que melhora";
            } else if (feio == 44) {
              var bo = "Feio mas nada que um saco na cabeça não resolva né!?";
            } else if (feio == 45) {
              var bo = "você é feio, mas tem bom gosto";
            } else if (feio == 46) {
              var bo = "Feio mas tem muitos amigos";
            } else if (feio == 47) {
              var bo = "Feio mas tem lábia pra pegar várias novinha";
            } else if (feio == 4) {
              var bo = "Feio e ainda não sabe se vestir, vixi";
            } else if (feio == 49) {
              var bo = "Feiooo";
            } else if (feio == 50) {
              var bo = "você é Feio, mas não se encherga 🧐";
            } else if (feio > 51) {
              var bo = "você é Feio demais 🙈";
            }

            conn.sendMessage(
              from,
              {
                image: { url: imgfeio },
                caption: `O quanto você é feio? \n\n 「 @${
                  sender_ou_n.split("@")[0]
                } 」Você é: ❰ ${random}% ❱ feio 🙉\n\n${bo}`,
                mentions: [sender_ou_n],
                thumbnail: null,
              },
              { quoted: info }
            );
          }, 7000);
          break;

        case "corno":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          conn.sendMessage(from, {
            text: ` ❰ Pesquisando a ficha de corno : @${
              sender_ou_n.split("@")[0]
            }, aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            conn.sendMessage(
              from,
              {
                image: { url: imgcorno },
                caption: ` O quanto você é corno? \n\n 「 @${
                  sender_ou_n.split("@")[0]
                } 」Você é: ❰ ${random}% ❱corno 🐃`,
                mentions: [sender_ou_n],
              },
              { quoted: info }
            );
          }, 7000);
          break;

        case "vesgo":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          conn.sendMessage(from, {
            text: `❰ Pesquisando a ficha de vesgo : @${
              sender_ou_n.split("@")[0]
            }, aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            conn.sendMessage(
              from,
              {
                image: { url: imgvesgo },
                caption: `O quanto você é vesgo? \n\n「 @${
                  sender_ou_n.split("@")[0]
                } 」Você é: ❰ ${random}% ❱Vesgo 🙄😆`,
                mentions: [sender_ou_n],
              },
              { quoted: info }
            );
          }, 7000);
          break;

        case "bebado":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          conn.sendMessage(from, {
            text: `❰ Pesquisando a ficha de bebado : @${
              sender_ou_n.split("@")[0]
            } , aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            conn.sendMessage(
              from,
              {
                image: { url: imgbebado },
                caption: `O quanto você é bebado? \n\n「 @${
                  sender_ou_n.split("@")[0]
                } 」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`,
                mentions: [sender_ou_n],
              },
              { quoted: info }
            );
          }, 7000);
          break;

        case "gado":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          conn.sendMessage(from, {
            text: `❰ Pesquisando a ficha de gado : @${
              sender_ou_n.split("@")[0]
            }, aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            conn.sendMessage(
              from,
              {
                image: { url: imggado },
                caption: `O quanto você é gado? \n\n「 @${
                  sender_ou_n.split("@")[0]
                } 」Você é: ❰ ${random}% ❱gado 🐂`,
                mentions: [sender_ou_n],
              },
              { quoted: info }
            );
          }, 7000);
          break;

        case "gostoso":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          conn.sendMessage(from, {
            text: ` ❰ Pesquisando a sua ficha de gostoso : @${
              sender_ou_n.split("@")[0]
            } aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            conn.sendMessage(
              from,
              {
                image: { url: imggostoso },
                caption: `O quanto você é gostoso? 😏\n\n「 @${
                  sender_ou_n.split("@")[0]
                } 」Você é: ❰ ${random}% ❱ gostoso 😝`,
                gifPlayback: true,
                mentions: [sender_ou_n],
              },
              { quoted: info }
            );
          }, 7000);
          break;

        case "gostosa":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          conn.sendMessage(from, {
            text: `❰ Pesquisando a sua ficha de gostosa : @${
              sender_ou_n.split("@")[0]
            } aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            conn.sendMessage(
              from,
              {
                image: { url: imggostosa },
                caption: `O quanto você é gostosa? 😏\n\n「 @${
                  sender_ou_n.split("@")[0]
                } 」Você é: ❰ ${random}% ❱ gostosa 😳`,
                mentions: [sender_ou_n],
              },
              { quoted: info }
            );
          }, 7000);
          break;

        case "matar":
        case "mata":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "marque o alvo que você quer matar, a mensagem ou o @"
            );
          conn.sendMessage(
            from,
            {
              video: { url: matarcmd },
              gifPlayback: true,
              caption: `Você Acabou de matar o(a) @${
                menc_os2.split("@")[0]
              } 😈👹`,
              mentions: [menc_os2],
            },
            { quoted: info }
          );
          break;

        case "beijo":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "marque a pessoa que você quer beijar, a mensagem ou o @"
            );
          conn.sendMessage(
            from,
            {
              video: { url: beijocmd },
              gifPlayback: true,
              caption: `Você deu um beijo gostoso na(o) @${
                menc_os2.split("@")[0]
              } 😁👉👈❤`,
              mentions: [menc_os2],
            },
            { quoted: info }
          );
          break;

        case "biografia":
          try {
            var status = await conn.fetchStatus(marc_tds);
          } catch {
            var status = "Privado ou inexistente. ";
          }
          reply(status);
          break;

        case "tapa":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "marque o alvo que você quer da um tapa, a mensagem ou o @"
            );
          conn.sendMessage(
            from,
            {
              video: { url: tapacmd },
              gifPlayback: true,
              caption: `Você Acabou de da um tapa na raba da😏 @${
                menc_os2.split("@")[0]
              } 🔥`,
              mentions: [menc_os2],
            },
            { quoted: info }
          );
          break;

        case "chute":
        case "chutar":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "marque o alvo que você quer da um chute, a mensagem ou o @"
            );
          conn.sendMessage(
            from,
            {
              video: { url: chutecmd },
              gifPlayback: true,
              caption: `Você Acabou de da um chute em @${
                menc_os2.split("@")[0]
              } 🤡`,
              mentions: [menc_os2],
            },
            { quoted: info }
          );
          break;

        case "dogolpe":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque a mensagem com o comando ou marque o @ do usuário.."
            );
          random = `${Math.floor(Math.random() * 100)}`;
          conn.sendMessage(from, {
            text: `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *@${
              menc_os2.split("@")[0]
            }*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`,
            mentions: [menc_os2],
          });
          break;

        case "casal":
        case "shippo":
        case "shipo":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!groupMembers || groupMembers.length === 0) {
            return reply(
              "❌ Não foi possível obter a lista de membros do grupo."
            );
          }
          let mnt = [];
          let mr_u = [];
          rn = menc_prt
            ? menc_prt
            : menc_jid2?.length > 1
            ? menc_jid2[0]
            : getParticipantId(
                groupMembers[Math.floor(Math.random() * groupMembers.length)]
              );
          rn2 =
            menc_prt && !menc_jid2
              ? getParticipantId(
                  groupMembers[Math.floor(Math.random() * groupMembers.length)]
                )
              : menc_jid2?.length == 1
              ? menc_jid2[0]
              : menc_jid2?.length > 1
              ? menc_jid2[1]
              : getParticipantId(
                  groupMembers[Math.floor(Math.random() * groupMembers.length)]
                );
          var AB = `${TEXTOS_GERAL.TEXTO_COMANDO_CASAL.replaceAll(
            "#porcentagem#",
            Math.floor(Math.random() * 100) + "%"
          )}\n\n☈ 💑 @${rn?.split("@")[0]}\nﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ\n☈ 💑 @${
            rn2?.split("@")[0]
          }\n\nBot: ${NomeDoBot}`;
          mnt.push(rn);
          mnt.push(rn2);
          conn.sendMessage(from, {
            image: { url: TEXTOS_GERAL.LINK_COMANDO_CASAL },
            caption: AB,
            mentions: mnt,
          });
          break;

        case "rankativos":
        case "rankativo":
          if (!isGroup) return reply(Res_SoGrupo);
          await LIMPARDOCNT_QUEMJASAIU();
          var i3 = countMessage.map((i) => i.groupId).indexOf(from);
          if (i3 < 0) {
            return reply(
              "❌ O bot não tem dados de atividade deste grupo ainda."
            );
          }
          if (
            !countMessage[i3].numbers ||
            countMessage[i3].numbers.length === 0
          ) {
            return reply("❌ Nenhuma atividade registrada neste grupo ainda.");
          }
          var blue = countMessage[i3].numbers.map((i) => i);
          blue.sort((a, b) =>
            (a.figus == undefined
              ? (a.figus = 0)
              : a.figus + a.messages + a.cmd_messages) <
            (b.figus == undefined
              ? (b.figus = 0)
              : b.figus + b.cmd_messages + b.messages)
              ? 0
              : -1
          );
          menc = [];
          blad = `
┌────────────────┐
│ RANK DE MAIS ATIVOS DO GRUPO\n`;
          for (i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
            if (i != null && blue[i]) {
              const participantId = blue[i].id || "";
              const participantNumber = participantId
                ? participantId.split("@")[0]
                : "Desconhecido";
              blad += `
┌───────────────
│ ${i + 1}º : @${participantNumber}
└─────
 ༺ Mensagens: ${blue[i].messages || 0}\n ༺ Comandos dados: ${
                blue[i].cmd_messages || 0
              }\n ༺ Conectado em: ${
                blue[i].aparelho || "Desconhecido"
              }\n ༺ Figurinhas: ${blue[i].figus || 0}\n└────────────\n`;
              if (participantId) menc.push(participantId);
            }
          }
          mentions(blad, menc, true);
          break;

        case "checkativo":
          if (!isGroup) return reply(Res_SoGrupo);
          await LIMPARDOCNT_QUEMJASAIU();
          var ind = groupIdscount.indexOf(from);
          if (ind < 0) {
            return reply(
              "❌ O bot não tem dados de atividade deste grupo ainda."
            );
          }
          if (!menc_os2 || menc_jid2[1]) {
            return reply(
              "❌ Marque o @ de quem deseja puxar a atividade / Só pode um por vez.."
            );
          }
          var indnum = numbersIds.indexOf(menc_os2);
          if (indnum >= 0 && countMessage[ind].numbers[indnum]) {
            var RSM_CN = countMessage[ind].numbers[indnum];
            const participantNumber = menc_os2
              ? menc_os2.split("@")[0]
              : "Desconhecido";
            mentions(
              `𵣘⃟ᵒ Consulta das atividade de\n𵣘⃟ᵒ @${participantNumber} no grupo: ${groupName}\n𵣘⃟ᵒ Mensagens: ${
                RSM_CN.messages || 0
              }\n𵣘⃟ᵒ Comandos dados: ${
                RSM_CN.cmd_messages || 0
              }\n𵣘⃟ᵒ Conectado em: ${
                RSM_CN.aparelho || "Desconhecido"
              }\n𵣘⃟ Figurinhas: ${RSM_CN.figus || 0}`,
              [menc_os2],
              true
            );
          } else {
            const participantNumber = menc_os2
              ? menc_os2.split("@")[0]
              : "Desconhecido";
            mentions(
              `⋆⃟ۣۜᵪ➜ Consulta da atividade de ⋆⃟ۣۜᵪ➜ @${participantNumber} no grupo\n⋆⃟ۣۜᵪ➜ Mensagens: 0\n⋆⃟ۣۜᵪ➜ Comandos dados: 0`,
              [menc_os2],
              true
            );
          }
          break;

        case "rankgay":
        case "rankgays":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!groupMembers || groupMembers.length === 0) {
            return reply(
              "❌ Não foi possível obter a lista de membros do grupo."
            );
          }
          ABC = `*🤖RANK DOS 5 MAIS GAYS DO GRUPO [ ${groupName} ]🏳️‍🌈*\n\n`;
          const selectedMembersGay = [];
          for (var i = 0; i < 5; i++) {
            const randomParticipant =
              groupMembers[Math.floor(Math.random() * groupMembers.length)];
            const participantId = getParticipantId(randomParticipant);
            if (participantId) {
              const participantNumber = participantId.split("@")[0];
              ABC += `${Math.floor(
                Math.random() * 100
              )}% @${participantNumber}\n\n`;
              selectedMembersGay.push(participantId);
            }
          }
          conn.sendMessage(from, {
            image: { url: rnkgay },
            caption: ABC.trim(),
            mentions: selectedMembersGay,
          });
          break;

        case "rankgado":
        case "rankgados":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!groupMembers || groupMembers.length === 0) {
            return reply(
              "❌ Não foi possível obter a lista de membros do grupo."
            );
          }
          ABC = `RANK DOS 5 MAIS GADO DO GRUPO 🐂🐃\n\n`;
          const selectedMembersGado = [];
          for (var i = 0; i < 5; i++) {
            const randomParticipant =
              groupMembers[Math.floor(Math.random() * groupMembers.length)];
            const participantId = getParticipantId(randomParticipant);
            if (participantId) {
              const participantNumber = participantId.split("@")[0];
              ABC += `${Math.floor(
                Math.random() * 100
              )}% @${participantNumber}\n\n`;
              selectedMembersGado.push(participantId);
            }
          }
          conn.sendMessage(from, {
            image: { url: rnkgado },
            caption: ABC.trim(),
            mentions: selectedMembersGado,
          });
          break;

        case "rankcorno":
        case "rankcornos":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!groupMembers || groupMembers.length === 0) {
            return reply(
              "❌ Não foi possível obter a lista de membros do grupo."
            );
          }
          ABC = `RANK DOS 5 MAIS CORNO DO GRUPO 🐂\n\n`;
          const selectedMembersCorno = [];
          for (var i = 0; i < 5; i++) {
            const randomParticipant =
              groupMembers[Math.floor(Math.random() * groupMembers.length)];
            const participantId = getParticipantId(randomParticipant);
            if (participantId) {
              const participantNumber = participantId.split("@")[0];
              ABC += `${Math.floor(
                Math.random() * 100
              )}% @${participantNumber}\n\n`;
              selectedMembersCorno.push(participantId);
            }
          }
          conn.sendMessage(from, {
            image: { url: rnkcorno },
            caption: ABC.trim(),
            mentions: selectedMembersCorno,
          });
          break;

        case "rankgostosos":
        case "rankgostoso":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!groupMembers || groupMembers.length === 0) {
            return reply(
              "❌ Não foi possível obter a lista de membros do grupo."
            );
          }
          ABC = `RANK DOS 5 MAIS GOSTOSOS DO GRUPO 😏🔥\n\n`;
          const selectedMembersGostoso = [];
          for (var i = 0; i < 5; i++) {
            const randomParticipant =
              groupMembers[Math.floor(Math.random() * groupMembers.length)];
            const participantId = getParticipantId(randomParticipant);
            if (participantId) {
              const participantNumber = participantId.split("@")[0];
              ABC += `${Math.floor(
                Math.random() * 100
              )}% @${participantNumber}\n\n`;
              selectedMembersGostoso.push(participantId);
            }
          }
          conn.sendMessage(from, {
            image: { url: rnkgostoso },
            caption: ABC.trim(),
            mentions: selectedMembersGostoso,
          });
          break;

        case "rankgostosas":
        case "rankgostosa":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!groupMembers || groupMembers.length === 0) {
            return reply(
              "❌ Não foi possível obter a lista de membros do grupo."
            );
          }
          ABC = `RANK DAS 5 MAIS GOSTOSAS DO GRUPO 😏🔥\n\n`;
          const selectedMembersGostosa = [];
          for (var i = 0; i < 5; i++) {
            const randomParticipant =
              groupMembers[Math.floor(Math.random() * groupMembers.length)];
            const participantId = getParticipantId(randomParticipant);
            if (participantId) {
              const participantNumber = participantId.split("@")[0];
              ABC += `${Math.floor(
                Math.random() * 100
              )}% @${participantNumber}\n\n`;
              selectedMembersGostosa.push(participantId);
            }
          }
          conn.sendMessage(from, {
            image: { url: rnkgostosa },
            caption: ABC.trim(),
            mentions: selectedMembersGostosa,
          });
          break;

        case "rankkenga":
        case "rankkengas":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!groupMembers || groupMembers.length === 0) {
            return reply(
              "❌ Não foi possível obter a lista de membros do grupo."
            );
          }
          ABC = `RANK DAS 5 MAIS KENGAS DO GRUPO 👱‍♀️🔥\n\n`;
          const selectedMembersKenga = [];
          for (var i = 0; i < 5; i++) {
            const randomParticipant =
              groupMembers[Math.floor(Math.random() * groupMembers.length)];
            const participantId = getParticipantId(randomParticipant);
            if (participantId) {
              const participantNumber = participantId.split("@")[0];
              ABC += `${Math.floor(
                Math.random() * 100
              )}% @${participantNumber}\n\n`;
              selectedMembersKenga.push(participantId);
            }
          }
          conn.sendMessage(from, {
            image: { url: rnkgostosa },
            caption: ABC.trim(),
            mentions: selectedMembersKenga,
          });
          break;

        case "ranknazista":
        case "ranknazistas":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!groupMembers || groupMembers.length === 0) {
            return reply(
              "❌ Não foi possível obter a lista de membros do grupo."
            );
          }
          ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n\n`;
          const selectedMembersNazista = [];
          for (var i = 0; i < 5; i++) {
            const randomParticipant =
              groupMembers[Math.floor(Math.random() * groupMembers.length)];
            const participantId = getParticipantId(randomParticipant);
            if (participantId) {
              const participantNumber = participantId.split("@")[0];
              ABC += `${Math.floor(
                Math.random() * 100
              )}% @${participantNumber}\n\n`;
              selectedMembersNazista.push(participantId);
            }
          }
          conn.sendMessage(from, {
            image: { url: rnknazista },
            caption: ABC.trim(),
            mentions: selectedMembersNazista,
          });
          break;

        case "rankgolpe":
        case "rankgolpista":
        case "rankgolpistas":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!groupMembers || groupMembers.length === 0) {
            return reply(
              "❌ Não foi possível obter a lista de membros do grupo."
            );
          }
          ABC = `*🦹‍♂️ RANK DOS 5 MAIS GOLPISTA DO GRUPO 😈*\n\n`;
          const selectedMembersGolpista = [];
          for (var i = 0; i < 5; i++) {
            const randomParticipant =
              groupMembers[Math.floor(Math.random() * groupMembers.length)];
            const participantId = getParticipantId(randomParticipant);
            if (participantId) {
              const participantNumber = participantId.split("@")[0];
              ABC += `${Math.floor(
                Math.random() * 100
              )}% @${participantNumber}\n\n`;
              selectedMembersGolpista.push(participantId);
            }
          }
          conn.sendMessage(from, {
            image: { url: rnkgolpista },
            caption: ABC.trim(),
            mentions: selectedMembersGolpista,
          });
          break;

        case "rankotaku":
        case "rankotakus":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!groupMembers || groupMembers.length === 0) {
            return reply(
              "❌ Não foi possível obter a lista de membros do grupo."
            );
          }
          ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˖•̀ _•́ ˖)*\n\n`;
          const selectedMembersOtaku = [];
          for (var i = 0; i < 5; i++) {
            const randomParticipant =
              groupMembers[Math.floor(Math.random() * groupMembers.length)];
            const participantId = getParticipantId(randomParticipant);
            if (participantId) {
              const participantNumber = participantId.split("@")[0];
              ABC += `${Math.floor(
                Math.random() * 100
              )}% @${participantNumber}\n\n`;
              selectedMembersOtaku.push(participantId);
            }
          }
          conn.sendMessage(from, {
            image: { url: rnkotaku },
            caption: ABC.trim(),
            mentions: selectedMembersOtaku,
          });
          break;

        case "rankpau":
          if (!isGroup) return reply(Res_SoGrupo);
          if (!isModobn) return reply(Res_SoModoBN);
          if (!groupMembers || groupMembers.length === 0) {
            return reply(
              "❌ Não foi possível obter a lista de membros do grupo."
            );
          }
          ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n\n`;
          TMPAU = [
            "Pequeno pra cact, se mata maluco 🥴",
            `Pequenininho chega ser até fofo 🥺`,
            `Menor que meu dedo mindinho pequeno demais 😑`,
            `Até que dá sentir, tá na média 😌`,
            `Grandinho 🥵`,
            `Grande até `,
            `Gigantesco igual meu braço 😖`,
            `Enorme quase chega no útero 🤧`,
            `Grandão demais em, e uii 🤯`,
            `Vara de pegar manga, grande demais, como sai na rua assim??`,
            "Que grandão em, nasceu metade animal 😳",
          ];
          const selectedMembersPau = [];
          for (var i = 0; i < 5; i++) {
            const randomParticipant =
              groupMembers[Math.floor(Math.random() * groupMembers.length)];
            const participantId = getParticipantId(randomParticipant);
            if (participantId) {
              const participantNumber = participantId.split("@")[0];
              ABC += `${
                TMPAU[Math.floor(Math.random() * TMPAU.length)]
              } _- @${participantNumber}\n\n`;
              selectedMembersPau.push(participantId);
            }
          }
          conn.sendMessage(from, {
            image: { url: rnkpau },
            caption: ABC.trim(),
            mentions: selectedMembersPau,
          });
          break;

        case "jogodavelha":
          if (!isModobn) return reply(Res_SoModoBN);
          if (!isGroup) return reply(Res_SoGrupo);
          if (!menc_jid2)
            return reply(
              "Marque junto com o comando, o @ da pessoa que deseja desafiar.."
            );
          if (JOGO_D_V != false) {
            const boardnow = await setGame(`${from}`);
            const matrix = boardnow._matrix;
            if (!boardnow.X && !boardnow.O) {
              DLT_FL("./dados/org/tictactoe/db/" + from + ".json");
              return reply(
                `Jogo da vovó foi resetado, faça o desafio novamente para o usuário, tive um imprevisto na hora de calcular os dados, e então acabei não registrando ninguém, desculpe o ocorrido.`
              );
            }
            const chatMove = `*🎮ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
 
[❗] Alguém está jogando no momento...\n\n@${boardnow.X.split("@")[0]} VS @${
              boardnow.O.split("@")[0]
            }
 
❌ : @${boardnow.X.split("@")[0]}
⭕ : @${boardnow.O.split("@")[0]}
 
 Sua vez : @${(boardnow.turn == "X" ? boardnow.X : boardnow.O).split("@")[0]}
 
${matrix[0][0]}${matrix[0][1]}${matrix[0][2]}
${matrix[1][0]}${matrix[1][1]}${matrix[1][2]}
${matrix[2][0]}${matrix[2][1]}${matrix[2][2]}

caso queira resetar o jogo, mande um adm ou os jogadores que estão jogando utilizar o comando ${prefix}rv
`;
            const mentions_array = [boardnow.X, boardnow.O];
            conn.sendMessage(
              from,
              {
                text: chatMove,
                mentions: mentions_array,
              },
              { quoted: info }
            );
            return;
          }
          if (!menc_jid2 || menc_jid2.length === 0)
            return reply(`*⟨❗⟩ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
          const boardnow = setGame(`${from}`);
          console.log(`Start No jogodavelha ${boardnow.session}`);
          boardnow.status = false;
          boardnow.X = sender; // Manter JID completo
          boardnow.O = menc_jid2[0]; // Usar menc_jid2[0] ao invés de argss[1]
          var blabord = [`${boardnow.X}`, `${boardnow.O}`];
          fs.writeFileSync(
            `./dados/org/tictactoe/db/${from}.json`,
            JSON.stringify(boardnow, null, 2)
          );
          const strChat = `*『📌ᎬᏕᏒᎬᏕᎪᏂᎠᏃ Ꭳ ᎣᏒᎣᏂᎬᏂᎲᎬ⚔️』*
 
@${
            sender.split("@")[0]
          } _está te desafiando para uma partida de jogo da velha..._
_[ @${
            menc_jid2[0].split("@")[0]
          } ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
          conn.sendMessage(
            from,
            {
              text: strChat,
              mentions: [sender, menc_jid2[0]],
            },
            { quoted: info }
          );
          break;

        case "resetarvelha":
        case "resetavelha":
        case "resetarv":
        case "resetav":
        case "resetvelha":
        case "rv":
          if (
            !sender.includes(JOGO_D_V?.X) &&
            !sender.includes(JOGO_D_V?.O) &&
            !isGroupAdmins
          )
            return reply(`Fale com algum dos jogadores que jogaram ou espere eles terminar para
você jogar, se não tiver nenhum dos 2 online, fale com algum adm para digitar ${prefix}rv para resetar o jogo.`);
          if (fs.existsSync("./dados/org/tictactoe/db/" + from + ".json")) {
            DLT_FL("./dados/org/tictactoe/db/" + from + ".json");
            reply(`Jogo da vovó resetado com sucesso nesse grupo!`);
          } else {
            reply(`Não a nenhuma sessão em andamento...`);
          }
          break;

        case "ppt":
          if (!isModobn) return reply(Res_SoModoBN);
          if (args.length < 1)
            return reply(
              `Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`
            );
          ppt = ["pedra", "papel", "tesoura"];
          ppy = ppt[Math.floor(Math.random() * ppt.length)];
          ppg = Math.floor(Math.random() * 1) + 10;
          pptb = ppy;
          if (
            (pptb == "pedra" && args == "papel") ||
            (pptb == "papel" && args == "tesoura") ||
            (pptb == "tesoura" && args == "pedra")
          ) {
            var vit = "vitoria";
          } else if (
            (pptb == "pedra" && args == "tesoura") ||
            (pptb == "papel" && args == "pedra") ||
            (pptb == "tesoura" && args == "papel")
          ) {
            var vit = "derrota";
          } else if (
            (pptb == "pedra" && args == "pedra") ||
            (pptb == "papel" && args == "papel") ||
            (pptb == "tesoura" && args == "tesoura")
          ) {
            var vit = "empate";
          } else if ((vit = "undefined")) {
            return reply(
              `Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`
            );
          }
          if (vit == "vitoria") {
            var tes = "Vitória do jogador";
          }
          if (vit == "derrota") {
            var tes = "A vitória é do BOT";
          }
          if (vit == "empate") {
            var tes = "O jogo terminou em empate";
          }
          reply(
            `${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`
          );
          break;

        //==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

        case "bot":
          conn.sendMessage(
            from,
            {
              audio: { url: "./dados/audios/bot.ogg" },
              mimetype: "audio/ogg; codecs=opus",
              ptt: true,
            },
            { quoted: info }
          );
          break;

        case "infobot":
          conn.sendMessage(
            from,
            {
              audio: { url: "./dados/audios/infobot.ogg" },
              mimetype: "audio/ogg; codecs=opus",
              ptt: true,
            },
            { quoted: info }
          );
          break;

        //=======================================\\

        //=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

        case "videocontrario":
        case "reversevid":
          if (
            ((isMedia && info.message.videoMessage) || !isQuotedImage) &&
            !q.length <= 1
          ) {
            reply(Res_Aguarde);
            encmedia = isQuotedVideo
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .videoMessage
              : info.message.videoMessage;
            rane = getRandom("." + (await getExtension(encmedia.mimetype)));
            buffimg = await getFileBuffer(encmedia, "video");
            fs.writeFileSync(rane, buffimg);
            media = rane;
            ran = getRandom(".mp4");
            exec(
              `ffmpeg -i ${media} -vf reverse -af areverse ${ran}`,
              (err) => {
                DLT_FL(media);
                if (err) return reply(`Err: ${err}`);
                buffer453 = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { video: buffer453, mimetype: "video/mp4" },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque um vídeo..");
          }
          break;

        case "videolento":
        case "slowvid":
          if (
            ((isMedia && info.message.videoMessage) || !isQuotedImage) &&
            !q.length <= 1
          ) {
            reply(Res_Aguarde);
            encmedia = isQuotedVideo
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .videoMessage
              : info.message.videoMessage;
            rane = getRandom("." + (await getExtension(encmedia.mimetype)));
            buffimg = await getFileBuffer(encmedia, "video");
            fs.writeFileSync(rane, buffimg);
            media = rane;
            ran = getRandom(".mp4");
            exec(
              `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
              (err) => {
                DLT_FL(media);
                if (err) return reply(`Err: ${err}`);
                buffer453 = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { video: buffer453, mimetype: "video/mp4" },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque um vídeo..");
          }
          break;

        case "videorapido":
        case "fastvid":
          if (
            ((isMedia && info.message.videoMessage) || !isQuotedImage) &&
            !q.length <= 1
          ) {
            reply(Res_Aguarde);
            encmedia = isQuotedVideo
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .videoMessage
              : info.message.videoMessage;
            rane = getRandom("." + (await getExtension(encmedia.mimetype)));
            buffimg = await getFileBuffer(encmedia, "video");
            fs.writeFileSync(rane, buffimg);
            media = rane;
            ran = getRandom(".mp4");
            exec(
              `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
              (err) => {
                DLT_FL(media);
                if (err) return reply(`Err: ${err}`);
                buffer453 = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { video: buffer453, mimetype: "video/mp4" },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque o vídeo..");
          }
          break;

        case "audiocontrario":
        case "audioreverse":
          if (
            (isMedia &&
              !info.message.imageMessage &&
              !info.message.videoMessage) ||
            isQuotedAudio
          ) {
            reply(Res_Aguarde);
            encmedia = isQuotedAudio
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .audioMessage
              : info.message.audioMessage;
            rane = getRandom("." + (await getExtension(encmedia.mimetype)));
            buffimg = await getFileBuffer(encmedia, "audio");
            fs.writeFileSync(rane, buffimg);
            media = rane;
            ran = getRandom(".mp3");
            exec(
              `ffmpeg -i ${media} -vf reverse -af areverse ${ran}`,
              (err) => {
                DLT_FL(media);
                if (err) return reply(`Err: ${err}`);
                buffer453 = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buffer453, mimetype: "audio/mpeg" },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque um audio..");
          }
          break;

        case "transcrever":
          {
            if (
              (isMedia &&
                !info.message.imageMessage &&
                info.message.videoMessage) ||
              isQuotedVideo ||
              isQuotedAudio
            ) {
              reply(Res_Aguarde);
              muk = isQuotedVideo
                ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                    .message.extendedTextMessage.contextInfo.message
                    .videoMessage
                : isQuotedAudio
                ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                    ?.message?.extendedTextMessage?.contextInfo?.message
                    ?.audioMessage ||
                  info?.message?.extendedTextMessage?.contextInfo?.quotedMessage
                    ?.viewOnceMessageV2Extension?.message?.audioMessage
                : info.message.audioMessage;

              let base64String = await getFileBuffer(
                muk,
                isQuotedAudio ? "audio" : "video"
              );
              let buffer = Buffer.from(base64String, "base64");

              let formData = new FormData();
              formData.append("file", buffer, {
                filename: isQuotedAudio ? "audiofile" : "videofile",
                contentType: muk.mimetype,
              });

              fetch(reqapi.transcrever(), {
                method: "POST",
                body: formData,
              })
                .then((response) => response.json())
                .then((data) => {
                  reply(data.texto);
                })
                .catch((Err) => {
                  return reply(
                    "Sinto muito, alguns formatos de áudio/vídeo, eu não consigo transcrever, em caso de dúvidas, tente novamente..."
                  );
                });
            } else {
              return reply("Marque um audio ou um vídeo.");
            }
          }
          break;

        case "bs64":
          muk = isQuotedAudio
            ? info.message.extendedTextMessage.contextInfo.quotedMessage
                .audioMessage
            : info.message.audioMessage;
          rane = getRandom("." + (await getExtension(muk.mimetype)));
          buffimg = await getFileBuffer(muk, "audio");
          console.log(JSON.stringify(buffimg, null, 2));
          break;

        case "grave2":
          if (
            (isMedia &&
              !info.message.imageMessage &&
              !info.message.videoMessage) ||
            isQuotedAudio
          ) {
            reply(Res_Aguarde);
            muk = isQuotedAudio
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .audioMessage
              : info.message.audioMessage;
            rane = getRandom("." + (await getExtension(muk.mimetype)));
            buffimg = await getFileBuffer(muk, "audio");
            fs.writeFileSync(rane, buffimg);
            gem = rane;
            ran = getRandom(".ogg");
            exec(
              `ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" -c:a libopus -b:a 48k ${ran}`,
              (err, stderr, stdout) => {
                DLT_FL(gem);
                if (err) return reply("Erro!");
                hah = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: hah, mimetype: "audio/ogg; codecs=opus", ptt: true },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque o áudio..");
          }
          break;

        case "grave":
          if (
            (isMedia &&
              !info.message.imageMessage &&
              !info.message.videoMessage) ||
            isQuotedAudio
          ) {
            reply(Res_Aguarde);
            muk = isQuotedAudio
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .audioMessage
              : info.message.audioMessage;
            rane = getRandom("." + (await getExtension(muk.mimetype)));
            buffimg = await getFileBuffer(muk, "audio");
            fs.writeFileSync(rane, buffimg);
            gem = rane;
            ran = getRandom(".ogg");
            exec(
              `ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" -c:a libopus -b:a 48k ${ran}`,
              (err, stderr, stdout) => {
                DLT_FL(gem);
                if (err) return reply("Erro!");
                hah = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: hah, mimetype: "audio/ogg; codecs=opus", ptt: true },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque o áudio..");
          }
          break;

        case "adolesc":
        case "vozmenino":
          if (
            (isMedia &&
              !info.message.imageMessage &&
              !info.message.videoMessage) ||
            isQuotedAudio
          ) {
            reply(Res_Aguarde);
            muk = isQuotedAudio
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .audioMessage
              : info.message.audioMessage;
            rane = getRandom("." + (await getExtension(muk.mimetype)));
            buffimg = await getFileBuffer(muk, "audio");
            fs.writeFileSync(rane, buffimg);
            gem = rane;
            ran = getRandom(".ogg");
            exec(
              `ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 -c:a libopus -b:a 48k ${ran}`,
              (err, stderr, stdout) => {
                DLT_FL(gem);
                if (err) return reply("Erro!");
                hah = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: hah, mimetype: "audio/ogg; codecs=opus", ptt: true },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque o áudio..");
          }
          break;

        case "tomp3":
          if ((isMedia && !info.message.imageMessage) || isQuotedVideo) {
            post = isQuotedImage
              ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo.message.imageMessage
              : info.message.videoMessage;
            reply(Res_Aguarde);
            encmedia = isQuotedVideo
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .videoMessage
              : info.message.videoMessage;
            rane = getRandom("." + (await getExtension(encmedia.mimetype)));
            buffimg = await getFileBuffer(encmedia, "video");
            fs.writeFileSync(rane, buffimg);
            media = rane;
            ran = getRandom(".mp4");
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              DLT_FL(media);
              if (err) return reply("❌ Falha ao converter vídeo para mp3 ❌");
              buffer = fs.readFileSync(ran);
              conn.sendMessage(
                from,
                { audio: buffer, mimetype: "audio/mpeg" },
                { quoted: info }
              );
              DLT_FL(ran);
            });
          } else {
            reply("Marque o vídeo para transformar em áudio por favor..");
          }
          break;

        case "bass3":
          if (
            (isMedia &&
              !info.message.imageMessage &&
              !info.message.videoMessage) ||
            isQuotedAudio
          ) {
            reply(Res_Aguarde);
            muk = isQuotedAudio
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .audioMessage
              : info.message.audioMessage;
            rane = getRandom("." + (await getExtension(muk.mimetype)));
            buffimg = await getFileBuffer(muk, "audio");
            fs.writeFileSync(rane, buffimg);
            gem = rane;
            ran = getRandom(".ogg");
            exec(
              `ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 -c:a libopus -b:a 48k ${ran}`,
              (err, stderr, stdout) => {
                DLT_FL(gem);
                if (err) return reply("Erro!");
                hah = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: hah, mimetype: "audio/ogg; codecs=opus", ptt: true },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque o áudio..");
          }
          break;

        case "bass":
          if (
            (isMedia &&
              !info.message.imageMessage &&
              !info.message.videoMessage) ||
            isQuotedAudio
          ) {
            reply(Res_Aguarde);
            muk = isQuotedAudio
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .audioMessage
              : info.message.audioMessage;
            rane = getRandom("." + (await getExtension(muk.mimetype)));
            buffimg = await getFileBuffer(muk, "audio");
            fs.writeFileSync(rane, buffimg);
            gem = rane;
            ran = getRandom(".ogg");
            exec(
              `ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 -c:a libopus -b:a 48k ${ran}`,
              (err, stderr, stdout) => {
                DLT_FL(gem);
                if (err) return reply("Erro!");
                hah = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: hah, mimetype: "audio/ogg; codecs=opus", ptt: true },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque o áudio..");
          }
          break;

        case "bass2":
          if (
            (isMedia &&
              !info.message.imageMessage &&
              !info.message.videoMessage) ||
            isQuotedAudio
          ) {
            reply(Res_Aguarde);
            muk = isQuotedAudio
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .audioMessage
              : info.message.audioMessage;
            rane = getRandom("." + (await getExtension(muk.mimetype)));
            buffimg = await getFileBuffer(muk, "audio");
            fs.writeFileSync(rane, buffimg);
            gem = rane;
            ran = getRandom(".ogg");
            exec(
              `ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 -c:a libopus -b:a 48k ${ran}`,
              (err, stderr, stdout) => {
                DLT_FL(gem);
                if (err) return reply("Erro!");
                hah = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: hah, mimetype: "audio/ogg; codecs=opus", ptt: true },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque o áudio..");
          }
          break;

        case "estourar":
          if (
            (isMedia &&
              !info.message.imageMessage &&
              !info.message.videoMessage) ||
            isQuotedAudio
          ) {
            reply(Res_Aguarde);
            muk = isQuotedAudio
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .audioMessage
              : info.message.audioMessage;
            rane = getRandom("." + (await getExtension(muk.mimetype)));
            buffimg = await getFileBuffer(muk, "audio");
            fs.writeFileSync(rane, buffimg);
            gem = rane;
            ran = getRandom(".ogg");
            exec(
              `ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 -c:a libopus -b:a 48k ${ran}`,
              (err, stderr, stdout) => {
                DLT_FL(gem);
                if (err) return reply("Erro!");
                hah = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: hah, mimetype: "audio/ogg; codecs=opus", ptt: true },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque o áudio..");
          }
          break;

        case "fast":
        case "audiorapido":
          if (
            (isMedia &&
              !info.message.imageMessage &&
              !info.message.videoMessage) ||
            isQuotedAudio
          ) {
            reply(Res_Aguarde);
            muk = isQuotedAudio
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .audioMessage
              : info.message.audioMessage;
            rane = getRandom("." + (await getExtension(muk.mimetype)));
            buffimg = await getFileBuffer(muk, "audio");
            fs.writeFileSync(rane, buffimg);
            gem = rane;
            ran = getRandom(".ogg");
            exec(
              `ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" -c:a libopus -b:a 48k ${ran}`,
              (err, stderr, stdout) => {
                DLT_FL(gem);
                if (err) return reply("Erro");
                hah = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: hah, mimetype: "audio/ogg; codecs=opus", ptt: true },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque o áudio...");
          }
          break;

        case "esquilo":
          if (
            (isMedia &&
              !info.message.imageMessage &&
              !info.message.videoMessage) ||
            isQuotedAudio
          ) {
            reply(Res_Aguarde);
            muk = isQuotedAudio
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .audioMessage
              : info.message.audioMessage;
            rane = getRandom("." + (await getExtension(muk.mimetype)));
            buffimg = await getFileBuffer(muk, "audio");
            fs.writeFileSync(rane, buffimg);
            gem = rane;
            ran = getRandom(".ogg");
            exec(
              `ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" -c:a libopus -b:a 48k ${ran}`,
              (err, stderr, stdout) => {
                DLT_FL(gem);
                if (err) return reply("Erro!");
                hah = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: hah, mimetype: "audio/ogg; codecs=opus", ptt: true },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque o áudio...");
          }
          break;

        case "audiolento":
        case "slow":
          if (
            (isMedia &&
              !info.message.imageMessage &&
              !info.message.videoMessage) ||
            isQuotedAudio
          ) {
            reply(Res_Aguarde);
            muk = isQuotedAudio
              ? info.message.extendedTextMessage.contextInfo.quotedMessage
                  .audioMessage
              : info.message.audioMessage;
            rane = getRandom("." + (await getExtension(muk.mimetype)));
            buffimg = await getFileBuffer(muk, "audio");
            fs.writeFileSync(rane, buffimg);
            gem = rane;
            ran = getRandom(".ogg");
            exec(
              `ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" -c:a libopus -b:a 48k ${ran}`,
              (err, stderr, stdout) => {
                DLT_FL(gem);
                if (err) return reply("Erro!");
                hah = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: hah, mimetype: "audio/ogg; codecs=opus", ptt: true },
                  { quoted: info }
                );
                DLT_FL(ran);
              }
            );
          } else {
            reply("Marque o áudio..");
          }
          break;

        //==========(EFEITOS-MARCAR)==========\\

        case "togif":
          if (!isQuotedSticker)
            return reply("*[ ❗ ] Marque a figurinha animada 😉*");
          try {
            if (
              ((isMedia && !info.message.videoMessage) || isQuotedSticker) &&
              !q.length <= 1
            ) {
              buff = await getFileBuffer(
                info.message.extendedTextMessage.contextInfo.quotedMessage
                  .stickerMessage,
                "sticker"
              );
              reply("*「 ❗ 」 Aguarde, convertendo a figu em gif 🥱*");
              a = await webp_mp4(buff);
              conn
                .sendMessage(
                  from,
                  {
                    video: { url: a },
                    gifPlayback: true,
                    fileName: `stick.gif`,
                  },
                  { quoted: info }
                )
                .catch((e) => {
                  reply("Erro... 🥱");
                });
              DLT_FL(buff);
            }
          } catch (e) {
            console.log(e);
            reply("Erro... 🥱");
          }
          break;

        case "lixo":
        case "lgbt":
        case "morto":
        case "preso":
        case "deletem":
        case "procurado":
        case "hitler":
        case "borrar":
        case "merda":
          try {
            IMG =
              JSON.parse(JSON.stringify(info)?.replace("quotedM", "m"))?.message
                ?.extendedTextMessage?.contextInfo?.message?.imageMessage ||
              info.message?.imageMessage;
            PXR = await getFileBuffer(IMG, "image");
            reply("Realizando ação..");
            link = await upload(PXR);
            conn
              .sendMessage(
                from,
                {
                  image: {
                    url: `https://api.bronxyshost.com.br/api-bronxys/montagem?url=${link}&category=${command}&apikey=${API_KEY_BRONXYS}`,
                  },
                },
                { quoted: info }
              )
              .catch((e) => {
                return reply("Erro..");
              });
          } catch (e) {
            return reply("Marque uma imagem no WhatsApp, formato jpeg/jpg");
          }
          break;

        case "legenda":
          try {
            var [txt1, txt2] = q.split("/");
            if (!q.includes("/"))
              return reply(
                `Cade a / mano?\nExemplo: ${prefix + command} Sad/Demais`
              );
            if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
              boij = isQuotedImage
                ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                    .message.extendedTextMessage.contextInfo.message
                    .imageMessage
                : info.message.imageMessage;
              owgi = await getFileBuffer(boij, "image");
              res = await uploader.catbox(owgi);
              conn
                .sendMessage(
                  from,
                  { image: { url: reqapi.legenda(res, txt1, txt2) } },
                  { quoted: info }
                )
                .catch((e) => {
                  return reply("Erro... 🥱");
                });
            } else {
              reply("Marque uma imagem...!");
            }
          } catch (e) {
            return reply("ERROR!!");
          }
          break;

        case "convite":
          if (!budy.includes("chat.whatsapp.com"))
            return reply("Cadê o link do grupo que você deseja que eu entre?");
          cnvt = args.join(" ");
          reply(
            `O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`
          );
          await sleep(1000);
          reply(
            `Use ${prefix}entrar cnvt ou ${prefix}recusar ${sender}, alguem enviou convite para entrar no grupo dele.`
          );
          break;

        case "recusar":
          if (!SoDono) return reply(Res_SoDono);
          conn.sendMessage(q, {
            text: `Olá Amigo(a), sinto muito dizer, mas seu convite foi recusado 🥺`,
          });
          break;

        case "join":
        case "entrar":
          if (!SoDono) return reply(Res_SoDono);
          var string = args.join(" ");
          if (!string)
            return reply("Insira um link de convite ao lado do comando.");
          if (
            string.includes("chat.whatsapp.com/") ||
            reply("Ops, verifique o link que você inseriu.")
          ) {
            link = string.split("app.com/")[1];
            try {
              conn.groupAcceptInvite(`${link}`);
            } catch (erro) {
              if (String(erro).includes("resource-limit")) {
                reply("O grupo já está com o alcance de 1.024 membros.");
              }
              if (String(erro).includes("not-authorized")) {
                reply("Não foi possível entrar no grupo.\nMotivo: Banimento.");
              }
            }
          }
          break;
        //=======(FIM-EFEITOS-MARCAR)=========\\

        default:
          if (isGroup && dataGp[0]?.autobaixar) {
            var swc =
              info?.message?.videoMessage ||
              info?.message?.audioMessage ||
              info?.message?.viewOnceMessageV2Extension?.message?.audioMessage
                ? "transcrever"
                : isLink(q)
                ? q.includes("instagram.com/") && q.length > 30
                  ? "instagram"
                  : q.includes("vm.tiktok.com/") && q.length > 30
                  ? "tiktok"
                  : (q.includes("https://twitter.com/") ||
                      q.includes("https://x.com/")) &&
                    q.length > 30
                  ? "twitter"
                  : q.includes("https://www.facebook.com/") ||
                    q.includes("https://fb.watch/")
                  ? "facebook"
                  : q.includes("spotify.com/") && q.length > 30
                  ? "spotify"
                  : q.includes("kwai.com/") && q.length > 25
                  ? "kwai"
                  : q.includes("https://youtube.com/shorts/") && q.length > 25
                  ? "shorts"
                  : false
                : false;

            switch (swc) {
              case "transcrever":
                {
                  muk = info?.message?.videoMessage
                    ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                        .message.videoMessage
                    : JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                        ?.message?.audioMessage ||
                      info?.message?.viewOnceMessageV2Extension?.message
                        ?.audioMessage
                    ? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                        ?.message?.audioMessage ||
                      info?.message?.viewOnceMessageV2Extension?.message
                        ?.audioMessage
                    : info.message.audioMessage;

                  let base64String = await getFileBuffer(
                    muk,
                    JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                      ?.message?.audioMessage ||
                      info?.message?.viewOnceMessageV2Extension?.message
                        ?.audioMessage
                      ? "audio"
                      : "video"
                  );
                  let buffer = Buffer.from(base64String, "base64");

                  let formData = new FormData();
                  formData.append("file", buffer, {
                    filename:
                      JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
                        ?.message?.audioMessage ||
                      info?.message?.viewOnceMessageV2Extension?.message
                        ?.audioMessage
                        ? "audiofile"
                        : "videofile",
                    contentType: muk.mimetype,
                  });

                  fetch(reqapi.transcrever(), {
                    method: "POST",
                    body: formData,
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      reply(data.texto);
                    })
                    .catch(() => {
                      return;
                    });
                }
                break;

              case "spotify":
                {
                  reply(Res_Aguarde);
                  try {
                    conn
                      .sendMessage(from, {
                        audio: { url: reqapi.spotify_mp3(Link(q.trim())) },
                        mimetype: "audio/mpeg",
                        mentions: [sender],
                      })
                      .catch(async (e) => {
                        return;
                      });
                  } catch (e) {
                    return;
                  }
                }
                break;

              case "instagram":
                try {
                  reply(Res_Aguarde);
                  let Url_I = await reqapi.instagram(Link(q.trim()));
                  let DM_T = Url_I.msg[0].type;
                  var A_T =
                    DM_T === "mp4"
                      ? "video/mp4"
                      : DM_T === "webp"
                      ? "image/webp"
                      : DM_T === "jpg"
                      ? "image/jpeg"
                      : DM_T === "mp3"
                      ? "audio/mpeg"
                      : "video/mp4";
                  var MD =
                    A_T.split("/")[0] === "image"
                      ? {
                          image: { url: Url_I.msg[0].url },
                          mimetype: A_T,
                          mentions: [sender],
                        }
                      : {
                          video: { url: Url_I.msg[0].url },
                          mimetype: A_T,
                          mentions: [sender],
                        };
                  conn.sendMessage(from, MD).catch((e) => {
                    return;
                  });
                } catch (e) {
                  return;
                }
                break;

              case "tiktok":
              case "twitter":
              case "facebook":
              case "kwai":
              case "shorts":
                {
                  try {
                    reply(Res_Aguarde);
                    conn
                      .sendMessage(from, {
                        video: {
                          url:
                            swc === "tiktok"
                              ? reqapi.tiktok(Link(q.trim()))
                              : swc === "twitter"
                              ? reqapi.twitter(Link(q.trim()), false)
                              : swc === "kwai"
                              ? reqapi.kwai_mp4(Link(q.trim()))
                              : swc === "shorts"
                              ? reqapi.play(Link(q.trim()), false)
                              : reqapi.facebook(Link(q.trim()), false),
                        },
                        mimetype: "video/mp4",
                        mentions: [sender],
                      })
                      .catch((e) => {
                        return;
                      });
                  } catch (e) {
                    return;
                  }
                }
                break;

              default:
            }
          }

          // FUNÇÕES.

          if (
            IS_sistemGold &&
            isGroup &&
            isBotGroupAdmins &&
            VR_JSON_GLOBAL &&
            !info.key.fromMe
          ) {
            async function Sys_G() {
              if (!dataGp[0]?.Chances?.some((i) => i.id === sender)) {
                !dataGp[0].hasOwnProperty("Chances")
                  ? (dataGp[0]["Chances"] = [])
                  : dataGp[0]["Chances"].push({
                      id: sender,
                      ChanceG: null,
                      ChanceAp: null,
                      ChanceR: [],
                      Vinganca: null,
                      cassino: 0,
                      quiz: [{ errou: 0, acertou: 0, numero: 0 }],
                      roletadasorte: false,
                      Cachaca: 1,
                      Escudo: [],
                    });
                setGp(dataGp);
              }

              if (!rggold.some((i) => i.grupo === from)) {
                rggold.push({
                  grupo: from,
                  usus: [
                    { id: sender, Golds: 0, data: 0, emp_G: [], emp_A: [] },
                  ],
                });
                Goldrgs(rggold);
              } else if (
                rggold.some((i) => i.grupo === from) &&
                !rggold[ID_G_GOLD]?.usus?.some((i) => i?.id === sender)
              ) {
                rggold[ID_G_GOLD].usus.push({
                  id: sender,
                  Golds: 0,
                  data: 0,
                  emp_G: [],
                  emp_A: [],
                });
                Goldrgs(rggold);
              }

              var dattofc = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

              if (
                body.trim() &&
                !info.message?.reactionMessage?.text &&
                dattofc != S_Sistema.RS(sender, "data")
              ) {
                if (ID_G_GOLD < 0) return;
                var a_ = dataGp[0].Chances.find((i) => i.id === sender);
                mention(
                  `${tempo} -> Olá @${sender2}! Você recebeu 20 Golds pela primeira mensagem do dia. Além disso, diversas chances para se entreter no grupo, use o comando ${prefix}menugold. Boa sorte e divirta-se! 🌟🪙`
                );
                S_Sistema.ADD_2(sender, 20, "data", dattofc);
                Object.assign(a_, {
                  quiz: [{ errou: 0, acertou: 0, numero: 0 }],
                  ChanceG: null,
                  ChanceAp: null,
                  ChanceR: [],
                  Vinganca: null,
                  roletadasorte: false,
                  cassino: 0,
                });
                setGp(dataGp);
              }
            }
            Sys_G();
          }

          //===(CRÉDITOS : LadyBot CONTEÚDOS)==\\

          if (isGroup && isBotGroupAdmins && !isGroupAdmins) {
            if (
              (isAntiCtt &&
                (type === "contactMessage" ||
                  type === "contactsArrayMessage")) ||
              (Antiloc && type === "locationMessage") ||
              (isAnticatalogo && type === "productMessage")
            ) {
              if (isGroupAdmins)
                return conn.sendMessage(
                  from,
                  {
                    text: `Por você ser ADM, não será removido! Mais tarde mandar foto da raba no pv do Bot 🤤`,
                  },
                  { quoted: info }
                );
              if (IS_DELETE) {
                setTimeout(() => {
                  conn.sendMessage(from, {
                    delete: {
                      remoteJid: from,
                      fromMe: false,
                      id: info.key.id,
                      participant: sender,
                    },
                  });
                }, 500);
              }
              if (!JSON.stringify(groupMembers).includes(sender)) return;
              conn.groupParticipantsUpdate(from, [sender], "remove");
              clear = `🗑${"\n".repeat(
                255
              )}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`;
              conn.sendMessage(from, {
                text: clear,
                contextInfo: { forwardingScore: 500, isForwarded: true },
              });
              conn.sendMessage(from, {
                text: "Removido por jogar travas no grupo 🏌🏻‍♂️",
                mentions: groupAdmins,
              });
            }
          }

          if (
            isGroup &&
            isAntiFlood &&
            !SoDono &&
            !isnit &&
            isBotGroupAdmins &&
            !isGroupAdmins &&
            !isBot
          ) {
            if (isLimitec == null) {
              var limitefl = limitefll.limitefl;
            } else {
              var limitefl = isLimitec;
            }
            if (budy.length >= limitefl) {
              setTimeout(() => {
                console.log(colors.red("Deram Spam de caracteres.."));
                return conn.sendMessage(from, {
                  text:
                    TEXTOS_GERAL?.LIMITE_CARACTERES_MSG ||
                    "🏌🏻‍♂️_𝙑𝙖𝙯𝙖 𝙙𝙖𝙦𝙪𝙞 𝘾𝙖𝙧𝙣𝙞𝙘̧𝙖!𝙇𝙚𝙧 𝙖 𝙥𝙤𝙧𝙧𝙖 𝙙𝙖𝙨 𝙍𝙚𝙜𝙧𝙖𝙨𝙦𝙪𝙖𝙣𝙙𝙤 𝙚𝙣𝙩𝙧𝙖𝙧 𝙚𝙢 𝙂𝙧𝙪𝙥𝙤𝙨_🤺",
                });
              }, 100);
              setTimeout(async () => {
                if (IS_DELETE) {
                  setTimeout(() => {
                    conn.sendMessage(from, {
                      delete: {
                        remoteJid: from,
                        fromMe: false,
                        id: info.key.id,
                        participant: sender,
                      },
                    });
                  }, 500);
                }
                if (!JSON.stringify(groupMembers).includes(sender)) return;
                conn.groupParticipantsUpdate(from, [sender], "remove");
              }, 1000);
            }
          }

          //INICIO DE COMANDOS SEM PREFIXO

          const EnvAudio_SMP = async (
            direcao,
            nome1,
            nome2,
            nome3,
            nome4,
            nome5
          ) => {
            let bla = [nome1, nome2, nome3, nome4, nome5];
            for (i of bla) {
              if (!i) return;
              if (messagesC.includes(i)) {
                conn.sendMessage(from, {
                  audio: { url: direcao },
                  mimetype: "audio/ogg; codecs=opus",
                  ptt: true,
                });
              }
            }
          };

          const EnvAudio2_SMP = async (
            direcao,
            nome1,
            nome2,
            nome3,
            nome4,
            nome5
          ) => {
            let bla = [nome1, nome2, nome3, nome4, nome5];
            for (i of bla) {
              if (!i) return;
              if (budy2.includes(i)) {
                // Corrigido para Baileys 7.0+ - usar mimetype compatível
                conn.sendMessage(
                  from,
                  {
                    audio: { url: direcao },
                    mimetype: "audio/ogg; codecs=opus", // Corrigido para compatibilidade Android
                    ptt: true,
                  },
                  { quoted: info }
                );
              }
            }
          };

          const EnvTXT_SMP = async (
            texto,
            nome1,
            nome2,
            nome3,
            nome4,
            nome5
          ) => {
            let bla = [nome1, nome2, nome3, nome4, nome5];
            for (i of bla) {
              if (!i) return;
              if (messagesC.includes(i)) {
                conn.sendMessage(from, { text: texto });
              }
            }
          };

          const EnvAudio2_GTTS = async (
            lingua,
            texto,
            txt1,
            txt2,
            txt3,
            txt4,
            txt5
          ) => {
            let bla = [txt1, txt2, txt3, txt4, txt5];
            for (i of bla) {
              if (!i) return;
              if (budy2.includes(i)) {
                var gtt = require("./dados/org/funcoes/gtts")(lingua);
                ranm = getRandom(".mp3");
                rano = getRandom(".ogg");
                gtt.save(ranm, texto, function () {
                  exec(
                    `ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`,
                    (err) => {
                      DLT_FL(ranm);
                      buffer = fs.readFileSync(rano);
                      conn.sendMessage(
                        from,
                        {
                          audio: buffer,
                          mimetype: "audio/ogg; codecs=opus",
                          ptt: true,
                        },
                        { quoted: info }
                      );
                      DLT_FL(rano);
                    }
                  );
                });
              }
            }
          };

          if (isSimi2 && !isCmd && isGroup) {
            if (type == "conversation" || type == "extendedTextMessage") {
              var { insert, response } = require("./simi.js");
              if (info.key.fromMe) return;
              if (
                type == "extendedTextMessage" &&
                prefix.includes(
                  info.message.extendedTextMessage.contextInfo.quotedMessage
                    .conversation[0]
                )
              )
                return;
              insert(type, info);
              const sami = await response(budy);
              if (sami)
                conn.sendMessage(from, { text: sami }, { quoted: info });
            }
          }

          var hora_sla = moment.tz("America/Sao_Paulo").format("HH:mm:ss");

          EnvAudio2_GTTS(
            "pt",
            `São ${hora_sla} da ${tempo.split(" ")[1]}`,
            "que horas sao?"
          );

          EnvTXT_SMP(prefix, "prefixo");

          if (isAutorepo) {
          /*
            if (budy2 === "!") {
              blars = [
                "Errou 😝",
                "🤦🏻‍♂️ Errou de novo seu animal 🫵🏻🤣️",
                "Ta difícil ai meu parceiro 😏",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "#") {
              blars = [
                "Mano!desiste logo você não vai acertar esta passando vergonha 😌🍃",
                "Escrever o nome de prefixo que eu te mando, bobinho 🥱",
                "Parar que esta feio pra você mano 🥹",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "/") {
              blars = [
                "Xiiiisai daí doido 😂",
                "É ruim em,meu prefixo não é esse parar de ser bobo 🥱",
                "Um pauzinho em 😏",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === ".") {
              blars = [
                "Se tu mandar mais um pontinho vou te remover do grupo 😒",
                "Travou meu pocket 🤬",
                "Oushe!Está mandando pontinho aqui pra quer 🤔",
                "Parar de mandar pontinho aqui,parece besta 🤦🏻‍♂️",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "sei") {
              blars = [
                "Tu lá sabe de nada inocente,me falar aí quantos são 2+2 🥱",
                "Parar de ser irônico 🙄",
                "Secsu 😏",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bem vindo") {
              blars = [
                "Não deixe que nada desse grupo te desanime. Lembre-se que até um pé na bunda te empurra pra frente. 😂",
                "A regra é clara entrou tem que pagar a coca 😌",
                "Bem vindo!Aqui não tem fofoqueiro. Só temhistoriadores da vida alheia. 🙊",
                "Falar aí pra essa pessoa que entrou,se ela não participar do grupo eu vou passar a faca 😏🔪",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bem vinda") {
              blars = [
                "Não deixe que nada desse grupo te desanime. Lembre-se que até um pé na bunda te empurra pra frente. 😂",
                "A regra é clara entrou tem que pagar a coca 😌",
                "Bem vindo!Aqui não tem fofoqueiro. Só temhistoriadores da vida alheia. 🙊",
                "Falar aí pra essa pessoa que entrou,se ela não participar do grupo eu vou passar a faca 😏🔪",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bv") {
              blars = [
                "Não deixe que nada desse grupo te desanime. Lembre-se que até um pé na bunda te empurra pra frente. 😂",
                "A regra é clara entrou tem que pagar a coca 😌",
                "Bem vindo!Aqui não tem fofoqueiro. Só temhistoriadores da vida alheia. 🙊",
                "Falar aí pra essa pessoa que entrou,se ela não participar do grupo eu vou passar a faca 😏🔪",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "obrigado") {
              blars = [
                "Por nada! Não leve as redes sociais tão a sério, a maioria das opiniões são de pessoas que estão sentadas no vaso cagando 😂",
                "Dizem que tudo que vai, volta. Acho que meu dinheiro se perdeu no caminho, nunca mais voltou 🥹",
                "Até poderia concordar com você, mas daí seriam duas pessoas erradas. 😂",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "obrigada") {
              blars = [
                "Por nada! Não leve as redes sociais tão a sério, a maioria das opiniões são de pessoas que estão sentadas no vaso cagando 😂",
                "Dizem que tudo que vai, volta. Acho que meu dinheiro se perdeu no caminho, nunca mais voltou 🥹",
                "Até poderia concordar com você, mas daí seriam duas pessoas erradas. 😂",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "obg") {
              blars = [
                "Por nada! Não leve as redes sociais tão a sério, a maioria das opiniões são de pessoas que estão sentadas no vaso cagando 😂",
                "Dizem que tudo que vai, volta. Acho que meu dinheiro se perdeu no caminho, nunca mais voltou 🥹",
                "Até poderia concordar com você, mas daí seriam duas pessoas erradas. 😂",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "serio?") {
              blars = [
                "Mas sério que o meu dono, o cabra é da igreja 😼",
                "Isso, isso, isso, isso..🫰🏻",
                "Não!Por acaso eu já mentir pra você?Não responda 🤥",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "serio") {
              blars = [
                "Mas sério que o meu dono , o cabra é da igreja 😼",
                "Isso, isso, isso, isso..🫰🏻",
                "Não!Por acaso eu já mentir pra você?Não responda 🤥",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "cheguei") {
              blars = [
                "Ninguém ligar 🥱",
                "Não diga 🙄",
                "Já que demorou aparecer mostrar raba 😏",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "😒") {
              blars = [
                "Está cagando é 😏🚽",
                "Tá com fominha é 😏",
                "Tá chateadinha é bb 😏",
                "Que foi cara de cu azedo 🤔",
                "Cara feia é dor de barriga,vai cagar 😏",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bot") {
              blars = [
                "Deixar eu dormir sossegado!!",
                "Algum problema 🙄",
                "Se tu me chamar mais uma vez vou te banir do grupo",
                "Ou parar de encher o saco, estou tentando dormir!!!",
                "O que tu quer comigo??",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bot caiu") {
              blars = [
                "Tua cara que caiu, ta me vendo aqui não 🙄",
                "Meus zovos que caiu 😒",
                "Caiu a minha mão na tua cara 🥱",
                "Eu não cai simplesmente eu não quero falar com você 🥱",
                "Tuas tetas que caiu, isso tu não falar 🙄",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bot parou") {
              blars = [
                "Parei para fazer xixi caralho, pode não 😒",
                "Eu estava dormindo, me deixa em paz 😒️",
                "Eu não parei simplesmente eu não quero falar com você 🥱",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bom dia a todos") {
              blars = [
                "Chega de bom dia!Acordei e quero aplausos 🥱",
                "Bom dia!Acordei disposta e linda.Mentira,foi só linda mesmo 😏",
                "Bom dia!Só queria uma coisa:ter muito dinheiro.O resto eu comprava 🥹",
                "Não desista dos seus sonhos!Desligue o despertador e continue dormindo 😴",
                "Eu era linda, rica, sensual...E aí o despertador tocou 😭",
                "Acordei tão gata hoje, que quando fui bocejar,eu miei 🤭",
                "Não é bom dia. Bom dia seria se já passasse do meio-dia!Agora faça cilêncio por favor 🥱😴",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bom dia grupo") {
              blars = [
                "Chega de bom dia!Acordei e quero aplausos 🥱",
                "Bom dia!Acordei disposta e linda.Mentira,foi só linda mesmo 😏",
                "Bom dia!Só queria uma coisa:ter muito dinheiro.O resto eu comprava 🥹",
                "Não desista dos seus sonhos!Desligue o despertador e continue dormindo 😴",
                "Eu era linda, rica, sensual...E aí o despertador tocou 😭",
                "Acordei tão gata hoje, que quando fui bocejar,eu miei 🤭",
                "Não é bom dia. Bom dia seria se já passasse do meio-dia!Agora faça cilêncio por favor 🥱😴",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }
            */
            if (budy2.includes("alugar")) {
              if (info.key.fromMe) return;
              reply(
                "Se você estiver procurando um Bot incrível para animar seu grupo eu estou disponível.Vai no pv do meu dono e falar com ele.\n(https://wa.me/567598659560) Obrigada coração, chamar lá 🙆🏻‍♀️"
              );
            }/*

            if (budy2.includes("bom dia,")) {
              if (info.key.fromMe) return;
              reply(
                "Eu era linda, rica, sensual...E aí o despertador tocou 😭"
              );
            }

            if (budy2.includes("bom dia.")) {
              if (info.key.fromMe) return;
              reply("Acordei tão gata hoje, que quando fui bocejar,eu miei 🤭");
            }

            if (budy2.includes("conteudo")) {
              if (info.key.fromMe) return;
              reply(
                "Pix caiu foto sumiu!Só os tolos para cair nesse golpe!Tu é umLadrãozinho e esta passando golpe de dentro do Presídio 😂"
              );
            }

            if (budy2.includes("o bot")) {
              if (info.key.fromMe) return;
              reply(
                "Não esqueça de ler as regras do grupo, lá tem todas as informações do grupo 🤹🏻‍♀️"
              );
            }

            if (
              budy2.includes("adivinha meu celular") ||
              budy2.includes("bot qual meu celular")
            ) {
              conn.sendMessage(from, { text: adivinha }, { quoted: info });
            }
            */
            //=========[--ANTI PALAVRÃO --]==========\\

            if (
              isGroup &&
              isPalavrao &&
              isBotGroupAdmins &&
              !SoDono &&
              !isGroupAdmins
            ) {
              if (
                dataGp[0].antipalavrao.palavras.some((i) =>
                  budy2.includes(
                    i
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                  )
                )
              ) {
                setTimeout(() => {
                  if (!JSON.stringify(groupMembers).includes(sender)) return;
                  conn.groupParticipantsUpdate(from, [sender], "remove");
                  setTimeout(() => {
                    conn.sendMessage(from, {
                      delete: {
                        remoteJid: from,
                        fromMe: false,
                        id: info.key.id,
                        participant: sender,
                      },
                    });
                  }, 500);
                }, 2000);
                conn.sendMessage(from, {
                  text: `⚠️<𝗣𝗔𝗟𝗔𝗩𝗥𝗔-𝗣𝗥𝗢𝗜𝗕𝗜𝗗𝗔>⚠️\n🤾🏻𝗮𝗾𝘂𝗶 𝗻𝗮̃𝗼, 𝘃𝗮𝘇𝗮 𝗳𝗿𝘂𝘁𝗶𝗻𝗵𝗮🏌🏻‍♂️️`,
                });
              }
            }
          }
          //===============(SIMIH-1)===============\\

          if (isGroup && isSimi && budy != undefined) {
            if (type === "imageMessage") return;
            if (type === "audioMessage") return;
            if (type === "stickerMessage") return;
            if (info.key.fromMe) return;
            let muehe;
            let start = Date.now();
            do {
              muehe = await simih(budy);
              if (Date.now() - start > 10000) {
                break;
              }
            } while (
              TEXTOS_GERAL.PALAVRAS_PROIBIDA_DE_O_SIMI_FALAR.some((i) =>
                muehe
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .includes(i)
              )
            );
            if (!muehe) return;
            reply(muehe);
          }

          //========================================\\
          hora2 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");

          if (isCmd) {
            uptime = process.uptime();
            conn.sendMessage(
              from,
              {
                text: `
╭─❖ 🧊🔥 ❖─╮
│ ⏳ ${tempo} 
│ 👤 @${sender2}
│
│ 🚫 Não achado 🥱
│ 💡 Use: ${prefix}Menu
╰──────────╯
`,
                mentions: [sender],
              },
              { quoted: selo }
            );
          }
        //========================================\\
      }
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = startAle;
