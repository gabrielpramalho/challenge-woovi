import securityIcon from "../assets/security-icon.svg"
import logoFooter from "../assets/woovi-footer-icon.svg"

export function Footer() {
  return(
    <footer className="flex items-center justify-center gap-2 py-7 mt-3">
      <img src={securityIcon} alt="ícone de Segurança" />
      <p className="text-woovi-gray">Pagamento 100% seguro via:</p>
      <img src={logoFooter} alt="Logo Woovi" />
    </footer>
  )
}