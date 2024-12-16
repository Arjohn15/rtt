import { useState, Fragment } from 'react';
import Dialog from '@mui/material/Dialog';
import RequestRescuerButton from './RequestRescuerButton';
import FluentEmojiRescueWorkersHelmet from "./FluentEmojiRescueWorkersHelmet";
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation } from "react-router-dom";
import OthersLabel from './OthersLabel';
const needsLabels = [
    { name: "Medical Kits graphics image", labelName: "Medical Assistance", src: "/images/label_design/medicalKit.png", id: "medicalAssistance-7" },
    { name: "Boat graphics image", labelName: "Rescue", src: "/images/label_design/ambulance.png", id: "rescue-1" },
    { name: "Foods graphics image", labelName: "Foods", src: "/images/label_design/foods.png", id: "foods-5" },
    { name: "Tools graphics image", labelName: "Tools", src: "/images/label_design/tools.png", id: "tools-10" },
    { name: "House graphics image", labelName: "Shelter", src: "/images/label_design/house.png", id: "shelter-6" },
    { name: "Wash Hands graphics image", labelName: "Sanitation", src: "/images/label_design/washHands.png", id: "sanitation-9" },
    { name: "Electricity graphics image", labelName: "Electricity Power", src: "/images/label_design/electricity.png", id: "electricityPower-4" },
    { name: "Boat graphics image", labelName: "Transportation", src: "/images/label_design/boat.png", id: "boat-2" },
    { name: "Clothes graphics image", labelName: "Clothes", src: "/images/label_design/clothes.png", id: "clothes-3" },
    { name: "Others graphics image", labelName: "Others", src: "/images/label_design/others.png", id: "others-8" },
    //{ name: "", labelName: "", src: "/images/label_design/foodCans.png", id: "" },
]
export default function RequestRescuerInfo() {
    const [open, setOpen] = useState(false);
    const [openOthers, setOpenOthers] = useState(false);
    const [userInputs, setUserInputs] = useState({ user_name: "", user_phoneNumber: "", user_additionalDescription: "", location: "", needsIDs: [], others: "" });
    const largeScreen = useMediaQuery("(min-width:1024px)");
    const location = useLocation();
    const handleClickOpen = () => {
        setOpen(true);
    };

    console.log(userInputs);
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setUserInputs({ ...userInputs, [e.target.name]: e.target.value })
    }

    const handleNeedsIDs = (id) => {
        const isNeed = userInputs.needsIDs.includes(id);
        if (!isNeed) {
            // ADD NEW NEED ID
            if (id !== "others-8") {
                const newID = [...userInputs.needsIDs, id];
                setUserInputs({ ...userInputs, needsIDs: newID })
            } else {
                setOpenOthers(openOthers => !openOthers)
            }
        } else {
            // REMOVE ID
            const removedID = userInputs.needsIDs.filter(needID => needID !== id);
            setUserInputs({ ...userInputs, needsIDs: [...removedID] });
        }
    }


    if (location.pathname === "/dashboard") {
        return null;
    } else {

    return (
        <Fragment>
            <RequestRescuerButton onClickOpen={handleClickOpen} />

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={largeScreen}
                maxWidth="lg"
            >
                <div className="relative p-[0.5rem] sm:p-[1rem]">
                    <h3 className="text-lg text-center font-rowdies p-[1rem] lg:text-2xl lg:p-[2rem]">Tell us first what you need before we send rescuers...</h3>
                    <div className="grid grid-rows-2 grid-flow-col justify-items-center justify-self-center w-[80%] h-max overflow-x-auto gap-x-5 px-[1rem] py-[0.5rem] rounded-lg shadow-inner border-2 border-[rgba(233,75,74,0.4)] lg:p-[1rem] lg:w-[60%]">
                        {needsLabels.map((label) => {
                            const isNeed = userInputs.needsIDs.includes(label.id);
                            return (
                                <div key={label.id} className="flex flex-col items-center mb-[0.5rem] lg:w-max lg:w-[80px]">
                                    <button onClick={() => handleNeedsIDs(label.id)} className="relative w-[50px] h-[50px] border-gray-300 border-2 rounded-sm lg:w-[80px] lg:h-[80px]">
                                        <img src={label.src} alt={label.name} width="100%" />
                                        {isNeed &&
                                            <div className="absolute top-[-5px] right-[-5px] flex bg-white rounded-full">
                                                <CheckCircleIcon className="text-lime-600" style={{ fontSize: largeScreen ? "1.5rem" : "1rem" }} />
                                            </div>
                                        }
                                    </button>
                                    <span className="break-words text-center text-[9px] font-arimo font-bold lg:text-sm lg:mt-[0.5rem]">{label.labelName}</span>
                                    {openOthers && label.id === "others-8" &&
                                        <OthersLabel setOpenOthers={setOpenOthers} onChangeOthers={handleChange} othersValue={userInputs.others} />
                                    }
                                </div>
                            )
                        })}

                    </div>
                    <form action="" className="font-arimo">
                            <div className="text-xs mx-[1rem] mt-[2rem] lg:text-base">
                                <div className="my-[1rem] lg:my-[2rem]">
                                    <label>
                                        <span className="mr-[0.5rem] font-bold">Name:</span>
                                        <input onChange={handleChange} value={userInputs.user_name} type="text" name="user_name" placeholder="e.g. Johnny" required className="border-b-[1px] border-b-gray-300 " />
                                    </label>
                                </div>
                            <div className="my-[1rem] lg:my-[2rem]">
                                    <label>
                                        <span className="mr-[0.5rem] font-bold">Phone no:</span>
                                        <input onChange={handleChange} value={userInputs.user_phoneNumber} name="user_phoneNumber" type="tel" placeholder="e.g. 09123456789" required className="border-b-[1px] border-b-gray-300" />
                                    </label>
                                </div>
                            <div className="mt-[1rem] lg:my-[2rem]">
                                    <label htmlFor="user_additionalDescription" className="w-max block my-[0.5rem] font-bold">
                                        Optional:
                                    </label>
                                    <textarea onChange={handleChange} value={userInputs.user_additionalDescription} id="user_additionalDescription" name="user_additionalDescription" cols="30" rows="5" placeholder="Additional description... (tell us more about your situation)" className="w-full border-gray-300 border-2 border-[rgba(233,75,74,0.4)] rounded-lg p-[0.5rem]">

                                    </textarea>
                                </div>
                            </div>
                        <div>
                            <p className="text-[9px] text-center font-bold my-[0.5rem] md:text-[11px] lg:text-sm">
                                Note: By clicking this button, you&rsquo;ll be asked to grant location access so we can send a rescuer to your exact position as quickly as possible.
                            </p>
                            <button className="my-[1rem] text-red font-arimo font-bold flex items-center justify-self-center text-xs bg-white drop-shadow-xl p-[0.5rem] border-2 border-[rgba(233,75,74,0.5)] rounded-lg lg:text-base">
                                <div className="mr-[0.5rem]">
                                    <FluentEmojiRescueWorkersHelmet width={largeScreen ? "30" : "18"} />
                                </div>
                                <span>Request now</span>
                            </button>
                        </div>
                    </form>
                    <button onClick={handleClose} className="absolute top-0 right-0">
                        <CloseIcon  />
                    </button>
                </div>
            </Dialog>
        </Fragment>
    );
    }
}