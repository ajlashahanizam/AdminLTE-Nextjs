// use bulit-in nextjs API

export default async function handler(req, res) {
    if (req.method === "POST") {
      const { email, password } = req.body;
      const isValid =
        email === "test@mail.com" && password === "password";
  
          if (isValid) {
            res.status(200).json({ success: true });
          } else {
            res.status(401).json({ success: false });
          }
        } else {
          res.status(405).end();
        }
  }



 