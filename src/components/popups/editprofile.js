import React, { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { InputSwitch } from 'primereact/inputswitch';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import axios from 'axios';
import { Checkbox } from 'primereact/checkbox';
import { ToastContainer, toast } from 'react-toastify';

export default function EditProfilePopup(props) {
  const [checked, setChecked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(props.activeNumber);
  const [selected, setSelected] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [file,setFile] = useState(null);
  const option = [
    {id:1, name: 'Mrs.', code: 'SH1' },
    {id:2, name: 'Ms', code: 'SH2' },
    { id:3,name: 'Mr', code: 'SH3' },
    { id:4,name: 'Miss', code: 'SHG' },
  ];
  const [selectProof, setSelectProof] = useState(null);
  const Proof = [
    { name: 'Driving Licence', code: 'SH1' },
    { name: 'Driving Licence', code: 'SH2' },
    { name: 'Driving Licence', code: 'SH3' },
    { name: 'Driving Licence', code: 'SHG' },
  ];

  const onUpload = () => {
    toast.success('File Uploaded');
  };

  const [formDataValue, setFormData] = useState({
    maintitle:"",
    title: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    Invisible: '',
    selectedProperty: '',
    documentFile: '', // Assuming this is a file path or some identifier
    address: '',
    phoneChecked: false,
    emailChecked: false,
    agreeChecked: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formDataValue,
      [name]: value,
    });
  };

  console.log("selectedImage",file);
  const profileSubmit = async() =>{
    // setProfilePopup(false)

    try {
      const comunicationArray = [];

      formDataValue.emailChecked ? comunicationArray.push(1) : null
      formDataValue.phoneChecked ? comunicationArray.push(2) : null  
      const loggeduserId = localStorage.getItem("loggeduserId")
      const token = localStorage.getItem("token")

  const formData = new FormData();
     formData.append("id", loggeduserId)
     formData.append("TitleId",formDataValue.maintitle?.id)
     formData.append("FirstName",formDataValue.firstName)
     formData.append("LastName",formDataValue.lastName)
     formData.append("CountryCode","91")
     formData.append("Mobile",formDataValue.mobile)
     formData.append("Role","")
     formData.append("Email",formDataValue.email)
     formData.append("CompanyId",1)
     formData.append("AddressLatitude","")
     formData.append("AddressLongitude","")
     formData.append("AddressLine1",formDataValue.address)
     formData.append("AddressLine2",formDataValue.address)
     formData.append("City","kolhapur")
     formData.append("State","maharastra")
     formData.append("Country","india")
     formData.append("Status","")
     formData.append("StatusId",0)
    if( formDataValue.emailChecked){
      formData.append("CommunicationTypesIds",1)
    }

    if( formDataValue.phoneChecked){
      formData.append("CommunicationTypesIds",2)
    }
    formData.append("ProofDocument",file)
   formData.append("ProofDocumentTypeId",1)
   formData.append("ProofDocumentId",1)


   const profileFormData = new FormData();
profileFormData.append("id", loggeduserId)
profileFormData.append("ProfilePicture", selectedImage)

// Assuming you have the accessToken available
const accessToken = JSON.parse(token);
   if(selectedImage){
 const imageResponse = await axios.post(`https://104.251.223.167:7500/api/user/update-profile_pic?api-version=1.0`, profileFormData,{ headers: {
    Authorization: `Bearer ${accessToken}`
  }});
// const ress = await fetch(`/api/register/updateprofile/`, {
//   method: 'POST',
//   headers: {
//       'Accept': 'application/json',
//   },
//   body:profileFormData
// });
   }
      const response = await axios.post(`${process.env.API_URL}/api/user/update-user?api-version=1.0`, formData,{ headers: {
        Authorization: `Bearer ${accessToken}`
      }});

    

     
      // Handle successful response if needed
      if (response) {
        toast.success('Update successfully....');
        props.setEditProfile(false);
      }
      // props.setProfilePopup(false)
      // if(response){
      //   router.push("/dashboard")
      // }
      // setVisible(false)
    } catch (error) {
      // console.log('error', error);
      toast.error('An error occurred');
    }
  };

    const handleFileChange = (event) =>{
      const file = event.target.files[0];
      setSelectedImage(file)
    }

  const accept = () => {
    toast.success('You have accepted');
  };

  const reject = () => {
    toast.error('You have rejected');
  };
  const deleteconfirm = () => {
    confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept,
      reject,
    });
  };

  const handleCheckboxChange = (checkboxName) => {
    setFormData({
      ...formDataValue,
      [checkboxName]: !formDataValue[checkboxName],
    });
  };

  const getByIdData = async () => {
    const loggeduserId = localStorage.getItem('loggeduserId');
    const token = localStorage.getItem('token');
    // console.log('loggeduserId', loggeduserId);
    if (activeIndex === 0 && loggeduserId) {
      if (token) {
        const requestedData = {
          accessToken: JSON.parse(token),
          userId: parseInt(loggeduserId),
        };
        const resp = await axios.post('/api/common/getuserbyid', {
          requestedData,
        });
        // console.log('resp', resp);
        const data = resp.data;

        function isMobilePresent(name) {
          return data.communicationTypes.some((item) => item.name === name);
        }
        if (resp) {
          const title = option.find((elm)=>elm.name === data.title);
          setFormData({
            maintitle: title,
            title: data.title,
            firstName: data.firstName,
            lastName: data.lastName,
            mobile: data.mobile,
            email: data.email,
            Invisible: '',
            selectedProperty: '',
            documentFile: '', // Assuming this is a file path or some identifier
            address: data.city,
            phoneChecked: isMobilePresent('Mobile'),
            emailChecked: isMobilePresent('Email'),
            agreeChecked: false,
          });
          // setFile(data.profileUrl)
        }
      }
    }
  };
  useEffect(() => {
    setActiveIndex(props.activeNumber);
  }, [props.activeNumber]);

  useEffect(() => {
    getByIdData();
  }, [activeIndex]);

 console.log("file",file);



  
  const onFileSelect = (event) =>{
    console.log("file",event);
    setFile(event.files[0]);
  }

  

  return (
    <div className='edit_profile'>
      <Dialog
        visible={props.visible}
        // breakpoints={{ "960px": "80vw", "640px": "90vw" }}
        onHide={props.onHides}
        draggable={false}
        resizable={false}
        className='xl:w-[50vw] md:w-[752px] w-[95%] edit_profile'
      >
        <div className='p-[24px] xl:p-[1.250vw]'>
          <div className='grid grid-cols-12 gap-[23px] md:gap-[48px] xl:gap-[2.500vw]'>
            <div className='col-span-12 md:col-span-4'>
              <div className='space-y-[8px] border-b border-[#EAECF0] pb-[4px]'>
                <div className='flex items-center gap-3 xl:gap-[0.833vw]'>
                  {activeIndex === 0 ? (
                    <div className='w-[4px] h-[36px] xl:h-[1.875vw] bg-[#171A1F]'></div>
                  ) : (
                    <div className='w-[4px] h-[36px] xl:h-[1.875vw]'></div>
                  )}

                  <Link
                    href={''}
                    onClick={() => setActiveIndex(0)}
                    className={`${
                      activeIndex === 0
                        ? 'text-[#171A1F] font-bold'
                        : 'text-[#565D6D] font-normal'
                    }  text-[14px] xl:text-[0.833vw] py-[6px] flex items-center`}
                  >
                    <Image
                      src={`/assets/images/${
                        activeIndex === 0
                          ? 'profile_icon_active'
                          : 'profile_icon'
                      }.svg`}
                      width={20}
                      height={20}
                      className='xl:w-[1.242vw] xl:h-[1.242vw] w-[20px] h-[20px] mr-2'
                      alt=''
                    />{' '}
                    Profile
                  </Link>
                </div>
                <div className='flex items-center gap-3 xl:gap-[0.833vw]'>
                  {activeIndex === 1 ? (
                    <div className='w-[4px] h-[36px] xl:h-[1.875vw] bg-[#171A1F]'></div>
                  ) : (
                    <div className='w-[4px] h-[36px] xl:h-[1.875vw]'></div>
                  )}

                  <Link
                    href={''}
                    onClick={() => setActiveIndex(1)}
                    className={`${
                      activeIndex === 1
                        ? 'text-[#171A1F] font-bold'
                        : 'text-[#565D6D] font-normal'
                    }  text-[14px] xl:text-[0.833vw] py-[6px] flex items-center`}
                  >
                    <Image
                      src={`/assets/images/${
                        activeIndex === 1
                          ? 'password_icon_active'
                          : 'password_icon'
                      }.svg`}
                      width={20}
                      height={20}
                      className='xl:w-[1.242vw] xl:h-[1.242vw] w-[20px] h-[20px] mr-2'
                      alt=''
                    />{' '}
                    Password
                  </Link>
                </div>
                <div className='flex items-center gap-3 xl:gap-[0.833vw]'>
                  {activeIndex === 2 ? (
                    <div className='w-[4px] h-[36px] xl:h-[1.875vw] bg-[#171A1F]'></div>
                  ) : (
                    <div className='w-[4px] h-[36px] xl:h-[1.875vw]'></div>
                  )}

                  <Link
                    href={''}
                    onClick={() => setActiveIndex(2)}
                    className={`${
                      activeIndex === 2
                        ? 'text-[#171A1F] font-bold'
                        : 'text-[#565D6D] font-normal'
                    }  text-[14px] xl:text-[0.833vw] py-[6px] flex items-center`}
                  >
                    <Image
                      src={`/assets/images/${
                        activeIndex === 2
                          ? 'upload_document_icon_active'
                          : 'upload_document_icon'
                      }.svg`}
                      width={20}
                      height={20}
                      className='xl:w-[1.242vw] xl:h-[1.242vw] w-[20px] h-[20px] mr-2'
                      alt=''
                    />{' '}
                    Update Documents
                  </Link>
                </div>
                <div className='flex items-center gap-3 xl:gap-[0.833vw]'>
                  {activeIndex === 3 ? (
                    <div className='w-[4px] h-[36px] xl:h-[1.875vw] bg-[#171A1F]'></div>
                  ) : (
                    <div className='w-[4px] h-[36px] xl:h-[1.875vw]'></div>
                  )}

                  <Link
                    href={''}
                    onClick={() => setActiveIndex(3)}
                    className={`${
                      activeIndex === 3
                        ? 'text-[#171A1F] font-bold'
                        : 'text-[#565D6D] font-normal'
                    }  text-[14px] xl:text-[0.833vw] py-[6px] flex items-center`}
                  >
                    <Image
                      src={`/assets/images/${
                        activeIndex === 3
                          ? 'settings_icon_active'
                          : 'settings_icon'
                      }.svg`}
                      width={20}
                      height={20}
                      className='xl:w-[1.242vw] xl:h-[1.242vw] w-[20px] h-[20px] mr-2'
                      alt=''
                    />{' '}
                    Settings
                  </Link>
                </div>
              </div>
              <div className='flex items-center gap-3 xl:gap-[0.833vw] mt-[10px] xl:mt-[0.585vw]'>
                <div className='w-[4px] h-[36px] xl:h-[1.875vw]'></div>
                <Link
                  href={''}
                  onClick={deleteconfirm}
                  className={`text-[#DE3B40] font-normal text-[14px] xl:text-[0.833vw] py-[6px] flex items-center`}
                >
                  <Image
                    src={`/assets/images/delete_icon.svg`}
                    width={20}
                    height={20}
                    className='xl:w-[1.242vw] xl:h-[1.242vw] w-[20px] h-[20px] mr-2'
                    alt=''
                  />{' '}
                  Delete your account
                </Link>
              </div>
            </div>
            <div className='col-span-12 md:col-span-8 min-h-[35vw] relative'>
              {/* Profile start */}
              {activeIndex === 0 ? (
                <>
                  <div className='text-[#171A1F] text-[32px] xl:text-[1.667vw] font-normal mb-[16px] xl:mb-[0.833vw]'>
                    Edit profile
                  </div>
                  <div className='text-[#323743] text-[14px] xl:text-[0.729vw] font-normal mb-[16px] xl:mb-[0.833vw]'>
                    Profile photo
                  </div>
                  <div className='flex items-center gap-[24px] xl:gap-[1.250vw]'>
                    <div>
                      {
                        selectedImage  && (
                       <Image
                       src={URL.createObjectURL(selectedImage)}
                        width={100}
                        height={100}
                        className='xl:w-[5.208vw] xl:h-[5.208vw] w-[100px] h-[100px]'
                        alt=''
                      />
                        )
                      }
                      
                    </div>
                    <div className='space-y-[8px] xl:space-y-[0.417vw]'>
                      <div className='text-[#171A1F] text-[14px] xl:text-[0.729vw] font-normal'>
                        Upload your photo
                      </div>
                      <div className='text-[#565D6D] text-[12px] xl:text-[0.729vw] font-normal '>
                        Your photo should be in PNG or JPG format
                      </div>
                      <div className="flex items-center gap-2 cursor-pointer">
                      <input onChange={handleFileChange} type="file" className="absolute opacity-0 cursor-pointer"/>
                        <button className="text-[12px] xl:text-[0.833vw] cursor-pointer text-[#171A1F] border border-[#171A1F] bg-[#FFFFFF] p-[8px] xl:p-[0.417vw] rounded-[2px]">
                          Choose image
                        </button>
                        <button className='text-[12px] xl:text-[0.833vw] text-[#9095A1] bg-[#FFFFFF] p-[8px] xl:p-[0.417vw] rounded-[2px]'>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='xl:mt-[1.198vw] mt-[23px]'>
                    <div className='xl:space-y-[0.573vw] space-y-[10px] mb-[39px] xl:mb-[2.031vw]'>
                      <div className='grid grid-cols-5 gap-[24px] xl:gap-[1.250vw]'>
                        <div className='custom_dropdown titleDropdown col-span-5 md:col-span-1'>
                          <label className='text-[#424856] text-[16px] xl:text-[1.111vw] font-bold leading-8 block'>
                            Title
                          </label>
                          <Dropdown
                value={formDataValue.maintitle}
                name="maintitle"
                onChange={handleInputChange}
                options={option}
                optionLabel="name"
                placeholder="Select"
                className="md:w-[10rem] "
              />
                        </div>
                        <div className='custom_input col-span-5 md:col-span-2'>
                          <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                            First Name
                          </label>
                          <InputText
                value={formDataValue.firstName}
                name="firstName"
                onChange={handleInputChange}
                  placeholder="Enter first name"
                  className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                />
                        </div>
                        <div className='custom_input col-span-5 md:col-span-2'>
                          <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                            Last name
                          </label>
                          <InputText
                 value={formDataValue.lastName}
                 name="lastName"
                 onChange={handleInputChange}
                  placeholder="Enter last name "
                  className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                />
                        </div>
                      </div>
                      <div className='custom_input grid grid-cols-1 md:grid-cols-2 gap-[24px] xl:gap-[1.250vw]'>
                        <div className=''>
                          <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                            Mobile
                          </label>
                          <InputText
                 value={formDataValue.mobile}
                 disabled
                 name="mobile"
                 onChange={handleInputChange}
                  placeholder="Enter mobile number"
                  className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                />
                        </div>
                        <div className=''>
                          <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                            Email
                          </label>
                          <InputText
                 value={formDataValue.email}
                 name="email"
                 disabled
                 onChange={handleInputChange}
                  placeholder="Enter email "
                  className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                />
                        </div>
                      </div>
                      <div className='custom_input '>
                        <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                          Address
                        </label>
                        <div className="flex gap-2 xl:gap-[1.389vw] items-center">
                        <InputText
                 value={formDataValue.address}
                 name="address"
                 onChange={handleInputChange}
                  placeholder="Enter address"
                  className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                />
                          <Link href="">
                            {" "}
                            <Image
                              src={'/assets/images/location_icon.svg'}
                              width={36}
                              height={36}
                              className='xl:w-[2.778vw] xl:h-[2.778vw] w-[36px] h-[36px] mx-auto'
                              alt=''
                            />
                          </Link>
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
                checked={formDataValue.phoneChecked}
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
                checked={formDataValue.emailChecked}
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
              checked={formDataValue.agreeChecked}
            ></Checkbox>
            <label htmlFor="ingredient1" className="ml-2">
              Agree… xxxxx xxxxxx xxxxxx xxx xx x xx x x x x x x x x x x x
              xxx x x xx x x x x x x x x x x x x{" "}
            </label>
          </div>
        </div>
                    </div>
                    <div className=' right-0 bottom-5 flex justify-end  items-center'>
                      <Link
                        href=''
                        onClick={props.onHides}
                        className=' text-[#9095A1] text-[14px] xl:text-[1vw] px-[12px] xl:px-[1.25vw] py-[7px] xl:py-[0.729vw] font-normal '
                      >
                        CANCEL
                      </Link>
                      <Link
                        href=''
                        onClick={profileSubmit}
                        className='xl:order-2 order-1 custmBtn red radiusFull text-center flex justify-center '
                      >
                        <i className='pi pi-check xl:text-[1.042vw] mr-1'></i>{' '}
                        SAVE PROFILE
                      </Link>
                    </div>
                  </div>
                </>
              ) : null}
              {/* Profile end */}

              {/* Change Password start */}
              {activeIndex === 1 ? (
                <>
                  <div className='text-[#171A1F] text-[32px] xl:text-[1.667vw] font-normal mb-[16px] xl:mb-[0.833vw]'>
                    Change Password
                  </div>
                  <div className='xl:mt-[0.990vw] mt-[19px]'>
                    <div className='grid grid-cols-12'>
                      <div className='col-span-10'>
                        <div className='custom_input mb-[29px] xl:mb-[1.510vw]'>
                          <label className='text-[#424856] text-[16px] xl:text-[1.111vw] font-bold leading-8 block'>
                            Old Password
                          </label>
                          <InputText
                            placeholder='Enter old Password'
                            className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                          />
                        </div>
                        <div className='custom_input mb-[29px] xl:mb-[1.510vw]'>
                          <label className='text-[#424856] text-[16px] xl:text-[1.111vw] font-bold leading-8 block'>
                            New Password
                          </label>
                          <InputText
                            placeholder='Enter old Password'
                            className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                          />
                        </div>
                        <div className='custom_input mb-[29px] xl:mb-[1.510vw]'>
                          <label className='text-[#424856] text-[16px] xl:text-[1.111vw] font-bold leading-8 block'>
                            Confirm Password
                          </label>
                          <InputText
                            placeholder='Enter old Password'
                            className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='xl:absolute right-0 bottom-5 flex justify-end  items-center mt-[68px] xl:mt-[3.542vw]'>
                      <Link
                        href=''
                        onClick={props.onHides}
                        className=' text-[#9095A1] text-[14px] xl:text-[1vw] px-[12px] xl:px-[1.25vw] py-[7px] xl:py-[0.729vw] font-normal '
                      >
                        CANCEL
                      </Link>
                      <Link
                        href=''
                        className='xl:order-2 order-1 custmBtn red radiusFull text-center flex justify-center '
                      >
                        <i className='pi pi-check xl:text-[1.042vw] mr-1'></i>{' '}
                        CHANGE PASSWORD
                      </Link>
                    </div>
                  </div>
                </>
              ) : null}
              {/* Change Password end */}

              {/* Update Documents start */}
              {activeIndex === 2 ? (
                <>
                  <div className='text-[#171A1F] text-[32px] xl:text-[1.667vw] font-normal mb-[16px] xl:mb-[0.833vw]'>
                    Update Document
                  </div>
                  <div className='text-[#323743] text-[14px] xl:text-[0.729vw] font-normal mb-[16px] xl:mb-[0.833vw]'>
                    Profile Document
                  </div>
                  <div className='flex items-center gap-[24px] xl:gap-[1.250vw]'>
                    <div>
                      <Image
                        src={`/assets/images/update_documents.png`}
                        width={124}
                        height={124}
                        className='xl:w-[6.458vw] xl:h-[6.458vw] w-[124px] h-[124px]'
                        alt=''
                      />
                    </div>
                    <div className='space-y-[8px] xl:space-y-[0.417vw]'>
                      <div className='text-[#171A1F] text-[14px] xl:text-[0.729vw] font-normal'>
                        Uploaded Document: Driving Licence
                      </div>
                      <div className='text-[#565D6D] text-[12px] xl:text-[0.729vw] font-normal '>
                        You can download your document
                      </div>
                      <div className='flex items-center gap-2'>
                        <button className='text-[12px] xl:text-[0.833vw] text-[#171A1F] border border-[#171A1F] bg-[#FFFFFF] p-[8px] xl:p-[0.417vw] rounded-[2px]'>
                          Download Document
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='xl:mt-[0.990vw] mt-[19px]'>
                    <div className='text-[#171A1F] text-[0.729vw] xl:text-[0.833vw] font-normal'>
                      Upload New Document
                    </div>
                    <div className='grid grid-cols-12'>
                      <div className='col-span-10'>
                        <div className='custom_dropdown mb-[17px] xl:mb-[0.885vw]'>
                          <label className='text-[#424856] text-[16px] xl:text-[1.111vw] font-bold leading-8 block'>
                            Select Proof Type
                          </label>
                          <Dropdown
                            value={selectProof}
                            onChange={(e) => setSelectProof(e.value)}
                            options={Proof}
                            optionLabel='name'
                            placeholder='Select'
                            className='w-full'
                          />
                        </div>
                        <div className='custom_input'>
                          <div className='flex custfileupload fileuploadpadding'>
                            <InputText
                              placeholder="Select Document File"
                              value={file?.name}
                              className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                            />
                            <Toast ref={toast}></Toast>
                            <FileUpload
                              mode="basic"
                              name="demo[]"
                              url="/api/upload"
                              onSelect={onFileSelect}
                              accept="*"
                              chooseLabel="Upload"
                              maxFileSize={10000000000000 }
                              onUpload={onUpload}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='xl:absolute right-0 bottom-5 flex justify-end  items-center mt-[68px] xl:mt-[3.542vw]'>
                      <Link
                        href=''
                        onClick={props.onHides}
                        className=' text-[#9095A1] text-[14px] xl:text-[1vw] px-[12px] xl:px-[1.25vw] py-[7px] xl:py-[0.729vw] font-normal '
                      >
                        CANCEL
                      </Link>
                      <Link
                        href=""
                        className="xl:order-2 order-1 custmBtn red radiusFull text-center flex justify-center "
                        onClick={profileSubmit}
                      >
                        <i className='pi pi-check xl:text-[1.042vw] mr-1'></i>{' '}
                        UPDATE DOCUMENT
                      </Link>
                    </div>
                  </div>
                </>
              ) : null}
              {/* Update Documents end */}

              {/* Settings start */}
              {activeIndex === 3 ? (
                <>
                  <div className='text-[#171A1F] text-[32px] xl:text-[1.667vw] font-normal mb-[16px] xl:mb-[0.833vw]'>
                    Settings
                  </div>
                  <div className='xl:mt-[0.990vw] mt-[19px]'>
                    <div className='px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] generalShadow mr-[96px] xl:mr-[4.948vw] '>
                      <div className='text-[#565D6D] text-[16px] xl:text-[1.111vw] font-semibold mb-[24px] xl:mb-[1.250vw]'>
                        General
                      </div>
                      <div className='flex justify-between items-center border-b border-b-[#DEE1E6] pb-[18px] xl:pb-[0.938vw]'>
                        <div className='text-[#171A1F] text-[16px] xl:text-[0.833vw] font-semibold '>
                          Enable Email Notification
                        </div>
                        <div className='custom_switch'>
                          <InputSwitch
                            checked={checked}
                            onChange={(e) => setChecked(e.value)}
                          />
                        </div>
                      </div>
                      <div className='flex justify-between items-center mt-[18px] xl:mt-[0.938vw]'>
                        <div className='text-[#171A1F] text-[16px] xl:text-[0.833vw] font-semibold '>
                          Enable Mobile Notification
                        </div>
                        <div className='custom_switch'>
                          <InputSwitch
                            checked={checked}
                            onChange={(e) => setChecked(e.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className='xl:absolute right-0 bottom-5 flex justify-end  items-center mt-[76px] xl:mt-[3.958vw]'>
                      <Link
                        href=''
                        onClick={props.onHides}
                        className=' text-[#9095A1] text-[14px] xl:text-[1vw] px-[12px] xl:px-[1.25vw] py-[7px] xl:py-[0.729vw] font-normal '
                      >
                        CANCEL
                      </Link>
                      <Link
                        href=''
                        className='xl:order-2 order-1 custmBtn red radiusFull text-center flex justify-center '
                      >
                        <i className='pi pi-check xl:text-[1.042vw] mr-1'></i>{' '}
                        SAVE SETTINGS
                      </Link>
                    </div>
                  </div>
                </>
              ) : null}
              {/* Settings end */}
            </div>
          </div>
        </div>
      </Dialog>

      <ToastContainer />
      <ConfirmDialog />
    </div>
  );
}
