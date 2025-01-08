import React from 'react'

const Privacy = () => {
  const privacyPolicy = [
    {
      heading: "Introduction",
      preegraf: "Welcome to [Your Gaming Website Name]. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and safeguard your data."
    },
    {
      heading: "Information We Collect",
      preegraf: "We collect the following types of information: \n1. Personal Information: Name, email address, phone number, and other details you provide during registration. \n2. Usage Data: Information about how you use the Website, including IP address, browser type, and activity logs."
    },
    {
      heading: "How We Use Your Information",
      preegraf: "We use your information to: \n1. Provide and improve our services. \n2. Process transactions and communicate with you. \n3. Ensure compliance with our Terms and Conditions. \n4. Send promotional messages or updates, if you opt-in."
    },
    {
      heading: "Sharing Your Information",
      preegraf: "We do not sell or share your personal information with third parties except: \n1. With service providers to perform tasks on our behalf (e.g., payment processing). \n2. When required by law or to protect our rights. \n3. In case of a merger or acquisition, where your data may be transferred to the new entity."
    },
    {
      heading: "Cookies and Tracking Technologies",
      preegraf: "We use cookies and similar technologies to enhance your experience, such as: \n1. Remembering your login details. \n2. Personalizing your experience. \n3. Analyzing site traffic and performance. \nYou can control cookies through your browser settings."
    },
    {
      heading: "Data Security",
      preegraf: "We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure. You share your information at your own risk."
    },
    {
      heading: "Your Rights",
      preegraf: "You have the right to: \n1. Access, update, or delete your personal data. \n2. Opt-out of receiving promotional messages. \n3. File a complaint with a data protection authority if you believe your rights are violated."
    },
    {
      heading: "Third-Party Links",
      preegraf: "The Website may contain links to third-party websites. We are not responsible for their privacy practices. We recommend reviewing their Privacy Policy before sharing any information."
    },
    {
      heading: "Children's Privacy",
      preegraf: "Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us to have it removed."
    },
    {
      heading: "Changes to This Privacy Policy",
      preegraf: "We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting on the Website. Continued use of the Website constitutes acceptance of the updated policy."
    },
    {
      heading: "Contact Us",
      preegraf: "If you have any questions or concerns about this Privacy Policy, please contact us at [support@yourwebsite.com]."
    }
  ];
  
  return (
    <div className='text-white mx-10'>
    <strong className='w-full flex justify-center text-3xl my-10'>Privacy Policy </strong>
    <ul className='list-disc list px-10'>
   { privacyPolicy.map((item)=>(
    <div>
    <li key={item.heading}> <strong className='text-2xl text-red-300'>{item.heading}</strong></li>
    <p className='text-xl text-justify'> {item.preegraf}</p>
    </div>

   ))}
   </ul>
   <div >
    <div className='my-10'>
  <strong className='text-3xl  '>Contact Details</strong>
  <p  className='text-xl my-5'> PixelSpark Studios Pvt Ltd</p>
  <p className='text-xl my-5'><strong>Address:</strong></p>
  <ul className='text-xl my-5'>
    <li>4th Floor, TechPark Plaza</li>
    <li>Innovation Drive, Sector 21</li>
    <li>Bangalore, Karnataka, 560102</li>
  </ul>
  <p className='text-xl my-5'><strong>Email:</strong> <a href="mailto:support@pixelspark.com">support@pixelspark.com</a></p>
  <p className='text-xl my-5'><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></p>
  <p className='text-xl my-5'><strong>Last Updated:</strong> 15th December 2024</p>
</div>
</div>

   
  </div>
  )
}

export default Privacy
