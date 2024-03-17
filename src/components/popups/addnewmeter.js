// import React, { Fragment, useRef, useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputtext';
// import { Dropdown } from 'primereact/dropdown';
// import { Toast } from 'primereact/toast';
// import { FileUpload } from 'primereact/fileupload';
// import { InputSwitch } from 'primereact/inputswitch';
// import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import { Checkbox } from 'primereact/checkbox';
// import { Calendar } from 'primereact/calendar';
// import axios from 'axios';
// import { json } from 'react-router-dom';
// import FormData from 'form-data';
// import { format } from 'date-fns';
// // import { Id } from 'react-flags-select';
// import { useRouter } from 'next/router';
// import { toast, ToastContainer } from 'react-toastify';
// import { handleEditClick } from '@/pages/meter';

// //  export const handleEditClick = (clickMeter) => {
// //    editShow(clickMeter);
// //  };
// export default function AddNewMeterPopup(props) {
//   const [visible, setVisible] = useState(false);
//   const [checked, setChecked] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const [buttonText, setButtonText] = useState('Add Meter');
//   //   add meter states

//   const [selectedProperty, setSelectedProperty] = useState();
//   const [defaultProperty, setDefaultProperty] = useState({
//     name: '',
//     id: null,
//   });
//   const [defaultname, setDefaultName] = useState('');
//   const [defaultId, setDefaultId] = useState(null);
//   const [MeterNumber, setMeterNumber] = useState('');
//   const [Alias, SetAlias] = useState('');
//   const [DailyTarget, SetDailyTarget] = useState('');
//   const [taxNumber, settaxNumber] = useState('');
//   const [selectProof, setSelectProof] = useState();
//   const [date, setDate] = useState();
//   const toasts = useRef(null);
//   const [activeTab, setActiveTab] = useState(0);
//   const [icons, setIcons] = useState([]);
//   const [loading, setLoading] = useState(false);
//   // const router = useRouter();
//   const [meterTypeId, setMeterTypeId] = useState(1);
//   const [selectProperty, setSelectProperty] = useState([]);
//   const [selectPropertyId, setSelectPropertyId] = useState(null);

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//     setMeterTypeId(icons[index].id);
//   };
//   // console.log(meterTypeId);

//   const onUpload = () => {
//     toast.success('File Uploaded');
//   };
//   const editShow = async (meter) => {
//     // const [loading,setLoading] = useState(false)
//     // console.log(Id);
//     // console.log(props.editValue);

//     try {
//       console.log('meter', meter);
//       const accessToken = localStorage.getItem('token');
//       setLoading(true);
//       const requestedData = {
//         accessToken: JSON.parse(accessToken),
//         Id: meter.id,
//         companyId: 1,
//       };
//       const response = await axios.post(
//         `${process.env.API_URL}/api/meter/edit/${requestedData.Id}?api-version=1.0`,
//         {
//           requestedData,
//         }
//       );

//       if (response) {
//         console.log('hhhh666');
//         // setVisible(true);
//         // setMeterNumber(response.data.meterNumber);
//         //   setId(product.id)
//         // console.log(response);
//         // setMeterNumber(455);
//         // MeterNumber ='hhh'
//         // setMeterNumber(response.data.meterNumber);

//         setLoading(false);
//       }
//     } catch (error) {
//       // toast.error('something went wrong');
//       // setLoading(false);
//       console.log(error);
//     }
//   };

//   // add meter
//   const [validation, setvalidation] = useState({});
//   const handleSubmit = async (e) => {
//     if (checked) {
//       e.preventDefault();
//       // if (MeterNumber === ' ') {
//       if (!MeterNumber.trim()) {
//         validation.MeterNumber = 'MeterName is Required';
//       }
//       if (!Alias) {
//         validation.Alias = 'Alias is Required';
//       }

//       if (!selectProof) {
//         validation.selectProof = 'document proof is required';
//       }

//       if (!taxNumber) {
//         validation.taxNumber = 'tax number is required';
//       }

//       if (!DailyTarget) {
//         validation.DailyTarget = 'daily target is required';
//       }
//       if (!date) {
//         validation.date = ' Contract End Date is required';
//       }

//       setvalidation(validation);
//       try {
//         const accessToken = localStorage.getItem('token');
//         const formData = new FormData();
//         const AuthStr = 'Bearer '.concat(JSON.parse(accessToken));
//         // formData.append('file', selectProof);
//         // const propertyid = localStorage.getItem('id');

