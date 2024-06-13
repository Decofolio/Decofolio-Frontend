import styled from "styled-components";
import Main from "./main";
import Project from "./project";
import Resume from "./resume";
import Contact from "./contact";
import { Pdf } from "../../assets/image";
import html2canvas from "html2canvas";
import jsPDF from 'jspdf'
import { useEffect } from "react";

const ModernTemplate = () => {
  const converToPdf = async () => {
    const date = new Date();

    const canvas = await html2canvas(document.querySelector('#wrting')!);
    const imageFile = canvas.toDataURL('image/png');
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const widthRatio = pageWidth / canvas.width;
    const customHeight = canvas.height * widthRatio;
    doc.addImage(imageFile, 'png', 0, 0, pageWidth, customHeight);
    let heightLeft = customHeight;
    let heightAdd = -pageHeight;

    while (heightLeft >= pageHeight) {
      doc.addPage();
      doc.addImage(imageFile, 'png', 0, heightAdd, pageWidth, customHeight);
      heightLeft -= pageHeight;
      heightAdd -= pageHeight;
    }
    doc.save(
      `pdf${date.getFullYear()}-${date.getMonth() + 1
      }-${date.getDate()}.pdf`
    );
  };

  useEffect(() => {
    converToPdf();
  }, [])

  return (
    <Container id="wrting">
      {/* <PdfDownloadBtn onClick={converToPdf}><img src={Pdf} /></PdfDownloadBtn> */}
      <Main />
      <Resume />
      <Project />
      <Contact />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const PdfDownloadBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: blue;
  cursor: pointer;
`



export default ModernTemplate;