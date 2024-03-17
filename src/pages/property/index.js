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
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import withAuth from '../withAuth';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';
import * as Yup from 'yup';

function Property() {
  // const [icons, setIcons] = useState([]);
  // const [disable, setDisable] = useState(false);
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [propertyList, setPropertyList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Id, setId] = useState(0);
  // const [propertyId, SetPropertyId] = useState(0);
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    unitnumber: '',
    address: '',
  });
  const router = useRouter();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchListData = async () => {
    try {
      const accessToken = localStorage.getItem('token');
      const loggeduserId = localStorage.getItem('loggeduserId');
      setLoading(true);
      const requestedData = {
        accessToken: JSON.parse(accessToken),
        userId: parseInt(loggeduserId),
        companyId: 1,
      };
      const response = await axios.post('/api/property/getpropertylist', {
        requestedData,
      });
      if (response) {
        setPropertyList(response.data);
        setLoading(false);
        console.log(response.data);
      }
    } catch (error) {
      toast.error('something went wrong');
    }
  };

  const accept = async () => {
    try {
      const accessToken = localStorage.getItem('token');
      const requestedData = {
        accessToken: JSON.parse(accessToken),
        Id: Id,
        companyId: 1,
      };
      const resp = await axios.post('/api/property/deleteproperty', {
        requestedData,
      });
      if (resp) {
        toast.success('delete successfully...');
        fetchListData();
      }
    } catch (error) {
      toast.error('Something went wrong...');
    }
  };
  const reject = () => {
    setVisibleConfirm(false);
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

  const editShow = async (product) => {
    try {
      const accessToken = localStorage.getItem('token');
      const loggeduserId = localStorage.getItem('loggeduserId');
      setLoading(true);
      const requestedData = {
        accessToken: JSON.parse(accessToken),
        Id: Id,
        companyId: 1,
      };
      const response = await axios.post('/api/property/getbyid', {
        requestedData,
      });

      if (response) {
        setVisible(true);
        //   setId(product.id)

        setFormData({
          name: response.data.name,
          unitnumber: response.data.unitNumber,
          address: response.data.addressLine1,
        });
        setLoading(false);
      }
    } catch (error) {
      toast.error('something went wrong');
      setLoading(false);
    }
  };
  const recordIdFunction = (product) => {
    setId(product.id);
  };
  const handleEditClick = (clickedProduct) => {
    // Pass the clickedProduct to the editShow function
    editShow(clickedProduct);
  };

  const MeterTypesIcon = ({ icon }) => {
    if (icon.length === 1) {
      return (
        <>
          <Image
            src={`/assets/images/${icon}_icon.svg`}
            width={12}
            height={12}
            className='xl:w-[0.833vw] xl:h-[0.833vw] w-[12px] h-[12px]'
            alt={` icon`}
          />
        </>
      );
    }
    if (icon.length > 1) {
      return (
        <>
          {icon.map((iconName, index) => (
            <Image
              key={index}
              src={`/assets/images/${iconName.toLowerCase()}_icon.svg`}
              width={12}
              height={12}
              className='xl:w-[0.833vw] xl:h-[0.833vw] w-[12px] h-[12px]'
              alt={`${iconName} icon`}
            />
          ))}
        </>
      );
    }
    return null;
  };

  const itemTemplate = (product) => {
    const toastCenter = useRef(null);
    return (
      <div
        id={product.id}
        className=' bg-[#323743]  border-bottom-red xl:px-[30px] px-[10px] rounded-xl relative property-block xl:mb-[1.736vw] mb-3'
      >
        <Toast ref={toastCenter} position='center' />
        <div className='grid grid-cols-10 lg:grid-cols-12 xl:grid-cols-12  '>
          <div className='col-span-10 md:col-span-8 xl:col-span-6'>
            <div className='flex gap-[20px] xl:gap-[2.083vw]'>
              <div className='xl:w-[6.944vw] w-[100px]'>
                <Image
                  src={'/assets/images/property_img.svg'}
                  width={80}
                  height={60}
                  className='xl:w-[5.556vw] xl:h-[4.167vw] w-[80px] h-[60px] mx-auto'
                  alt=''
                />
                <div className='text-center'>
                  <label
                    className='xl:mt-[1.389vw] mt-[15px] text-[#fff] text-[10px] 
                     xl:text-[0.833vw] font-semibold leading-none text-center'
                  >
                    UNIT NO
                  </label>
                  <h6
                    className='text-[#fff] text-[10px] 
                     xl:text-[1.389vw] font-semibold leading-none text-center'
                    title={product.unitNumber}
                  >
                    {product.unitNumber.length >= 5
                      ? `${product.unitNumber.slice(0, 4)}${'...'}`
                      : product.unitNumber}
                  </h6>
                </div>
              </div>

              <div className='xl:pt-[1.389vw]  pt-[15px] xl:pb-[1.042vw] pb-[15px]'>
                <div className='flex gap-1'>
                  <MeterTypesIcon icon={[...new Set(product.meterTypeList)]} />
                </div>
                <h2
                  title={product.name}
                  className='text-[#fff] text-[20px] 
                     xl:text-[1.389vw] font-semibold leading-8'
                >
                  {/* {product.name} */}
                  {product.name.length > 10
                    ? `${product.name.slice(0, 10)}${'...'}`
                    : product.name}
                </h2>
                <p
                  className='text-[#DEE1E6] text-[14px] 
                     xl:text-[0.972vw] font-light leading-none'
                >
                  {product.address}
                </p>
                <p
                  className='text-[#DEE1E6] text-[14px]  my-1
                     xl:text-[0.972vw] font-semibold leading-4'
                >
                  Added on: {product.AddedOn}
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-10 md:col-span-8 xl:col-span-6  '>
            <div className='flex flex-wrap justify-between items-center h-full'>
              <div className='flex gap-[15px] xl:gap-[1.736vw]'>
                <div className='flex '>
                  <Image
                    src={'/assets/images/meter_icon.svg'}
                    width={20}
                    height={20}
                    alt=''
                  />
                  <p
                    className='text-[#DEE1E6] text-[14px] 
                     xl:text-[0.972vw] font-semibold ml-3'
                  >
                    {product.meterCount} Meters
                  </p>
                </div>
                <div className='flex '>
                  <Image
                    src={'/assets/images/two_user_icon.svg'}
                    width={20}
                    height={20}
                    alt=''
                  />
                  <p
                    className='text-[#DEE1E6] text-[14px] 
                     xl:text-[0.972vw] font-semibold ml-3'
                  >
                    {product.tenentCount} Users
                  </p>
                </div>
                <OverlayPanel ref={op} className='op'>
                  <div className=' text-[#565D6D] text-[14px] xl:text-[0.972vw] font-light'>
                    <button
                      onClick={() => {
                        handleEditClick(product);
                      }}
                      className=' flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] '
                    >
                      {/* <Image src={"/assets/images/edit_icon.svg"} width={24} height={24}
                            alt="img" /> */}
                      <i className='pi pi-pencil'></i>
                      Edit Property
                    </button>

                    <Link
                      href=''
                      onClick={() => setVisibleConfirm(true)}
                      className=' flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] '
                    >
                      <i className='pi pi-trash'></i> Delete Property
                    </Link>
                  </div>
                </OverlayPanel>
              </div>

              <div className='flex gap-[15px] xl:gap-[1.389vw] xl:pr-3 pr-0 xl:my-[0px] my-2'>
                <button
                  onClick={() => {
                    router.push({
                      pathname: '/meter',
                      query: {
                        // propertyTitle: product.name,
                        id: product.id,
                        // address: product.address,
                      },
                    });
                    const meterName = localStorage.setItem(
                      'propertyname',
                      product.name
                    );
                    const propertyId = localStorage.setItem('id', product.id);
                  }}
                  className='px-[10px] xl:px-[0.694vw] py-[5px] xl:py-[0.347vw] red text-[12px] xl:text-[0.833vw] font-light uppercase rounded-full flex gap-2 '
                >
                  <Image
                    src={'/assets/images/meter_white_icon.svg'}
                    width={16}
                    height={16}
                    alt=''
                  />
                  METERES
                </button>
                <button
                  onClick={() => {
                    if (product.meterTypeList.length >= 1) {
                      const meterName = localStorage.setItem(
                        'propertyname',
                        product.name
                      );
                      const propertyId = localStorage.setItem('id', product.id);
                      router.push({
                        pathname: '/tenant',
                        query: {
                          PropertyTitle: product.name,
                          id: product.id,
                        },
                      });
                    } else {
                      toastCenter.current.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Please Add Meter',
                        life: 3000,
                      });
                    }
                  }}
                  className='px-[10px] xl:px-[0.694vw] py-[5px] xl:py-[0.347vw] red text-[12px] xl:text-[0.833vw] font-light uppercase rounded-full flex gap-2'
                >
                  <Image
                    src={'/assets/images/two_white_user.svg'}
                    width={16}
                    height={16}
                    alt=''
                  />
                  TENANTS
                </button>
              </div>
            </div>
          </div>
          <div className='absolute top-4 right-5'>
            <i
              className='pi pi-ellipsis-v text-[#fff] text-[14px] xl:text-[0.94vw] align-top cursor-pointer'
              title='Select setting'
              onClick={(e) => {
                recordIdFunction(product);
                op.current.toggle(e);
              }}
            ></i>
          </div>
        </div>
      </div>
    );
  };
  const op = useRef(null);
  const [validation, setvalidation] = useState({});
  // add meter

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .typeError('Name is required')
      .required('Name is required'),
    unitnumber: Yup.string()
      .typeError('Unit Number  is required')
      .required('Unit Number  is required'),
    address: Yup.string()
      .max(250, 'Address must be at most 250 characters')
      .required('Address is required'),
  });
  const handleSubmit = async () => {
    if (checked) {
      if (!formData.name) {
        validation.name = 'name is Required';
      }
      if (!formData.unitnumber) {
        validation.unitnumber = 'unitnumber is Required';
      }
      if (!formData.address) {
        validation.address = 'address is Required';
      }
      setvalidation(validation);
      try {
        await validationSchema.validate(formData, { abortEarly: false });
        setvalidation({ name: null, unitnumber: null, address: null });

        const accessToken = localStorage.getItem('token');
        const loggeduserId = localStorage.getItem('loggeduserId');

        const requestedData = {
          accessToken: JSON.parse(accessToken),
          id: Id,
          name: formData.name,
          unitNumber: formData.unitnumber,
          ownerId: parseInt(loggeduserId),
          companyId: 1,
          statusId: 0,
          addressLine1: formData.address,
          addressLine2: '',
          city: '',
          state: '',
          country: '',
          createdAt: new Date(),
          modifiedAt: new Date(),
        };

        const response = await axios.post('/api/property/createpropery', {
          requestedData,
        });
        if (response) {
          // setPropertyList(response.data)
          setLoading(false);
          toast.success('Added Successfully');
          fetchListData();
          setVisible(false);
          // console.log(response.data);
        }
      } catch (error) {
        // toast.error('something went wrong ');
        const fieldErrors = {};
        error.inner.forEach((err) => {
          fieldErrors[err.path] = err.message;
        });
        setvalidation(fieldErrors);
      }
    } else {
      toast.error('please Accept Terms & Conditions');
    }
  };

  useEffect(() => {
    fetchListData();
  }, []);

  return (
    <>
      <Layout pageTitle='My Properties'>
        <ToastContainer />
        <div className='xl:p-[1.667vw] p-[20px] bg-[#fff] shadow1'>
          <div className='flex flex-wrap justify-between items-center'>
            <h2 className='text-[#565D6D] text-[18px] xl:text-[1.389vw] font-semibold '>
              My Properties
            </h2>

            <div className='flex gap-3 items-center'>
              <Link
                href=''
                onClick={() => {
                  setVisible(true), setId(0), setFormData({});
                }}
                className='px-[16px] xl:px-[1.111vw] py-[10px] xl:py-[0.694vw] red text-[16px] xl:text-[1.111vw] font-light uppercase rounded-full'
              >
                <i className='pi pi-plus text-[14px] mr-2'></i>ADD NEW PROPERTY
              </Link>
            </div>
          </div>
          <div className='xl:my-[2.083vw] my-[20px] '>
            <DataView
              value={propertyList}
              loading={loading}
              itemTemplate={itemTemplate}
              paginator
              rows={5}
              filter
              filterPlaceholder='Search by name'
            />
          </div>
        </div>
        {/* add property pop */}
        <div className='otp-popup'>
          <Dialog
            visible={visible}
            breakpoints={{ '960px': '80vw', '640px': '90vw' }}
            style={{ width: '46vw' }}
            onHide={() => setVisible(false)}
            draggable={false}
            resizable={false}
            className='xl:w-[40vw] w-[200px] otp-popup'
          >
            <div className='flex justify-center text-[#171A1F] text-[20px] xl:text-[2.083vw] font-bold leading-10'>
              {Id ? 'Edit Property ' : 'Add New Property'}
            </div>

            <div className='xl:mt-[2.216vw] mt-[20px] xl:px-[3.167vw] px-[20px]'>
              <div className='custom_input xl:space-y-[1.042vw] space-y-[10px]'>
                <div className=''>
                  <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                    Property Name <span className='text-[#EC3237]'>*</span>
                  </label>
                  <InputText
                    keyfilter={/^[a-zA-Z0-9&]+$/}
                    onChange={handleInputChange}
                    name='name'
                    value={formData.name}
                    placeholder='Enter property name'
                    className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                  />
                  {validation.name && (
                    <h1 className='text-[#EC3237]'>{validation.name}</h1>
                  )}
                </div>
                <div className=''>
                  <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                    Unit Number <span className='text-[#EC3237]'>*</span>
                  </label>
                  {Id ? (
                    <InputText
                      disabled
                      keyfilter={/^[a-zA-Z0-9&]+$/}
                      onChange={handleInputChange}
                      name='unitnumber'
                      value={formData.unitnumber}
                      placeholder='Enter unit number or scan code '
                      className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                    />
                  ) : (
                    <InputText
                      keyfilter={
                        /^[a-zA-Z0-9&!@#$%^*()_+\-=\[\]{};':"\\|,.<>\/?]+$/
                      }
                      onChange={handleInputChange}
                      name='unitnumber'
                      value={formData.unitnumber}
                      placeholder='Enter unit number or scan code '
                      className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                    />
                  )}
                  {validation.unitnumber && (
                    <h1 className='text-[#EC3237]'>{validation.unitnumber}</h1>
                  )}
                </div>
                <div className=''>
                  <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                    Address <span className='text-[#EC3237]'>*</span>
                  </label>
                  <div className='flex gap-2 xl:gap-[1.389vw] items-center'>
                    <InputText
                      onChange={handleInputChange}
                      name='address'
                      value={formData.address}
                      placeholder='Enter location'
                      className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                    />
                    <Link href=''>
                      {' '}
                      <Image
                        src={'/assets/images/location_icon.svg'}
                        width={36}
                        height={36}
                        className='xl:w-[2.778vw] xl:h-[2.778vw] w-[36px] h-[36px] mx-auto'
                        alt=''
                      />
                    </Link>
                  </div>
                  {validation.address && (
                    <h1 className='text-[#EC3237]'>{validation.address}</h1>
                  )}
                </div>
              </div>
            </div>
            <div className='xl:mt-[2.431vw] mt-[30px] xl:px-[4.167vw] px-[20px]'>
              <div className='flex gap-1'>
                <Checkbox
                  htmlFor='ingredient1'
                  onChange={(e) => setChecked(e.checked)}
                  checked={checked}
                ></Checkbox>
                <label htmlFor='ingredient1' className='ml-2'>
                  Agree… xxxxx xxxxxx xxxxxx xxx xx x xx x x x x x x x x x x x
                  xxx x x xx x x x x x x x x x x x x{' '}
                </label>
              </div>
            </div>

            <div className='flex flex-wrap justify-between xl:mt-[3.463vw] mt-[20px] mx-[45px] xl:mx-[3.116vw] '>
              {/* <Link
                href=''
                onClick={() => setVisibleConfirm(true)}
                className='xl:order-1 order-2 custmBtn outline_btn font-medium  radiusFull  text-center flex justify-center xl:h-[42px]'
              >
                <i className='pi pi-trash mr-2'></i> DELETE PROPERTY
              </Link> */}
              <div className='flex flex-wrap gap-4 items-center xl:order-2 order-1 mb-2'>
                <Link
                  href=''
                  onClick={() => setVisible(false)}
                  className='xl:order-1 order-2  px-4 text-center flex justify-center text-[#9095A1] mb-4'
                >
                  CANCEL
                </Link>
                <button
                  onClick={handleSubmit}
                  className='xl:order-2 order-1 custmBtn red radiusFull  text-center flex justify-center mb-2'
                >
                  <i className='pi pi-check'></i>{' '}
                  {Id ? 'Edit Property' : 'ADD PROPERTY'}
                </button>
              </div>
            </div>
          </Dialog>
          <div className='confirmDialog'>
            <ConfirmDialog
              group='declarative'
              visible={visibleConfirm}
              onHide={() => setVisibleConfirm(false)}
              message='Do You Want to Delete This Record?'
              header='Delete Confirmation'
              icon='pi pi-exclamation-triangle'
              accept={accept}
              reject={reject}
              className='confirmDialog'
              style={{ width: '25vw' }}
              breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default withAuth(Property);
