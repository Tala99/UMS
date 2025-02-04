import nodemailer from "nodemailer";

export async function sendEmail(to, subject,html){
    const transporter = nodemailer.createTransport({
        service:"gmail",
         auth: {
           user: "hethnawi.tala@gmail.com",
           pass: "dwzu bfxm ntnr qjcp",
         },
       });

       const info = await transporter.sendMail({
        from: '"Node 10 👻" <hethnawi.tala@gmail.com>', // sender address
        to, // list of receivers
        subject, // Subject line
        html, // html body
      });
}
