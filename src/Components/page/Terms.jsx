import React from 'react'
import SlicksSide from './SlicksSide'

const Terms = () => {
  const termsAndConditions = [
    {
      heading: "Acceptance of Terms",
      preegraf: "By accessing or using anuj choudhary (referred to as 'the Website'), you agree to comply with these Terms and Conditions. If you do not agree to these terms, please do not use the Website."
    },
    {
      heading: "Eligibility",
      preegraf: "To use the Website, you must: \n1. Be at least 13 years old. \n2. Agree to comply with all applicable laws and regulations. \n3. Have parental or guardian consent if you are under 18."
    },
    {
      heading: "User Accounts",
      preegraf: "Users may be required to register an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials. [Your Gaming Website Name] is not liable for unauthorized access to your account due to your negligence."
    },
    {
      heading: "Prohibited Activities",
      preegraf: "You agree not to: \n1. Use cheats, bots, exploits, or unauthorized software to gain an unfair advantage. \n2. Upload or distribute harmful content, including viruses or malware. \n3. Engage in harassment, hate speech, or abusive behavior. \n4. Violate any intellectual property rights of the Website or other users."
    },
    {
      heading: "Virtual Goods and Purchases",
      preegraf: "All virtual goods or in-game purchases are non-refundable and non-transferable. The Website reserves the right to modify, discontinue, or remove virtual goods without notice."
    },
    {
      heading: "Content Ownership",
      preegraf: "Any content you upload (e.g., chat messages, images) must not violate third-party rights. By submitting content, you grant the Website a non-exclusive, royalty-free license to use, modify, or display it."
    },
    {
      heading: "Limitation of Liability",
      preegraf: "anuj choudhary is not liable for damages arising from gameplay interruptions, data loss, or unauthorized account access. The Website is provided 'as is,' and we make no guarantees regarding availability or performance."
    },
    {
      heading: "Updates and Changes",
      preegraf: "The Website may update these Terms and Conditions at any time without prior notice. Continued use of the Website signifies acceptance of updated terms."
    },
    {
      heading: "Suspension or Termination",
      preegraf: "The Website reserves the right to suspend or terminate your account for violating these terms or engaging in prohibited activities."
    },
    {
      heading: "Privacy Policy",
      preegraf: "Your use of the Website is also governed by our Privacy Policy, which outlines how we collect and use your data."
    },
    {
      heading: "Governing Law",
      preegraf: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Your Jurisdiction."
    },
    {
      heading: "Contact Us",
      preegraf: "For any questions or concerns regarding these Terms and Conditions, please contact us at [support@yourwebsite.com]."
    }
  ];
  
  
 
  
  return (
    <div className='text-white mx-10'>
      <strong className='w-full flex justify-center text-3xl my-10'>Terms & Conditions </strong>
      <ul className='list-disc list px-10'>
     { termsAndConditions.map((item)=>(
      <div>
      <li key={item.heading}> <strong className='text-2xl text-red-300'>{item.heading}</strong></li>
      <p className='text-xl text-justify'> {item.preegraf}</p>
      </div>

     ))}
     </ul>
     
    </div>
  )
}

export default Terms
