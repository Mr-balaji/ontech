import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import Layout from '../../components/layout/layout';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'primereact/checkbox';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import axios, { Axios } from 'axios';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { FileUpload } from 'primereact/fileupload';
import { Calendar } from 'primereact/calendar';
import { format } from 'date-fns';
import FormData from 'form-data';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

export default function index() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [Show, setShow] = useState(false);
  const [Meter, setMeter] = useState([]);
  const [Id, setId] = useState(null);
  const [propertyname, setpropertyname] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [icons, setIcons] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState();
  const [defaultProperty, setDefaultProperty] = useState({
    name: '',
    id: null,
  });
  const [MeterNumber, setMeterNumber] = useState('');
  const [Alias, SetAlias] = useState('');
  const [DailyTarget, SetDailyTarget] = useState('');
  const [taxNumber, settaxNumber] = useState('');
  const [selectProof, setSelectProof] = useState();
  const [date, setDate] = useState('');
  const toasts = useRef(null);
  const [checked, setChecked] = useState(false);
  const [buttonText, setButtonText] = useState('Add Meter');
  const [meterTypeId, setMeterTypeId] = useState(1);
  const [selectProperty, setSelectProperty] = useState([]);
  const [selectPropertyId, setSelectPropertyId] = useState(null);
  const [contractProofDocumentId, setcontractProofDocumentId] = useState(null);
  const [StatusId, setStatusId] = useState(4);
  const [Open, setOpen] = useState(false);
  const [validation, setvalidation] = useState({});
  // const [validation, setvalidation] = useState([]);

  const accept = async () => {
    try {
      const accessToken = localStorage.getItem('token');
      const requestedData = {
        accessToken: JSON.parse(accessToken),
        Id: Id,
        companyId: 1,
      };
      const resp = await axios.post('/api/meter/deletemeter', {
        requestedData,
      });
      if (resp) {
        toast.success('delete successfully...');
        fetchMeterData();
      }
    } catch (error) {
      toast.error('Something went wrong...');
    }
  };

  const reject = () => {
    toasts.current.show({
      severity: 'warn',
      summary: 'Rejected',
      detail: 'You have rejected',
      life: 3000,
    });
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

  // active tab
  const handleTabClick = (index) => {
    setActiveTab(index);
    setMeterTypeId(icons[index].id);
  };
  // fetch
  const fetchMeterData = async () => {
    try {
      const propertyId = localStorage.getItem('id');
      const accessToken = localStorage.getItem('token');
      setLoading(true);
      const requestedData = {
        accessToken: JSON.parse(accessToken),
        propertyId: propertyId,
      };
      const response = await axios.post('/api/meter/getmeterlist', {
        requestedData,
      });
      if (response) {
        setLoading(true);
        setMeter(response.data.meters);
        setLoading(false);
        console.log(response.data);
      }
    } catch (error) {
      toast.error('something went wrong');
    }
  };
  // pop up icons
  const fetchIcons = async () => {
    try {
      const accessToken = localStorage.getItem('token');
      const ownerId = localStorage.getItem('loggeduserId');
      const requestedData = {
        accessToken: JSON.parse(accessToken),
        ownerId: ownerId,
      };
      const response = await axios.post('/api/meter/fetchmetericons', {
        requestedData,
      });
      if (response) {
        console.log(response);
        const data = response.data.meterTypeList;
        const selectProperties = response.data.propertiesList;
        setIcons(data);
        setSelectProperty(selectProperties);
      }
    } catch (error) {
      toast.error('something went wrong ');
      console.log(error);
    }
  };
  const [error, seterror] = useState(null);
  // add meter
  const validationSchema = Yup.object().shape({
    DailyTarget: Yup.number()
      .typeError('Daily Target is required')
      .required('Daily Target is required'),
    taxNumber: Yup.number()
      .typeError('Tax Number is required')
      .required('Tax Number is required'),
    MeterNumber: Yup.number()
      .typeError('MeterNumber is required')
      .required('MeterNumber is required'),
  });

  const handleSubmit = async (e) => {
    if (checked) {
      // e.preventDefault();

      if (!MeterNumber) {
        validation.MeterNumber = 'MeterNumber is Required';
        // validation.push(formatError('is required', { label: 'MeterNumber' }));
      }
      if (!Alias) {
        validation.Alias = 'Alias is Required';
      }

      if (!selectProof) {
        validation.selectProof = 'document proof is required';
      }

      if (!taxNumber) {
        validation.taxNumber = 'tax number is required';
      }

      if (!DailyTarget) {
        validation.DailyTarget = 'Daily Target is required';
      }

      if (!date) {
        validation.date = ' Contract End Date is required';
      }
      setvalidation(validation);

      try {
        await validationSchema.validate(
          { DailyTarget, taxNumber, MeterNumber },
          { abortEarly: false }
        );
        setvalidation.dailyTarget = null;
        setvalidation.taxNumber = null;
        setvalidation.MeterNumber = null;

        const accessToken = localStorage.getItem('token');
        const formatDate = format(date, 'yyyy-MM-dd');
        const formData = new FormData();
        const AuthStr = 'Bearer '.concat(JSON.parse(accessToken));
        formData.append('Id', Id);
        formData.append('PropertyId', selectPropertyId);
        formData.append('MeterNumber', parseInt(MeterNumber));
        formData.append('MeterAlias', Alias);
        formData.append('DailyTargetConsumption', DailyTarget);
        formData.append('TaxNumber', parseInt(taxNumber));
        formData.append('ContractEndDate', formatDate);
        formData.append('MeterTypeId', meterTypeId);
        formData.append('StatusId', 4);
        formData.append('ContractProofDocumentId', 1);
        formData.append('ContractProofDocumentTypeId', 1);
        formData.append('ContractProofDocument', selectProof);
        setLoading(true);
        setButtonText('please wait...');
        const response = await fetch(
          `http://104.251.223.167:7500/api/meter/edit?api-version=1.0`,
          {
            method: 'POST',
            headers: {
              Authorization: AuthStr,
            },
            body: formData,
          }
        );
        if (response.ok) {
          toast.success('Added Successfully');
          fetchMeterData();
          setVisible(false);
          console.log(response);
        }
        setLoading(false);
        setButtonText('Add Meter');
      } catch (error) {
        setButtonText('Add Meter ');
        error.inner.forEach((i) => {
          // toast.error(i.message);
          seterror(i.message);
        });
      }
    } else {
      toast.error('Please Accept Terms & Condition');
    }
  };
  // edit meter
  const editShow = async (meter) => {
    try {
      const accessToken = localStorage.getItem('token');
      const requestedData = {
        accessToken: JSON.parse(accessToken),
        Id: meter.id,
        companyId: 1,
      };
      // const AuthStr = 'Bearer '.concat(JSON.parse(accessToken));
      const response = await axios.post('/api/meter/getmeterbyid', {
        requestedData,
      });

      if (response.status === 200) {
        setMeterNumber(response.data.meterNumber);
        SetAlias(response.data.meterAlias);
        SetDailyTarget(response.data.dailyTargetConsumption);
        settaxNumber(response.data.taxNumber);
        setDate(new Date(response.data.contractEndDate));
        setSelectProof(selectProof);
        setcontractProofDocumentId(response.data.contractProofDocumentId);
        setStatusId(response.data.status);
        console.log(response.data);
        fetchMeterData();
      }
      setLoading(false);
    } catch (error) {
      toast.error('something went wrong');
    }
  };
  // get id
  const recordIdFunction = (meter) => {
    setId(meter.id);
  };
  // // edit
  const handleEditClick = (meter) => {
    editShow(meter);
  };
  // useEffect function
  useEffect(() => {
    fetchIcons();
    const meterName = localStorage.getItem('propertyname');
    const meterId = localStorage.getItem('id');

    if (meterId) {
      setSelectPropertyId(meterId);
    }
    setDefaultProperty({
      name: localStorage.getItem('propertyname'),
      id: localStorage.getItem('id'),
    });
    const Propertyname = localStorage.getItem('propertyname');
    if (Propertyname) {
      setpropertyname(Propertyname);
    }
    fetchMeterData();
  }, []);

  const itemTemplate = (meter) => {
    return (
      <div
        className='MeterId bg-[#323743] border-bottom-red xl:px-[30px] px-[10px] rounded-xl relative property-block xl:mb-[1.736vw] mb-3'
        key={meter.id}
      >
        <div className='  grid grid-cols-12'>
          <div className='col-span-12 sm:col-span-6 xl:col-span-6'>
            <div className='flex gap-[20px] xl:gap-[2.083vw] mb-2'>
              <div className='xl:w-[5.944vw] w-[100px] flex flex-col'>
                <div className='flex justify-center mb-1'>
                  <h6
                    className={`${
                      meter.status === 'Active'
                        ? 'text-[#fff] bg-[#1DD75B]'
                        : meter.status === 'Inactive'
                        ? 'text-[#323743] bg-[#BDC1CA]'
                        : 'text-[#fff] bg-[#EC3237]'
                    }  px-[6px] text-[10px] 
                     xl:text-[0.621vw] font-normal leading-4 text-center rounded-b-[8px]`}
                  >
                    {meter.status}
                  </h6>
                </div>
                <Image
                  src={`${'/assets/images/icon_'}${meter.meterType}${'.svg'}`}
                  width={80}
                  height={60}
                  className='xl:w-[5.556vw] xl:h-[4.167vw] w-[80px] h-[60px] mb-2 mx-auto'
                  alt=''
                />
                <div className='text-center'>
                  <h6
                    className='text-[#EC3237] bg-[#FEF1F1] text-[11px] 
                     xl:text-[0.625vw] font-semibold leading-4 text-center rounded-[2px]'
                  >
                    {meter.meterNumber}
                  </h6>
                </div>
              </div>

              <div className='xl:pt-[1.389vw] pt-[15px] xl:pb-[1.042vw] pb-[15px]'>
                <h2
                  className='text-[#fff] text-[20px] 
                     xl:text-[1.389vw] font-semibold leading-8'
                >
                  {meter.meterAlias}
                </h2>
                <p
                  className='text-[#DEE1E6] text-[14px] 
                     xl:text-[0.972vw] font-light leading-none'
                >
                  address
                </p>
                <p
                  className='text-[#DEE1E6] text-[14px] 
                     xl:text-[0.972vw] my-1 font-normal leading-4'
                >
                  Tax # {meter.taxNumber}
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-12 sm:col-span-4 xl:col-span-6'>
            <div className='flex flex-wrap justify-between items-center mb-4 h-full'>
              <div className='flex gap-[15px] xl:gap-[1.736vw]'>
                <div className='flex '>
                  <Image
                    src={`/assets/images/${meter.meterType}${'_target'}.svg`}
                    width={20}
                    height={20}
                    alt=''
                  />
                  <p
                    className={`${
                      meter.meterType === 'water'
                        ? 'text-[#71B2FF]'
                        : meter.meterType === 'electricity'
                        ? 'text-[#F5C747]'
                        : 'text-[#1DD75B]'
                    } text-[14px] 
                     xl:text-[0.972vw] font-semibold ml-3`}
                  >
                    Target: {meter.target}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=' meter absolute top-4 right-5'>
            <i
              className='pi pi-ellipsis-v text-[#fff] text-[14px] xl:text-[0.94vw] align-top cursor-pointer'
              title='Select setting'
              onClick={(e) => {
                op.current.toggle(e);
                recordIdFunction(meter);
                handleEditClick(meter);
              }}
            ></i>
            <OverlayPanel ref={op} className='op' key={meter.id}>
              <div className=' text-[#565D6D] text-[14px] xl:text-[0.972vw] font-normal'>
                <button
                  onClick={() => {
                    setVisible(true);

                    // console.log(editValue);
                  }}
                  className=' flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] '
                >
                  <i className='pi pi-pencil'></i>
                  Edit Meter
                </button>
                <Link
                  href=''
                  className=' flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] '
                  onClick={() => setOpen(true)}
                >
                  {' '}
                  <i className='pi pi-file'></i>View Documents
                </Link>
                <button
                  id={meter.id}
                  onClick={() => {
                    setShow(true);
                  }}
                  className=' flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] '
                >
                  <i className='pi pi-trash'></i> Delete Meter
                </button>
              </div>
            </OverlayPanel>
          </div>
          {/* view docs popup  */}
          <div className='card flex justify-content-center'>
            <Dialog
              header='View Document'
              visible={Open}
              style={{ width: '50vw' }}
              onHide={() => setOpen(false)}
            >
              <Image
                src='/assets/images/login_img.png'
                alt='Image'
                width='550'
                height='550'
              />
            </Dialog>
          </div>
        </div>
      </div>
    );
  };

  const op = useRef(null);
  return (
    <>
      <Layout pageTitle='Meter'>
        <div className='xl:p-[1.667vw] p-[20px] bg-[#fff] shadow1'>
          <div className='flex flex-wrap md:justify-between items-center gap-5'>
            <div className='flex gap-3 items-center'>
              <Link
                href='/property'
                className='px-[16px] xl:px-[1.111vw] py-[10px] xl:py-[0.694vw] red text-[16px] xl:text-[1.111vw] font-light uppercase rounded-full'
              >
                <i className='pi pi-arrow-left text-[14px] mr-2'></i>BACK TO
                PROPERTIES
              </Link>
            </div>

            <h2 className='text-[#565D6D] text-[18px] xl:text-[1.389vw] font-semibold '>
              {/* Meters: {p} */}
              Meters: {propertyname}
            </h2>

            <div className='flex gap-3 items-center'>
              <Link
                href=''
                onClick={() => {
                  setVisible(true);
                  setId(0);
                }}
                className='px-[16px] xl:px-[1.111vw] py-[10px] xl:py-[0.694vw] red text-[16px] xl:text-[1.111vw] font-light uppercase rounded-full'
              >
                <i className='pi pi-plus text-[14px] mr-2'></i>ADD NEW METER
              </Link>
            </div>
          </div>
          <div className='xl:my-[2.083vw] my-[20px] '>
            <DataView
              value={Meter}
              loading={loading}
              itemTemplate={itemTemplate}
            />
          </div>
        </div>
        {/* popup */}
        <div className='edit_profile'>
          <ToastContainer />
          <Dialog
            visible={visible}
            // breakpoints={{ "960px": "80vw", "640px": "90vw" }}
            onHide={() => setVisible(false)}
            draggable={false}
            resizable={false}
            className='xl:w-[50vw] w-[752px] edit_profile'
          >
            <div className='mt-[35px] xl:mt-[1.563vw] mb-[26px] xl:mb-[1.354vw]'>
              <div className=' flex justify-center text-[#171A1F] text-[30px] xl:text-[1.563vw] font-bold leading-10'>
                {Id ? 'Edit Meter ' : 'Add New Meter'}
              </div>
            </div>
            <div className='mb-[36px] xl:mb-[1.875vw]'>
              <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
                <TabList>
                  <div className='flex items-center  justify-center gap-6 mt-[35px] xl:mt-[1.563vw] mb-[26px] xl:mb-[1.354vw]'>
                    {icons.map((icon, index) => {
                      return (
                        <>
                          <Tab className='w-12'>
                            <div
                              key={icon.id}
                              className='flex flex-col justify-center cursor-pointer'
                            >
                              <Image
                                src={`/assets/images/${
                                  activeTab === index
                                    ? `${icon.name.toLowerCase()}_active_icon`
                                    : `${icon.name.toLowerCase()}_inactive_icon`
                                }.svg`}
                                width={30}
                                height={30}
                                className='xl:w-[2.083vw] xl:h-[2.083vw] w-[30px] h-[30px] mx-auto'
                                alt=''
                              />
                              <div
                                className={`${
                                  activeTab === index
                                    ? 'text-[#EC3237]'
                                    : 'text-[#565D6D]'
                                }
                           text-[12px] xl:text-[0.972vw] text-center font-normal`}
                              >
                                {icon.name}
                              </div>
                            </div>
                          </Tab>
                          {/* tabs */}
                        </>
                      );
                    })}
                  </div>
                </TabList>
                {icons.map((meterType) => {
                  return (
                    <>
                      <TabPanel key={meterType.id}>
                        <div className='xl:mt-[1.042vw] mt-[20px] xl:px-[2.167vw] px-[20px]'>
                          <div className='xl:space-y-[0.573vw] space-y-[10px]'>
                            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-[2.917vw]'>
                              <div className='custom_dropdown'>
                                <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8 block'>
                                  Select Property{' '}
                                  <span className='text-[#EC3237]'>*</span>
                                </label>
                                {Id ? (
                                  <Dropdown
                                    disabled
                                    value={selectedProperty}
                                    onChange={(e) => {
                                      setSelectedProperty(e.target.value);
                                      setSelectPropertyId(e.target.value.id);
                                    }}
                                    key={selectProperty.id}
                                    options={selectProperty}
                                    optionLabel='name'
                                    placeholder={defaultProperty.name}
                                    className='w-full '
                                  />
                                ) : (
                                  <Dropdown
                                    value={selectedProperty}
                                    onChange={(e) => {
                                      setSelectedProperty(e.target.value);
                                      setSelectPropertyId(e.target.value.id);
                                    }}
                                    key={selectProperty.id}
                                    options={selectProperty}
                                    optionLabel='name'
                                    placeholder={defaultProperty.name}
                                    className='w-full '
                                  />
                                )}
                              </div>
                              <div className='custom_input'>
                                <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                                  {meterType.name} Number{' '}
                                  <span className='text-[#EC3237]'>*</span>
                                </label>
                                {Id ? (
                                  <InputText
                                    disabled
                                    keyfilter='pint'
                                    value={MeterNumber}
                                    onChange={(e) =>
                                      setMeterNumber(e.target.value)
                                    }
                                    placeholder='Enter Meter Number'
                                    className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                                  />
                                ) : (
                                  <InputText
                                    value={MeterNumber}
                                    keyfilter='pint'
                                    onChange={(e) =>
                                      setMeterNumber(e.target.value)
                                    }
                                    placeholder='Enter Meter Number'
                                    className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                                  />
                                )}
                                {validation.MeterNumber && (
                                  <h1 className='text-[#EC3237]'>{error}</h1>
                                )}
                              </div>
                            </div>
                            <div className='custom_input grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-[2.917vw]'>
                              <div className=''>
                                <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                                  {meterType.name} Alias{' '}
                                  <span className='text-[#EC3237]'>*</span>
                                </label>
                                <InputText
                                  value={Alias}
                                  onChange={(e) => SetAlias(e.target.value)}
                                  placeholder='Enter Meter Alias'
                                  className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                                />
                                {validation.Alias && (
                                  <h1 className='text-[#EC3237]'>
                                    {'Meter Alias Required'}
                                  </h1>
                                )}
                              </div>
                              <div className=''>
                                <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                                  Daily Target Consumption (Cube ft){' '}
                                  <span className='text-[#EC3237]'>*</span>
                                </label>
                                <InputText
                                  keyfilter='pint'
                                  minLength={5}
                                  value={DailyTarget}
                                  onChange={(e) =>
                                    SetDailyTarget(e.target.value)
                                  }
                                  placeholder='Enter Target'
                                  className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                                />

                                {validation.DailyTarget && (
                                  // <h1 className='text-[#EC3237]'>{error}</h1>
                                  <h1 className='text-[#EC3237]'>
                                    {'DailyTarget is required'}
                                  </h1>
                                )}
                              </div>
                            </div>
                            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-[2.917vw]'>
                              <div className='custom_input'>
                                <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                                  Tax Number{' '}
                                  <span className='text-[#EC3237]'>*</span>
                                </label>
                                <InputText
                                  keyfilter='pint'
                                  value={taxNumber}
                                  onChange={(e) => settaxNumber(e.target.value)}
                                  placeholder='Enter Tax Number '
                                  className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                                />
                                {validation.taxNumber && (
                                  // <h1 className='text-[#EC3237]'>{error}</h1>
                                  <h1 className='text-[#EC3237]'>
                                    {'TaxNumber is required'}
                                  </h1>
                                )}
                              </div>
                              <div className='custom_input'>
                                <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                                  Contract Proof{' '}
                                  <span className='text-[#EC3237]'>*</span>
                                </label>
                                <div className='flex custfileupload custfileupload2'>
                                  <InputText
                                    disabled
                                    placeholder='Select Document File'
                                    className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                                  />
                                  <Toast ref={toast}></Toast>
                                  {Id ? (
                                    <FileUpload
                                      disabled
                                      mode='basic'
                                      name='demo[]'
                                      url='/api/upload'
                                      accept='image/*'
                                      value={selectProof}
                                      onSelect={(e) => {
                                        setSelectProof(e.files[0]);
                                        console.log(e.files[0]);
                                      }}
                                    />
                                  ) : (
                                    <FileUpload
                                      mode='basic'
                                      name='demo[]'
                                      url='/api/upload'
                                      accept='image/*'
                                      value={selectProof}
                                      onSelect={(e) => {
                                        setSelectProof(e.files[0]);
                                        console.log(e.files[0]);
                                      }}
                                    />
                                  )}
                                </div>
                                {Id ? (
                                  validation.selectProof && (
                                    <h1 className='text-[#EC3237]'>
                                      Contract proof document is required
                                    </h1>
                                  )
                                ) : (
                                  <p></p>
                                )}
                              </div>
                            </div>
                            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-[2.917vw]'>
                              <div className='custom_input custom_calendar'>
                                <label className='block text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                                  Contract End Date{' '}
                                  <span className='text-[#EC3237]'>*</span>
                                </label>
                                <Calendar
                                  // required
                                  value={date}
                                  onChange={(e) => setDate(e.target.value)}
                                  showIcon
                                  dateFormat='dd/mm/yy'
                                  placeholder='DD/MM/YYYY'
                                  className='w-full'
                                  minDate={new Date()} // Disable dates before today's date
                                />
                                {validation.date && (
                                  <h1 className='text-[#EC3237]'>
                                    {'Contract End Date is required'}
                                  </h1>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='xl:mt-[1.979vw] mt-[38px] xl:px-[2.167vw] px-[20px] mb-[42px] xl:mb-[2.188vw]'>
                          <div className='flex gap-1'>
                            <Checkbox
                              required
                              htmlFor='ingredient1'
                              onChange={(e) => setChecked(e.checked)}
                              checked={checked}
                              className='mt-1'
                            ></Checkbox>
                            <label htmlFor='ingredient1' className='ml-2'>
                              Agree… xxxxx xxxxxx xxxxxx xxx xx x xx x x x x x x
                              x x x x x xxx x x xx x x x x x x x x x x x x{' '}
                            </label>
                          </div>
                          {!checked ? (
                            <h1 className='text-[#EC3237] ml-8 my-2'>
                              Please Accept Terms & Conditions
                            </h1>
                          ) : (
                            <p></p>
                          )}
                        </div>
                        <div className='flex flex-wrap items-center justify-between xl:px-[2.167vw] px-[20px] gap-2'>
                          <div className='flex flex-wrap gap-4 items-center  '>
                            <Link
                              href=''
                              onClick={() => {
                                setVisible(false);
                              }}
                              className=' px-4 text-center flex justify-center text-[#9095A1] '
                            >
                              CANCEL
                            </Link>
                            <button
                              onClick={() => {
                                handleSubmit();
                                {
                                  validation === null
                                    ? setVisible(false)
                                    : setVisible(true);
                                }
                              }}
                              className=' custmBtn red radiusFull  text-center flex justify-center'
                            >
                              <i className='pi pi-check'></i>{' '}
                              {Id ? 'Edit Meter' : buttonText}
                            </button>
                          </div>
                        </div>
                      </TabPanel>
                    </>
                  );
                })}
              </Tabs>
            </div>
          </Dialog>
          <Toast ref={toast} />
          <ConfirmDialog />
        </div>
        <Toast ref={toast} />
        <ConfirmDialog
          group='declarative'
          visible={Show}
          onHide={() => setShow(false)}
          message='Do You Want to Delete This Record?'
          header='Delete Confirmation'
          icon='pi pi-exclamation-triangle'
          accept={accept}
          reject={reject}
          className='confirmDialog'
          style={{ width: '25vw' }}
          breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
        />
      </Layout>
    </>
  );
}
