import { Document, Page, pdfjs } from "react-pdf"
import { Layout } from "../../component/common/Layout"
import { useEffect, useState } from "react"
import { Icon } from "@mui/material";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { HashLink } from "react-router-hash-link";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

export const PDFPage = ({pdfFile}: {pdfFile: string}) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [numPages, setNumPages] = useState(0)

    const onDocumentLoadSuccess = ({numPages}: any) => {
        setNumPages(numPages);
    }

    const calculatePDFWidth = () => {
        
        const screenWidth = window.innerWidth

        console.log("W: " + screenWidth)

        if (screenWidth < 768) {
            return screenWidth - 10
        }
        if (screenWidth < 1024) {
            return screenWidth - 60
        }
        if (screenWidth < 1280) {
            return screenWidth / 12 * 10
        }
        if (screenWidth < 1536) {
            return screenWidth / 12 * 10
        }
        return screenWidth / 12 * 10
    }

    return (
        <Layout>
            <div id = "top" className = "min-h-screen custom-mt-6 row-start-1 row-end-2 col-start-1 col-end-13 flex justify-center">
                <Document file = {pdfFile} onLoadSuccess = {onDocumentLoadSuccess} options = {options}>
                    <div>
                    {   Array.from(new Array(numPages), (_, index) => (
                            <Page
                                key                   = {`page_${index + 1}`}
                                renderAnnotationLayer = {false}
                                renderTextLayer       = {false}
                                pageNumber            = {index + 1}
                                width                 = {calculatePDFWidth()}
                            />
                        ))
                    }
                    </div>
                    <div className = "flex flex-col justify-center items-center mb-20">
                        <HashLink smooth = {true} to = "#top">
                            <Icon component = {ArrowUpwardIcon}/>
                        </HashLink>
                        <span className = "mt-4 text-md font-semibold">
                            Back To Top
                        </span>
                    </div>
                </Document>
            </div>
        </Layout>
    )
}
