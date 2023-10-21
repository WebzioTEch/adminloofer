import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import AddFaqForm from './AddFaqForm';
import AddStaticPageForm from './AddStaticPageForm';

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0
	},
	'&:before': {
		display: 'none'
	}
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)'
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1)
	}
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

export default function StaticPageTable() {
	const [expanded, setExpanded] = React.useState('panel1');
	const [faqInfo, setfaqInfo] = useState([]);
  	const [selectedFaq, setSelectedFaq] = useState(null); // State variable to store the selected FAQ
  	const [showAddFaqForm, setShowAddFaqForm] = useState(false);
  	const [successMessage, setSuccessMessage] = useState('');

  useEffect(()=>{
		setSelectedFaq(null)
		fetchList();
	},[])

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

  const handleEditClick = (faq) => {
	setShowAddFaqForm(true)
    setSelectedFaq(faq); // Set the selected FAQ to the state variable
  };

  const handleDeleteClick=(id)=>{
	const timer = setTimeout(() => {
		setSuccessMessage('');
	  }, 2000);

	try {
		const config = {
			headers: {
				'Authorization': `Bearer ${localStorage.getItem("token")}`
			}
		};
			axios.post(`https://loofer.bellazza.in/api/admin/static_page/delete`,{"id":id},config)
				.then(res => {
					if(res.status === 200){
						setSuccessMessage('FAQ Deleted successfully');
						fetchList();
					}
				}).catch(err => {
						console.log("response error:",err)
					})
		  } catch (error) {
			console.error('Error:', error);
	  	}
  }
	
	const fetchList=()=>{
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${localStorage.getItem("token")}`
					}
			};
				axios.get('https://loofer.bellazza.in/api/admin/static_page',config)
					.then(res => {
						let faq=[];
						if(res.status===200){
							setfaqInfo(res.data.data);
						}
					}).catch(err => {
						console.error({err});
					});
						// dispatch(createproductDispatch(formData));
					  } catch (error) {
						console.error('Error:', error);
					  }
	}

	const handleUpdateSuccess=(values)=>{
		const timer = setTimeout(() => {
			setSuccessMessage('');
		  }, 2000);
	
		  let id = selectedFaq.id
		try {
			let arr=[];
			const formData = new FormData();
			arr.push(values.answer);

			formData.append('title', values.question);
			formData.append('description',arr);
			formData.append('_method',"PUT");

			// let data={
			// 	"title":values.question,
			// 	"description":arr
			// }

		
			const config = {
				headers: {
					'Authorization': `Bearer ${localStorage.getItem("token")}`
				}
			};
	
				axios.post(`https://loofer.bellazza.in/api/admin/static_page/${id}`,formData,config)
					.then(res => {
						if(res.status === 200){
							setSuccessMessage('FAQ Updated successfully');
							fetchList();
							setShowAddFaqForm(false);
						}else{
							setSuccessMessage('FAQ Not Updated');
						}
						console.log({res});
					}).catch(err => {
							fetchList();
						console.error({err});
					}).finally(() => {
						setShowAddFaqForm(false); 
					  });
		
		  } catch (error) {
			console.error('Error:', error);
		  }
	  }

	return (
		<div>
			{successMessage && <div style={{ color: 'green', marginBottom: 10 }}>{successMessage}</div>}
			{(faqInfo.length > 0  && !showAddFaqForm) ? faqInfo.map((val,key)=>(<>
			<Accordion key={key} expanded={expanded === `panel${key}`} onChange={handleChange(`panel${key}`)}>
				<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
					<Typography>{val.title}</Typography>
					<div style={{ display: 'flex', alignItems: 'center' }}>
        <div onClick={(e) => { e.stopPropagation(); handleEditClick(val); }} style={{ padding: "10px", cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <EditIcon color="primary" style={{ marginRight: '5px' }} />
          Edit
        </div>
        <div onClick={(e) => { e.stopPropagation(); handleDeleteClick(val.id); }} style={{ padding: "10px", cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <DeleteIcon color="error" style={{ marginRight: '5px' }} />
          Delete
        </div>
      </div>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
					<div dangerouslySetInnerHTML={{ __html: val.desc }} />
					{/* {val.answer} */}
					</Typography>
				</AccordionDetails>
			</Accordion>
			</>)) : <AddStaticPageForm faqData={selectedFaq}  
						mode="edit"
						onSuccess={handleUpdateSuccess}
          				onCancel={() => setShowAddFaqForm(false)}
						  successMsg={successMessage}
						/>} 
		</div>
	);
}
