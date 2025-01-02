const labels = [
    { name: "Medical Assistance", src: "red_mark.png", id: "medicalAssistance-7" },
    { name: "Rescue", src: "orange_mark.png", id: "rescue-1" },
    { name: "Foods", src: "blue_mark.png", id: "foods-5" },
    { name: "Tools / Equipments", src: "black_mark.png", id: "tools-10" },
    { name: "Shelter", src: "brown_mark.png", id: "shelter-6" },
    { name: "Sanitation", src: "yellow_mark.png", id: "sanitation-9" },
    { name: "Electricity Power", src: "purple_mark.png", id: "electricityPower-4" },
    { name: "Transportation", src: "gray_mark.png", id: "boat-2" },
    { name: "Clothes", src: "cyan_mark.png", id: "clothes-3" },
    { name: "Others", src: "pink_mark.png", id: "others-8" }
];




function ColorCodingLabels() {
    return (
        <div className="w-[50%] justify-self-center text-[9px] font-arimo border-2 mt-[5rem] p-[1rem]">
            <ul className="grid grid-cols-3">
                {labels.map(label => {
                    return <li key={label.id} className="flex items-center">
                            <span className="mr-[0.2rem]">
                                <img src={`images/map_marks/${label.src}`} alt={`${label.name}`} width={20} />
                            </span>
                            <span>{label.name}</span>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default ColorCodingLabels;