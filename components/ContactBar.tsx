import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';


export default function ContactBar() {
    return (
        <div className="bg-white shadow-md rounded-2xl p-6 mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
                <p className="font-bold text-lg">Brandon Groce & Amanda Bee Adcox</p>
                <p>Email: <a href="mailto:bgroce@pm.me" className="text-blue-600 hover:underline">bgroce@pm.me</a></p>
                <p>Phone: <a href="tel:2065503950" className="text-blue-600 hover:underline">(206) 550-3950</a></p>
            </div>


            <div className="flex items-center gap-6">
                <a href="https://linkedin.com/in/brandon-groce" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:underline">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://groce.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:underline">
                    <FaGlobe /> groce.dev
                </a>
            </div>


            <div className="flex items-center gap-4">
                <div className="flex flex-col items-start">
                    <a href="/groce_resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-700 hover:underline">
                        Brandon's Resume
                    </a>
                    <a href="/groce_resume.pdf" download className="flex items-center gap-1 bg-sage text-white px-3 py-1 mt-1 rounded hover:bg-green-700">
                        Download
                    </a>
                </div>
                <div className="flex flex-col items-start">
                    <a href="/adcox_resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-700 hover:underline">
                        Amanda's Resume
                    </a>
                    <a href="/adcox_resume.pdf" download className="flex items-center gap-1 bg-sage text-white px-3 py-1 mt-1 rounded hover:bg-green-700">
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
}