export default function handler(req, res) {
    
    //http://localhost:3000/api/hello
    //const email = req.body.email;
    // Then save email to your database, etc...

    res.status(200).json({ text: 'Hello' });
  }