import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import NotFoundImage from "../../public/not-found-image.svg";

export default function NotFound() {
  return (
    <div>
      <Image src={NotFoundImage} alt="404 - Página não encontrada" />
      <h1>Oops! Página não encontrada.</h1>
      <p>Parece que você explorou demais, e acabou se perdendo.</p>
      <Button>
        <Link href="/">Voltar para a página inicial</Link>
      </Button>
    </div>
  );
}
