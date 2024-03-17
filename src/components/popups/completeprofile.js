import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/router";
import validateForm from "../validation";

export default function CompleteProfile(props) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const Property = [
    { name: "Sandtone Home", code: "SH1" },
    { name: "Sandtone Home 1", code: "SH2" },
    { name: "Sandtone Home 2", code: "SH3" },
  ];
  const [selected, setSelected] = useState(null);
  const option = [
    { name: "Mrs.", code: "SH1" },
    { name: "Ms", code: "SH2" },
    { name: "Mr", code: "SH3" },
    { name: "Miss", code: "SHG" },
  ];
  const [checked, setChecked] = useState(false);

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const router =  useRouter();

  const [formData, setFormData] = useState({
    maintitle:"",
    title: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    Invisible:'',
    selectedProperty: '',
    documentFile: '', // Assuming this is a file path or some identifier
    address: '',
    phoneChecked: false,
    emailChecked: false,
    agreeChecked: false,
  });

 console.log("props.email",typeof props.email);
  useEffect(() => {
   if(props.email){
    setFormData({
      email:props.email
    })
   }
   if(props.phone || props.email){
    setFormData({
      mobile:props.phone,
      maintitle:"",
      title: '',
      firstName: '',
      lastName: '',
     
      email: props.email,
      Invisible:'',
      selectedProperty: '',
      documentFile: '', // Assuming this is a file path or some identifier
      address: '',
      phoneChecked: false,
      emailChecked: false,
      agreeChecked: false,
    })
   }
  }, [props.email,props.phone])
  

  const handleInputChange = ( e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (checkboxName) => {
    setFormData({
      ...formData,
      [checkboxName]: !formData[checkboxName],
    });
  };

  const profileSubmit = async() =>{
    // setProfilePopup(false)



    try {
   
     

      if(formData.maintitle === ""){
        toast.error("title is required")
        return
      }
      if(formData.title === ""){
        toast.error("title is required")
        return
      }

      if(formData.firstName === ""){
        toast.error("firstNames is required")
        return
      }
      
      if(formData.lastName === ""){
        toast.error("lastName is required")
        return
      }

      if(formData.mobile === ""){
        toast.error("mobile is required")
        return
      }

      if(selectedProperty === ""){
        toast.error("selectedProperty is required")
        return
      }

      if(formData.documentFile === ""){
        toast.error("mobile is required")
        return
      }

      
      if(formData.email === ""){
        toast.error("mobile is required")
        return
      }
      
      
      const comunicationArray = []


      formData.emailChecked ? comunicationArray.push(1) : null
      formData.phoneChecked ? comunicationArray.push(2) : null
      const requestedData = {
        accessToken:props.token,
        "id": props.userId,
        "title": formData.maintitle.name,
        "userName": "",
        "firstName": formData.firstName,
        "lastName": formData.lastName,
        "countryCode": "91",
        "mobile": formData.mobile,
        "role": "",
        "email": formData.email,
        "companyId": 1,
        "addressLatitude": "",
        "addressLongitude": "",
        "addressLine1": formData.address,
        "addressLine2": formData.address,
        "city": "Kolhapur",
        "state": "maharastra",
        "country": "India",
        "status": "",
        "statusId": 0,
        "communicationTypes": [
          {
            "id": 0,
            "name": "",
            "displayName": "",
            "status": "",
            "isActive": true
          }
        ],
        "communicationTypesIds":comunicationArray
      };
  
      const response = await axios.post("/api/register/createuser", {requestedData});
      // Handle successful response if needed
      toast.success("Resister successfully....")
      props.setProfilePopup(false)
      if(response){
        router.push("/dashboard")
      }
    
      // setVisible(false)
    } catch (error) {
      console.log("error",error);
        toast.error('An error occurred');
      }
    }


    console.log("formData.emailChecked",formData.emailChecked ? 1 : null);
  return (
    <div className="otp-popup profilepopup">
      <ToastContainer />
      <Dialog
        visible={props.visible}
        breakpoints={{ "960px": "80vw", "640px": "90vw" }}
        style={{ width: "46vw" }}
        onHide={props.onHides}
        draggable={false}
        resizable={false}
        className="xl:w-[40vw] w-[200px] otp-popup profilepopup"
      >
        <div className="mt-[35px] xl:mt-[1.823vw] flex justify-center text-[#171A1F] text-[20px] xl:text-[2.083vw] font-bold leading-10">
          Complete Your Profile
        </div>

        <div className="xl:mt-[1.042vw] mt-[20px] xl:px-[2.167vw] px-[20px]">
          <div className=" xl:space-y-[0.573vw] space-y-[10px]">
            <div className="custom_dropdown">
              <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8 block">
                Title
              </label>
              <Dropdown
                value={formData.maintitle}
                name="maintitle"
                onChange={handleInputChange}
                options={option}
                optionLabel="name"
                placeholder="Select"
                className="w-full md:w-[10rem] "
              />
            </div>
            <div className="custom_input grid grid-cols-2 gap-14 xl:gap-[2.917vw]">
              <div className="">
                <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">
                  First Name
                </label>
                <InputText
                value={formData.firstName}
                name="firstName"
                onChange={handleInputChange}
                  placeholder="Enter first name"
                  className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                />
              </div>
              <div className="">
                <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">
                  Last name
                </label>
                <InputText
                 value={formData.lastName}
                 name="lastName"
                 onChange={handleInputChange}
                  placeholder="Enter last name "
                  className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                />
              </div>
            </div>
            <div className="custom_input grid grid-cols-2 gap-14 xl:gap-[2.917vw]">
              <div className="">
                <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">
                  Mobile
                </label>
                <InputText
                disabled
                 value={formData.mobile}
                 name="mobile"
                 onChange={handleInputChange}
                  placeholder="Enter mobile number"
                  className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                />
              </div>
              <div className="">
                <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">
                  Email
                </label>
                <InputText
                 value={formData.email}
                 name="email"
                 onChange={handleInputChange}
                  placeholder="Enter email "
                  className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-14 xl:gap-[2.917vw]">
              <div className="custom_dropdown">
                <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8 block">
                  Title
                </label>
                <Dropdown
                  value={formData.title}
                  name="title"
                  onChange={handleInputChange}
                  options={Property}
                  optionLabel="name"
                  placeholder="Sandtone Home"
                  className="w-full "
                />
              </div>
              <div className="custom_input">
                <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8 invisible">
                  Invisible
                </label>
                <div className="flex custfileupload">
                  <InputText
                     value={formData.Invisible}
                     name="Invisible"
                     onChange={handleInputChange}
                    placeholder="Select Document File"
                    className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                  />
                  <FileUpload
                    mode="basic"
                    name="demo[]"
                    url="/api/upload"
                    accept="image/*"
                    chooseLabel="Upload"
                    maxFileSize={1000000}
                    onUpload={onUpload}
                  />
                </div>
              </div>
            </div>

            <div className="custom_input">
              <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">
                Address
              </label>
              <div className="flex gap-2 xl:gap-[1.389vw] items-center">
                <InputText
                 value={formData.address}
                 name="address"
                 onChange={handleInputChange}
                  placeholder="Enter address"
                  className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                />
                <Link href="">
                  {" "}
                  <Image
                    src={"/assets/images/location_icon.svg"}
                    width={36}
                    height={36}
                    className="xl:w-[2.778vw] xl:h-[2.778vw] w-[36px] h-[36px] mx-auto"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:mt-[0.833vw] mt-[16px] xl:px-[2.167vw] px-[20px] mb-[50px] xl:mb-[2.604vw]">
          <div className="text-[#565D6D] text-[20px] xl:text-[1.111vw] font-bold leading-8">
            Sent communication to:
          </div>
          <div className="flex gap-14 mb-[12px] xl:mb-[0.625vw]">
            <div className="mb-[8px]">
              <Checkbox
                htmlFor="ingredient1"
                onChange={() => handleCheckboxChange('phoneChecked')}
                name="phoneChecked"
                checked={formData.phoneChecked}
              ></Checkbox>
              <label htmlFor="ingredient1" className="ml-2">
                Phone
              </label>
            </div>
            <div>
              <Checkbox
                htmlFor="ingredient1"
                onChange={() => handleCheckboxChange('emailChecked')}
                name="emailChecked"
                checked={formData.emailChecked}
              ></Checkbox>
              <label htmlFor="ingredient1" className="ml-2">
                Email
              </label>
            </div>
          </div>
          <div className="flex gap-1">
            <Checkbox
              htmlFor="ingredient1"
              onChange={() => handleCheckboxChange('agreeChecked')}
              name="agreeChecked"
              checked={formData.agreeChecked}
            ></Checkbox>
            <label htmlFor="ingredient1" className="ml-2">
              Agree… xxxxx xxxxxx xxxxxx xxx xx x xx x x x x x x x x x x x
              xxx x x xx x x x x x x x x x x x x{" "}
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-4 items-center">
          <Link href='' onClick={props.onHides} className=" px-4 text-center flex justify-center text-[#9095A1] ">
            CANCEL
          </Link>
          <Link
            href=""
            onClick={profileSubmit}
            className="xl:order-2 order-1 custmBtn red radiusFull  text-center flex justify-center"
          >
            <i className="pi pi-check"></i> Submit
          </Link>
        </div>
      </Dialog>
    </div>
  )

}