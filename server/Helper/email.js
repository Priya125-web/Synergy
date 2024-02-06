import nodemailer from "nodemailer"

export const sendEmail = async (req, res) => {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: "kripriya2511@gmail.com",
                pass: "lwvz auqa sdbt ethw"
            }
        })

        const data = {
            from: "kripriya2511@gmail.com",
            to: req.body.email,
            subject: req.subject,
            text: req.text
        }

        transport.sendMail(data, (error, info) => {
            if (error) {
                res.status(400).json({ message: " Email delivery Unsuccessful" })
            } else {
                console.log(info);
                res.status(200).json({ message: "Success" })
            }
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error" })
    }
}