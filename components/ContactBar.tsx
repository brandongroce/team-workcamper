import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { contact } from '../app/contact-data'


export default function ContactBar() {
    return (
        <div className="bg-white shadow-md rounded-2xl p-6 mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
                <p className="font-bold text-lg">Brandon Groce & Amanda Bee Adcox</p>
                <p>Email: <a href={ "mailto:" + contact.email } className="text-blue-600 hover:underline">{contact.email}</a></p>
                <p>Phone: <a href={ "tel:" + contact.phone } className="text-blue-600 hover:underline">{contact.phone}</a></p>
            </div>


            <div className="flex items-center gap-6">
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:underline">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href={contact.website } target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:underline">
                    <FaGlobe /> groce.dev
                </a>
            </div>


            <div className="flex items-center gap-4">
                <div className="flex flex-col items-start">
                    <a href={contact.resumes.brandon} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-700 hover:underline">
                        Brandon's Resume
                    </a>
                    <a href={contact.resumes.brandon} download className="flex items-center gap-1 bg-sage text-white px-3 py-1 mt-1 rounded hover:bg-green-700">
                        Download
                    </a>
                </div>
                <div className="flex flex-col items-start">
                    <a href={contact.resumes.amanda} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-700 hover:underline">
                        Amanda's Resume
                    </a>
                    <a href={contact.resumes.amanda} download className="flex items-center gap-1 bg-sage text-white px-3 py-1 mt-1 rounded hover:bg-green-700">
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
}