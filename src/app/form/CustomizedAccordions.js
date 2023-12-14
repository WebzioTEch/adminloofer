import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import AddFaqForm from "./AddFaqForm";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, rows } from "@mui/x-data-grid";
import { Grid, Button } from "@mui/material";
import { any } from "prop-types";
import Swal from "sweetalert2";


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [faqInfo, setfaqInfo] = useState([]);
  const [selectedFaq, setSelectedFaq] = useState(null); // State variable to store the selected FAQ
  const [showAddFaqForm, setShowAddFaqForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
var formData = new FormData()
var value ={
  question:"",
  answer:"",
  _method:"PUT"
}

  useEffect(() => {
    setSelectedFaq(null);
    fetchList();
  }, []);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleEditClick = (faq) => {
    setShowAddFaqForm(true);
    setSelectedFaq(faq); // Set the selected FAQ to the state variable
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'faq_cat_id', headerName: 'Faq_Cat_Id', width: 90 },
    {
      field: 'question',
      headerName: 'Question',
      width: 150,
      editable: true
    },
    {
      field: 'answer',
      headerName: 'Answer',

      width: 110,
      editable: true
    },
    {
      field: 'editFaq',
      headerName: 'Edit FAQ',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <Button
          onClick={(e) => {
            formData.append('_method', 'PUT');
            const config = {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              },
              body: formData
            };
            fetch('https://loofer.bellazza.in/api/admin/faq/' + params.id, config)
              .then((res) => {
                let faq = [];
                if (res.status === 200) {
                  Swal.fire('Success', 'Edit success full', 'success');
                }
              })
              .catch((err) => {
                console.error({ err });
              });
          }}
          style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}
        >
          Edit
        </Button>
      )
    },
    {
      field: 'deleteFaq',
      headerName: 'Delete FAQ',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleDeleteClick(params.row.id)}
          style={{ backgroundColor: 'salmon', border: 'none', cursor: 'pointer' }}
        >
          Delete
        </Button>
      )
    }
  ];

  

  const handleDeleteClick = (id) => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 2000);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      axios
        .post(
          `https://loofer.bellazza.in/api/admin/faq/delete`,
          { id: id },
          config
        )
        .then((res) => {
          if (res.status === 200) {
            setSuccessMessage("FAQ Deleted successfully");
            fetchList();
          }
        })
        .catch((err) => {
          console.log("response error:", err);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchList = () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      axios
        .get("https://loofer.bellazza.in/api/admin/faq", config)
        .then((res) => {
          let faq = [];
          if (res.status === 200) {
            setfaqInfo(res.data.data);
          }
        })
        .catch((err) => {
          console.error({ err });
        });
      // dispatch(createproductDispatch(formData));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdateSuccess = (values) => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 2000);

    let id = selectedFaq.id;
    try {
      const formData = new FormData();
      formData.append("question", values.question);
      formData.append("answer", values.answer);
      formData.append("_method", "PUT");

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      axios
        .post(
          `https://loofer.bellazza.in/api/admin/faq/${id}`,
          formData,
          config
        )
        .then((res) => {
          if (res.status === 200) {
            setSuccessMessage("FAQ Updated successfully");
            fetchList();
            setShowAddFaqForm(false);
          } else {
            setSuccessMessage("FAQ Not Updated");
          }
          console.log({ res });
        })
        .catch((err) => {
          fetchList();
          console.error({ err });
        })
        .finally(() => {
          setShowAddFaqForm(false);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const mapCategoryDataToRows = (data) => {
	console.log(data, 'data');
	if (data && Array.isArray(data) && data.length > 0) {
	  return data.map((category) => ({
		id: category?.id||Math.floor(new Date().getTime()),
		question: category?.question,
		answer: category?.answer,
    faq_cat_id: category?.faq_cat_id
	  }));
	} else {
	  return [
		{ id: 1, faq_cat_id:"5", name: 'Snow', slug: 'Jon', age: 35, parent: "0"},
	  ];
	}
  };
  
  var rows = mapCategoryDataToRows(faqInfo);
  console.log("faqInfo", faqInfo);
  return (
    <div>
      {successMessage && (
        <div style={{ color: "green", marginBottom: 10 }}>{successMessage}</div>
      )}
      {/* {(faqInfo.length > 0  && !showAddFaqForm) ? faqInfo.map((val,key)=>(<>
			<Accordion key={key} expanded={expanded === `panel${key}`} onChange={handleChange(`panel${key}`)}>
				<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
					<Typography>{val.question}</Typography>
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
					<div dangerouslySetInnerHTML={{ __html: val.answer }} />
					{/* {val.answer} */}
      {/* </Typography>
				</AccordionDetails>
			</Accordion>
			</>)) : <AddFaqForm faqData={selectedFaq}  
						mode="edit"
						onSuccess={handleUpdateSuccess}
          				onCancel={() => setShowAddFaqForm(false)}
						  successMsg={successMessage}
						/>}  */}
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          editable={true}
          onCellEditStop={(params, event) => {
           console.log('jhhjhjhj', params)
          

           if(params.field=='question'){
            formData.append('question', params.value)
            value.question=params.value
           }else if(params.field=='answer'){
            formData.append('answer', params.value)
            value.answer=params.value
           }
             
          }}
        />
      </Box>
    </div>
  );
}