//         const formatDate = format(date, 'yyyy-MM-dd');
//         formData.append('ContractProofDocumentTypeId', 1);
//         formData.append('MeterAlias', Alias);
//         formData.append('ContractProofDocumentId', 2);
//         formData.append('ContractProofDocument', selectProof);
//         formData.append('PropertyId', selectPropertyId);
//         formData.append('DailyTargetConsumption', DailyTarget);
//         formData.append('MeterNumber', MeterNumber);
//         formData.append('TaxNumber', taxNumber);
//         formData.append('ContractEndDate', formatDate);
//         formData.append('MeterTypeId', meterTypeId);

//         setLoading(true);
//         setButtonText('please wait...');
//         const response = await fetch(
//           `${process.env.API_URL}/api/meter/edit?api-version=1.0`,
//           {
//             method: 'POST',
//             headers: {
//               Authorization: AuthStr,
//             },
//             body: formData,
//           }
//         );
//         if (response.ok) {
//           toast.success('Added Successfully');
//           // props.onHide();
//           setVisible(false);
//         }
//         setLoading(false);
//       } catch (error) {
//         toast.error('something went wrong');
//         console.log(error);
//         setButtonText('Add Meter ');
//       }
//     } else {
//       toast.error('Please Accept Terms & Condition');
//     }
//   };

