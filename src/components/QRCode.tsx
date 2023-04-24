export default function QRCode(){
    return(
        <>
            <div className="grid gap-y-3 bg-white justify-items-center p-4 w-fit mx-auto rounded-xl my-24 font-[Outfit]">
                <img className="w-64 rounded-lg" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682372551/image-qr-code_wdbntg.png" alt="QR code" />
                <h1 className="text-xl font-bold text-center text-[#1f3251]">Improve your front-end<br></br>skills by building projects</h1>
                <p className="text-sm pb-4 text-[#7b879d] text-center">Scan ther QR code to visit Frontend<br></br>Mentor and take your coding skills to<br></br>the next level</p>
            </div>
        </>
    )
}