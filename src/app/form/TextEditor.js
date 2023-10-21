import React from 'react';
import 'quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useEffect, useState }  from 'react';
import Button from '@mui/material/Button';

var data=`<p><strong>Privacy Policy for Loofer.in</strong></p><p><br></p><p>Welcome to Loofer.in ("Website" or "Site"). This Privacy Policy is intended to inform you about how we collect, use, and protect your information when you visit our website or use our services. We understand the importance of your privacy, and we are committed to safeguarding your personal information. By accessing or using our Website, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.</p><p><br></p><p>1. Changes to Privacy Policy</p><p><br></p><p>We may periodically review and update this Privacy Policy to ensure its accuracy and compliance with applicable laws. Any revisions will be effective immediately upon being posted on the Website. Please review this Privacy Policy regularly to stay informed about our data practices.</p><p><br></p><p>2. Types of Information Collected and Uses of Collected Information</p><p>We collect two types of information:</p><p>a. Personally Identifiable Information: This is information that can identify you as an individual, such as your name, email address, contact details, and other personal data. We collect this information when you engage in activities on our Website, such as creating an account, making a purchase, submitting content, or contacting us. We use this information to provide our services, improve our website, personalize your experience, and respond to your inquiries.</p><p>b. Non-Personally Identifiable Information: This type of information does not identify you personally and includes data like your IP address, browser type, and website usage patterns. We use Non-Personally Identifiable Information for troubleshooting, analyzing trends, improving our website, and complying with applicable laws.</p><p>3. Release of Personally Identifiable Information</p><p>a. Authorized Third Party Service Providers: We may share your information with third-party service providers who assist us in delivering our services, including email communication, processing payments, and website operation.</p><p><br></p><p>4. Release of Non-Personally Identifiable Information</p><p>We may share aggregated demographic information (without Personally Identifiable Information) with partners, affiliates, and advertisers for marketing and promotional purposes. This information helps us tailor advertisements to our audience.</p><p><br></p><p>5. Updating Information</p><p>You can access and edit your Personally Identifiable Information by logging into your account. Please promptly update your information if it changes to ensure its accuracy.</p><p><br></p><p>6. Data Tracking</p><p>We use technologies like cookies, pixel tags, and web beacons to improve your browsing experience, collect website usage information, and analyze user behavior. You can modify your browser settings to decline cookies, but this may affect some website features.</p><p><br></p><p>7. Security of Information</p><p>We take appropriate measures to protect your Personally Identifiable Information, including encryption, secure servers, and restricted access. However, please note that no data transmission over the internet is entirely secure, and you transmit information to us at your own risk.</p><p><br></p><p>8. Privacy Policies of Third Party Websites</p><p>Our Privacy Policy applies only to our website. Other websites you visit may have their own privacy policies and practices, so we recommend reviewing their policies when navigating to external sites.</p><p><br></p><p>9. Advertising</p><p>Ads displayed on our website may be served by advertising partners who may use cookies to target advertisements to your interests. Our Privacy Policy does not cover third-party advertisers' use of cookies.</p><p><br></p><p>10. Google Adsense</p><p>Some ads on our site may be served by Google. Google uses non-personally identifiable information, and you can opt out of their ad targeting through their privacy policy.</p><p><br></p><p>11. Miscellaneous Privacy Issues</p><p>a. Children: Our website is not intended for minors under 18 years old. If you are under 18 and wish to use our services, you must do so with parental or guardian consent.</p><p>b. Public Areas: Information you publicly post on our website, such as reviews or comments, may be accessible by others and appear on other websites or web searches.</p><p>12. Opt-Out of Further Usage of Personal Information</p><p>If you no longer wish to receive marketing emails or want us to remove your Personally Identifiable Information, please contact us at&nbsp;<strong style="color: rgb(237, 45, 47);">loofer2024@gmail.com.</strong></p><p><br></p><p>13. Opt-Out of Non-Personally Identifiable Information Advertising</p><p>To learn more about opting out of targeted advertising based on non-personally identifiable information, please visit loofer.in.</p><p><br></p><p>14. Suspicious Communication</p><p>We do not conduct contests or request payments via links unaffiliated with our website or app. Please exercise caution when receiving suspicious phone calls, emails, or messages claiming to be from Loofer.in. Contact our official customer care channels if you have any concerns.</p><p>If you have any questions or concerns about our Privacy Policy or data practices, please contact us at&nbsp;<strong style="color: rgb(237, 45, 47);">loofer2024@gmail.com.</strong></p><p>Thank you for trusting Loofer.in with your privacy.</p>`

const TextEditor = () => {
	const [dataAll, setDataAll] = useState(data)
	var modules = {
		toolbar: [
			[{ size: ['small', false, 'large', 'huge'] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ list: 'ordered' }, { list: 'bullet' }],
			['link', 'image'],
			[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }, { align: [] }],
			[
				{
					color: [
						'#000000',
						'#e60000',
						'#ff9900',
						'#ffff00',
						'#008a00',
						'#0066cc',
						'#9933ff',
						'#ffffff',
						'#facccc',
						'#ffebcc',
						'#ffffcc',
						'#cce8cc',
						'#cce0f5',
						'#ebd6ff',
						'#bbbbbb',
						'#f06666',
						'#ffc266',
						'#ffff66',
						'#66b966',
						'#66a3e0',
						'#c285ff',
						'#888888',
						'#a10000',
						'#b26b00',
						'#b2b200',
						'#006100',
						'#0047b2',
						'#6b24b2',
						'#444444',
						'#5c0000',
						'#663d00',
						'#666600',
						'#003700',
						'#002966',
						'#3d1466',
						'custom-color'
					]
				}
			]
		]
	};

	var formats = [
		'header',
		'height',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'color',
		'bullet',
		'indent',
		'link',
		'image',
		'align',
		'size'
	];

	useEffect(() => {
	  
	
	  
	})
	

	const handleProcedureContentChange = (content) => {
		console.log('content---->', content);
		setDataAll(content)
	};

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Privacy Policy <Button
				variant="outlined"
				color="primary"
				
			  >
				Edit
			  </Button>
			  </h1>
			
			<div style={{ display: 'grid', justifyContent: 'center' }}>
				<ReactQuill
					theme='snow'
					modules={modules}
					formats={formats}
					value={data}
					placeholder='write your content ....'
					onChange={handleProcedureContentChange}
					style={{ height: '220px' }}></ReactQuill>
			</div>
			
		</div>
	);
};

export default TextEditor;
