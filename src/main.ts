import {
  DocumentoFactory,
  TipoDocumento,
} from "./factory/documento/documento.factory";
import { FabricaDeNotificacao } from "./factory/notificacao/notificacao.factory";
import { Logistica } from "./factory/transporte/transporte.factory";

const caminhao = Logistica.criarTransporte({ name: "caminhao" });
const navio = Logistica.criarTransporte({ name: "navio" });

caminhao.entregar();
navio.entregar();

const sms = FabricaDeNotificacao.criarNotificacao({ name: "sms" });
const email = FabricaDeNotificacao.criarNotificacao({ name: "email" });
const mensagem = "Olá Kaike Bartolomeu";

sms.enviar(mensagem);
email.enviar(mensagem);

const pdf = DocumentoFactory.criarDocumento(TipoDocumento.PDF);
pdf.abrir();
pdf.salvar();
pdf.fechar();

const word = DocumentoFactory.criarDocumento(TipoDocumento.WORD);
word.abrir();
word.salvar();
word.fechar();
