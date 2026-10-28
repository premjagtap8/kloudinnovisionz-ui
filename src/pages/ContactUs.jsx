import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MessageSquare, Target, UsersRound, Lightbulb, MapPin, Mail, Phone, ArrowRight, ChevronDown, CalendarDays } from 'lucide-react';
import "../styles.css"

const faqs = [
  ['What kinds of businesses do you work with?', 'We work with businesses across manufacturing, real estate, education, healthcare, retail, hospitality, logistics and professional services.'],
  ['How do we get started?', 'Share your goals through the contact form. Our team will review your enquiry and get in touch to arrange an initial conversation.'],
  ['Do you provide consulting as well as implementation?', 'Yes. We support the full journey—from strategy and planning to implementation, optimization and ongoing support.'],
  ['Can you help us with digital marketing and SEO?', 'We can help you explore digital growth, marketing and SEO opportunities that align with your business objectives.'],
  ['Do you work with clients outside India?', 'Yes. We work with clients in India and internationally, adapting our approach to each business and project.'],
  ['What happens after we submit the form?', 'You’ll receive a response from our team. We’ll discuss your requirements, clarify next steps and identify the right way forward.']
];
function ContactPage(){
 const [openFaq,setOpenFaq]=useState(-1); const [sent,setSent]=useState(false);
 return <main className="contact-page">
  <section className="hero">
   <div className="hero-inner">
    <div className="hero-copy"><div className="eyebrow">CONTACT CLOUD <span/></div><h1>Let’s Talk About<br/><em>What’s Next.</em></h1><p>Tell us about your business goals, challenges or ideas.<br className="desktop-break"/> We’ll start with a conversation and explore how Kloud<br className="desktop-break"/> InnoVisionZ can support your next step.</p>
     <div className="steps">{[[MessageSquare,'Understand','your needs'],[Target,'Explore','practical options'],[UsersRound,'Involve the','right experts'],[Lightbulb,'Focus on','real outcomes']].map(([Icon,a,b])=><div className="step" key={a}><span className="step-icon"><Icon/></span><span>{a}<br/>{b}</span></div>)}</div>
    </div>
    <form className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><h2>Send Us a Message</h2><p className="form-intro">Share a few details and our team will get back to you.</p>
     <div className="form-grid"><input required placeholder="Your Name *"/><input required type="email" placeholder="Business Email *"/><input placeholder="Company Name"/><input type="tel" placeholder="Phone Number"/><select required defaultValue=""><option value="" disabled>How can we help you? *</option><option>Business Consulting</option><option>Digital Transformation</option><option>Enterprise Software</option><option>Digital Marketing & SEO</option><option>Other</option></select><textarea required placeholder="Tell us about your requirements *" rows="3"/></div>
     <button className="submit-btn" type="submit">{sent?'Message Submitted':'Send Message'} <ArrowRight size={16}/></button><small>We respect your privacy. Your information will be used only to respond to your enquiry.</small>
    </form>
   </div>
  </section>
  <section className="contact-details"><div className="details-inner">{[[MapPin,'Our Office',<>Kloud InnoVisionZ Private Limited<br/>Mumbai, India<br/>(Work from studio/office by appointment)</>],[Mail,'Email Us',<> <a href="mailto:info@kloudinnovizionz.com">info@kloudinnovizionz.com</a><br/>For business enquiries and<br/> project discussions</>],[Phone,'Call Us',<>+91 22 1234 5678<br/>Monday – Friday<br/>10:00 AM – 6:00 PM (IST)</>]].map(([Icon,title,content])=><div className="detail" key={title}><span className="detail-icon"><Icon/></span><div><h3>{title}</h3><p>{content}</p></div></div>)}</div></section>
  <section className="faq-section"><div className="faq-inner"><div className="faq-copy"><div className="eyebrow">FREQUENT QUESTIONS</div><h2>Before You <em>Reach Out</em></h2><p>Here are some common questions. If you can’t find<br className="desktop-break"/> what you’re looking for, feel free to contact us.</p><a className="outline-btn" href="#contact">View All FAQs <ArrowRight size={16}/></a></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i?'active':''}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}>{q}<ChevronDown size={17}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div></section>
  <section className="bottom-cta"><div className="cta-inner"><div><div className="cta-eyebrow">YOUR NEXT STEP STARTS HERE</div><h2>Every Business Has a Vision.<br/><em>Let’s Work Out What’s Next.</em></h2><p>Whether you have a specific project in mind or simply want to explore<br className="desktop-break"/> possibilities, we’d be glad to hear from you.</p></div><div className="cta-actions"><a href="#contact" className="cta-primary">Let’s Talk <ArrowRight size={16}/></a><a href="mailto:info@kloudinnovizionz.com" className="cta-secondary"><CalendarDays size={16}/> Schedule a Call</a></div></div></section>
 </main>
}

createRoot(document.getElementById('root')).render(<ContactPage/>);