//   // const handleEditClick = (clickedProduct) => {
//   //   // Pass the clickedProduct to the editShow function
//   //   editShow(clickedProduct);
//   // };
//   // pop up icons
//   const fetchIcons = async () => {
//     try {
//       const accessToken = localStorage.getItem('token');
//       const AuthStr = 'Bearer '.concat(JSON.parse(accessToken));
//       const owenerId = localStorage.getItem('loggeduserId');
//       const response = await axios.get(
//         `${process.env.API_URL}/api/meter/get-meter-masters/${owenerId}?api-version=1.0`,
//         {
//           headers: {
//             Authorization: `${AuthStr}`,
//           },
//         }
//       );
//       if (response) {
//         const data = response.data.meterTypeList;
//         const selectProperties = response.data.propertiesList;
//         setIcons(data);
//         // select properties for add meters
//         setSelectProperty(selectProperties);
//       }
//     } catch (error) {
//       toast.error('something went wrong ');
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     // editshow
//     editShow(props.editValue);
//     const meterName = localStorage.getItem('propertyname');
//     const meterId = localStorage.getItem('id');
//     if (meterName) {
//       setDefaultName(meterName);
//       // setDefaultProperty(meterName);
//     }
//     if (meterId) {
//       setDefaultId(meterId);
//       setSelectPropertyId(meterId);
//     }
//     setDefaultProperty({
//       name: localStorage.getItem('propertyname'),
//       id: localStorage.getItem('id'),
//     });
//     fetchIcons();
//     // console.log(selectProperty);
//   }, []);
//   return (
//     <div className='edit_profile'>
//       {/* {console.log(defaultProperty)} */}
//       <ToastContainer />
//       <Dialog
//         visible={props.visible}
//         // breakpoints={{ "960px": "80vw", "640px": "90vw" }}
//         onHide={props.onHides}
//         draggable={false}
//         resizable={false}
//         className='xl:w-[50vw] w-[752px] edit_profile'
//       >
//         <div className='mt-[35px] xl:mt-[1.563vw] mb-[26px] xl:mb-[1.354vw]'>
//           <div className=' flex justify-center text-[#171A1F] text-[30px] xl:text-[1.563vw] font-bold leading-10'>
//             Add New Meter
//           </div>
//         </div>
//         <div className='mb-[36px] xl:mb-[1.875vw]'>
//           <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
//             <TabList>
//               <div className='flex items-center  justify-center gap-6 mt-[35px] xl:mt-[1.563vw] mb-[26px] xl:mb-[1.354vw]'>
//                 {icons.map((icon, index) => {
//                   return (
//                     <>
//                       <Tab className='w-12'>
//                         <div
//                           key={icon.id}
//                           className='flex flex-col justify-center cursor-pointer'
//                         >
//                           <Image
//                             src={`/assets/images/${
//                               activeTab === index
//                                 ? `${icon.name.toLowerCase()}_active_icon`
//                                 : `${icon.name.toLowerCase()}_inactive_icon`
//                             }.svg`}
//                             width={30}
//                             height={30}
//                             className='xl:w-[2.083vw] xl:h-[2.083vw] w-[30px] h-[30px] mx-auto'
//                             alt=''
//                           />
//                           <div
//                             className={`${
//                               activeTab === index
//                                 ? 'text-[#EC3237]'
//                                 : 'text-[#565D6D]'
//                             }
//                            text-[12px] xl:text-[0.972vw] text-center font-normal`}
//                           >
//                             {icon.name}
//                           </div>
//                         </div>
//                       </Tab>
//                       {/* tabs */}
//                     </>
//                   );
//                 })}
//               </div>
//               {/* <div className='flex items-center justify-center gap-5 mt-[35px] xl:mt-[1.563vw] mb-[26px] xl:mb-[1.354vw]'>
//                 <Tab>
//                   <div className='flex flex-col justify-center cursor-pointer'>
//                     <Image
//                       src={`/assets/images/${
//                         activeTab === 0
//                           ? 'water_drop_active_icon'
//                           : 'water_drop_inactive_icon'
//                       }.svg`}
//                       width={30}
//                       height={30}
//                       className='xl:w-[2.083vw] xl:h-[2.083vw] w-[30px] h-[30px] mx-auto'
//                       alt=''
//                     />
//                     <div
//                       className={`${
//                         activeTab === 0 ? 'text-[#EC3237]' : 'text-[#565D6D]'
//                       } text-[12px] xl:text-[0.972vw] text-center font-normal`}
//                     >
//                       Water
//                     </div>
//                   </div>
//                 </Tab>
//                 <Tab>
//                   <div className='flex flex-col justify-center cursor-pointer'>
//                     <Image
//                       src={`/assets/images/${
//                         activeTab === 1
//                           ? 'light_active_icon'
//                           : 'light_inactive_icon'
//                       }.svg`}
//                       width={30}
//                       height={30}
//                       className='xl:w-[2.083vw] xl:h-[2.083vw] w-[30px] h-[30px] mx-auto'
//                       alt=''
//                     />
//                     <div
//                       className={`${
//                         activeTab === 1 ? 'text-[#EC3237]' : 'text-[#565D6D]'
//                       } text-[12px] xl:text-[0.972vw] font-normal text-center`}
//                     >
//                       Electricity
//                     </div>
//                   </div>
//                 </Tab>
//                 <Tab>
//                   <div className='flex flex-col justify-center cursor-pointer'>
//                     <Image
//                       src={`/assets/images/${
//                         activeTab === 2
//                           ? 'gas_acitve_icon'
//                           : 'gas_inactive_icon'
//                       }.svg`}
//                       width={30}
//                       height={30}
//                       className='xl:w-[2.083vw] xl:h-[2.083vw] w-[30px] h-[30px] mx-auto'
//                       alt=''
//                     />
//                     <div
//                       className={`${
//                         activeTab === 2 ? 'text-[#EC3237]' : 'text-[#565D6D]'
//                       } text-center text-[12px] xl:text-[0.972vw] font-normal text-center`}
//                     >
//                       Gas
//                     </div>
//                   </div>
//                 </Tab>
//               </div> */}
//             </TabList>
//             {icons.map((meterType) => {
//               return (
//                 <>
//                   <TabPanel key={meterType.id}>
//                     <div className='xl:mt-[1.042vw] mt-[20px] xl:px-[2.167vw] px-[20px]'>
//                       <div className='xl:space-y-[0.573vw] space-y-[10px]'>
//                         <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-[2.917vw]'>
//                           <div className='custom_dropdown'>
//                             <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8 block'>
//                               Select Property{' '}
//                               <span className='text-[#EC3237]'>*</span>
//                             </label>
//                             <Dropdown
//                               // required
//                               value={selectedProperty}
//                               onChange={(e) => {
//                                 setSelectedProperty(e.target.value);
//                                 setSelectPropertyId(e.target.value.id);
//                               }}
//                               key={selectProperty.id}
//                               options={selectProperty}
//                               optionLabel='name'
//                               placeholder={defaultProperty.name}
//                               className='w-full '
//                             />
//                           </div>
//                           <div className='custom_input'>
//                             <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
//                               {meterType.name} Number{' '}
//                               <span className='text-[#EC3237]'>*</span>
//                             </label>
//                             <InputText
//                               value={MeterNumber}
//                               onChange={(e) => setMeterNumber(e.target.value)}
//                               placeholder='Enter Meter Number'
//                               className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
//                             />
//                             {/* {validation ? (
//                               <h1 className='text-[#EC3237]'>
//                                 {meterType.name} Number is required
//                               </h1>
//                             ) : (
//                               ''
//                             )} */}
//                             {validation.MeterNumber && (
//                               <h1 className='text-[#EC3237]'>
//                                 {meterType.name} Number is required
//                               </h1>
//                             )}
//                           </div>
//                         </div>
//                         <div className='custom_input grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-[2.917vw]'>
//                           <div className=''>
//                             <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
//                               {meterType.name} Alias{' '}
//                               <span className='text-[#EC3237]'>*</span>
//                             </label>
//                             <InputText
//                               required
//                               value={Alias}
//                               onChange={(e) => SetAlias(e.target.value)}
//                               placeholder='Enter Meter Alias'
//                               className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
//                             />
//                             {validation.Alias && (
//                               <h1 className='text-[#EC3237]'>
//                                 {meterType.name} Alias is required
//                               </h1>
//                             )}
//                           </div>
//                           <div className=''>
//                             <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
//                               Daily Target Consumption (Cube ft){' '}
//                               <span className='text-[#EC3237]'>*</span>
//                             </label>
//                             <InputText
//                               required
//                               value={DailyTarget}
//                               onChange={(e) => SetDailyTarget(e.target.value)}
//                               placeholder='Enter Target'
//                               className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
//                             />
//                             {validation.DailyTarget && (
//                               <h1 className='text-[#EC3237]'>
//                                 DailyTarget is required
//                               </h1>
//                             )}
//                           </div>
//                         </div>
//                         <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-[2.917vw]'>
//                           <div className='custom_input'>
//                             <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
//                               Tax Number{' '}
//                               <span className='text-[#EC3237]'>*</span>
//                             </label>
//                             <InputText
//                               required
//                               value={taxNumber}
//                               onChange={(e) => settaxNumber(e.target.value)}
//                               placeholder='Enter Tax Number '
//                               className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
//                             />
//                             {validation.taxNumber && (
//                               <h1 className='text-[#EC3237]'>
//                                 Tax Number is required
//                               </h1>
//                             )}
//                           </div>
//                           <div className='custom_input'>
//                             <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
//                               Contract Proof{' '}
//                               <span className='text-[#EC3237]'>*</span>
//                             </label>
//                             <div className='flex custfileupload custfileupload2'>
//                               <InputText
//                                 disabled
//                                 placeholder='Select Document File'
//                                 className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
//                               />
//                               <Toast ref={toast}></Toast>
//                               <FileUpload
//                                 mode='basic'
//                                 name='demo[]'
//                                 url='/api/upload'
//                                 accept='image/*'
//                                 value={selectProof}
//                                 onSelect={(e) => {
//                                   setSelectProof(e.files[0]);
//                                 }}
//                               />
//                             </div>
//                             {validation.selectProof && (
//                               <h1 className='text-[#EC3237]'>
//                                 Contract proof document is required
//                               </h1>
//                             )}
//                           </div>
//                         </div>
//                         <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-[2.917vw]'>
//                           <div className='custom_input custom_calendar'>
//                             <label className='block text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
//                               Contract End Date{' '}
//                               <span className='text-[#EC3237]'>*</span>
//                             </label>
//                             <Calendar
//                               // required
//                               value={date}
//                               onChange={(e) => setDate(e.target.value)}
//                               showIcon
//                               dateFormat='dd/mm/yy'
//                               placeholder='DD/MM/YYYY'
//                               className='w-full'
//                               minDate={new Date()} // Disable dates before today's date
//                             />
//                             {validation.date && (
//                               <h1 className='text-[#EC3237]'>
//                                 Contract End Date is required
//                               </h1>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className='xl:mt-[1.979vw] mt-[38px] xl:px-[2.167vw] px-[20px] mb-[42px] xl:mb-[2.188vw]'>
//                       <div className='flex gap-1'>
//                         <Checkbox
//                           required
//                           htmlFor='ingredient1'
//                           onChange={(e) => setChecked(e.checked)}
//                           checked={checked}
//                           className='mt-1'
//                         ></Checkbox>
//                         <label htmlFor='ingredient1' className='ml-2'>
//                           Agree… xxxxx xxxxxx xxxxxx xxx xx x xx x x x x x x x x
//                           x x x xxx x x xx x x x x x x x x x x x x{' '}
//                         </label>
//                       </div>
//                       {!checked ? (
//                         <h1 className='text-[#EC3237] ml-8 my-2'>
//                           Please Accept Terms & Conditions
//                         </h1>
//                       ) : (
//                         <p></p>
//                       )}
//                     </div>
//                     <div className='flex flex-wrap items-center justify-between xl:px-[2.167vw] px-[20px] gap-2'>
//                       <div className='flex flex-wrap gap-4 items-center  '>
//                         <Link
//                           href=''
//                           onClick={props.onHides}
//                           className=' px-4 text-center flex justify-center text-[#9095A1] '
//                         >
//                           CANCEL
//                         </Link>
//                         <button
//                           onClick={handleSubmit}
//                           type='submit'
//                           href=''
//                           className=' custmBtn red radiusFull  text-center flex justify-center'
//                         >
//                           <i className='pi pi-check'></i> {buttonText}
//                         </button>
//                       </div>
//                     </div>
//                   </TabPanel>
//                 </>
//               );
//             })}
//           </Tabs>
//         </div>
//       </Dialog>
//       <Toast ref={toast} />
//       <ConfirmDialog />
//     </div>
//   );
// }
