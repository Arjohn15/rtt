import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import FireTruckOutlinedIcon from '@mui/icons-material/FireTruckOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';

const contacts = [
    { department: "Command Center", numbers: ["(02) 8789-3200"], icon: (iconSize) => <HubOutlinedIcon style={{ fontSize: iconSize }} />, id: 1 },
    { department: "PNP", numbers: ["(02) 8642-3582", "0998-598-7932"], icon: (iconSize) => <LocalPoliceOutlinedIcon style={{ fontSize: iconSize }} />, id: 2 },
    { department: "Taguig BFP", numbers: ["(02) 8837-0740", "(02) 8837-4496", "0906-211-0919"], icon: (iconSize) => <FireTruckOutlinedIcon style={{ fontSize: iconSize }} />, id: 3 },
    { department: "Taguig Rescue", numbers: ["0919-070-3112"], icon: (iconSize) => <SupportOutlinedIcon style={{ fontSize: iconSize }} />, id: 4 },
]

function Contact() {
    return (
        <div className="mb-[3rem] lg:my-[3rem]">
            <h1 className="font-rowdies text-center text-xs flex justify-center items-center my-[1.5rem] md:text-base lg:text-3xl lg:text-red">
                    <span className="mr-[0.5rem]">
                        <ContactPhoneOutlinedIcon style={{ fontSize: "1.2rem" }} />
                    </span>
                    Contact Numbers
                </h1>
                <div className="lg:flex lg:justify-center lg:my-[5rem]">
                    <div className="font-arimo flex flex-col items-center text-center text-sm md:text-base lg:flex-row lg:items-start lg:w-[80%] lg:border-gray lg:border-l-2">
                        {contacts.map(contact => {
                            return <div key={contact.id} className="w-[55%] relative border-b-[1px] max-lg:border-red p-[1rem] lg:border-b-0 lg:border-r-2 lg:w-full lg:h-full lg:border-gray-300 lg:py-[5rem]">
                                <p className="mb-[0.5rem] lg:text-lg lg:mb-[1rem]">{contact.department}</p>
                                <ul className="space-y-2 lg:space-y-4">
                                    {contact.numbers.map(number => {
                                        return <li key={number} className="font-bold">{number}</li>
                                    })}
                                </ul>
                                <div className="lg:hidden">
                                    <span className="absolute left-0 top-[50%] translate-y-[-50%] text-red">{contact.icon("1.5rem")}</span>
                                </div>
                                <div className="hidden lg:block">
                                    <span className="absolute left-[50%] top-[1rem] translate-x-[-50%] translate-y-[-50%] text-red left-[1rem] top-[1rem]">{contact.icon("2.5rem")}</span>
                                </div>
                            </div>;
                        })}
                    </div>
            </div>
        </div>

    );
}

export default Contact;