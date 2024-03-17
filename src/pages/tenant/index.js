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
import axios from 'axios';
import { useRouter } from 'next/router';
import { InputSwitch } from 'primereact/inputswitch';
export default function index() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  // associates
  const [users, setUsers] = useState([]);
  // tenants
  const [tenant, setTenant] = useState(null);
  // owner
  const [owner, setOwner] = useState([]);
  const toast = useRef(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // add user popup states
  const [propertyUserTypeId, setPropertyUserTypeId] = useState(2);
  const [title, setTitle] = useState('');
  const [propertylist, setPropertyLists] = useState('');
  const [userTypeLists, setUserTypeLists] = useState('');
  const [selectPropertyId, setSelectPropertyId] = useState(null);
  const [titleId, setTitleId] = useState(null);
  const [defaultProperty, setDefaultProperty] = useState({
    property: '',
    id: null,
  });
  const [userName, setUserName] = useState(null);
  const [validation, setvalidation] = useState({});
  const [formData, setFormData] = useState({
    title: '',
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    property: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const accept = () => {
    toast.current.show({
      severity: 'info',
      summary: 'Confirmed',
      detail: 'You have accepted',
      life: 3000,
    });
  };
  const reject = () => {
    toast.current.show({
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
  // fetch owner, tenant, user
  const getPropertyUser = async () => {
    try {
      const accessToken = localStorage.getItem('token');
      const propertyId = localStorage.getItem('id');
      const requestedData = {
        accessToken: JSON.parse(accessToken),
        propertyId: propertyId,
      };
      const response = await axios.post('/api/tenant/getpropertyuser', {
        requestedData,
      });
      if (response.status === 200) {
        setUsers(response.data.associates);
        setOwner([response.data.owner]);
        setTenant([response.data.tenant]);
        console.log(response.data);
      }
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'error',
        detail: 'something went wrong',
        life: 3000,
      });
      console.log(error.message);
    }
  };
  // fetch propertylist, titlelist, & usertypelist
  const fetchLists = async () => {
    try {
      const accessToken = localStorage.getItem('token');
      const ownerId = localStorage.getItem('loggeduserId');
      const requestedData = {
        accessToken: JSON.parse(accessToken),
        ownerId: ownerId,
      };
      const response = await axios.post('/api/tenant/fetchlists', {
        requestedData,
      });
      if (response.status === 200) {
        const titleList = response.data.titleList;
        const propertiesList = response.data.propertiesList;
        const userTypeList = response.data.userTypeList;
        setTitle(titleList);
        setPropertyLists(propertiesList);
        setUserTypeLists(userTypeList);
      }
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'error',
        detail: 'something went wrong',
        life: 3000,
      });
      console.log(error);
    }
  };
  // add users & tenant
  const addTenantUser = async () => {
    if (checked) {
      if (!formData.firstname.trim()) {
        validation.firstName = 'firstName is Required';
      }
      if (!formData.lastname.trim()) {
        validation.lastName = 'lastName is Required';
      }
      if (!formData.mobile.trim()) {
        validation.mobile = 'mobile number is Required';
      }
      if (!formData.email.trim()) {
        validation.email = 'email is Required';
      }
      try {
        const accessToken = localStorage.getItem('token');
        const loggeduserId = localStorage.getItem('loggeduserId');
        setLoading(true);
        const requestedData = {
          accessToken: JSON.parse(accessToken),
          id: 0,
          titleId: titleId,
          title: formData.title.name,
          userId: parseInt(loggeduserId),
          firstName: formData.firstname,
          lastName: formData.lastname,
          mobile: formData.mobile,
          email: formData.email,
          propertyId: selectPropertyId,
          property: formData.property.name,
          propertyUserTypeId: propertyUserTypeId,
          propertyUserType: 'string',
          statusId: 0,
          status: 'string',
          companyId: 1,
        };
        const response = await axios.post('/api/tenant/addtenantuser', {
          requestedData,
        });
        if (response.status === 200) {
          setLoading(true);
          toast.current.show({
            severity: 'success',
            summary: 'success',
            detail: `Added Successfully`,
            life: 3000,
          });
          getPropertyUser();
          // setTenant(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.log(titleId);
        toast.current.show({
          severity: 'error',
          summary: 'error',
          detail: 'Something Went Wrong',
          life: 3000,
        });
        setLoading(false);
        // console.log(error);
      }
    } else {
      toast.current.show({
        severity: 'error',
        summary: 'error',
        detail: 'Please Accept Terms & Condition',
        life: 3000,
      });
    }
  };
  const AddTenantButton = () => {
    return (
      <>
        {(tenant === null || tenant.length === 0) && ( // Render button if tenant is null or tenant is an empty array
          <Link
            href=''
            onClick={() => {
              setVisible(true);
              setPropertyUserTypeId(1);
            }}
            className='px-[16px] xl:px-[1.111vw] py-[10px] xl:py-[0.694vw] red text-[16px] xl:text-[1.111vw] font-light uppercase rounded-full'
          >
            <i className='pi pi-plus text-[14px] mr-2'></i>ADD NEW TENANT
          </Link>
        )}
      </>
    );
  };
  useEffect(() => {
    getPropertyUser();
    fetchLists();
    const propertyid = localStorage.getItem('id');
    if (propertyid) {
      setSelectPropertyId(propertyid);
    }
    setDefaultProperty({
      property: localStorage.getItem('propertyname'),
      id: localStorage.getItem('id'),
    });
  }, []);
  const userTemplate = (Tenant) => {
    return (
      <div className='bg-[#323743] border-bottom-red xl:px-[30px] px-[10px] rounded-xl relative property-block xl:mb-[1.736vw] mb-3 p-2'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 sm:col-span-6 xl:col-span-6'>
            <div className='flex items-center gap-[20px] xl:gap-[2.083vw]'>
              <div className='xl:w-[4.944vw] w-[100px]'>
                <Image
                  src={`/assets/images/user2.svg`}
                  width={80}
                  height={60}
                  className='xl:w-[5.556vw] xl:h-[4.167vw] w-[80px] h-[60px] mx-auto'
                  alt=''
                />
              </div>

              <div className='xl:pt-[1.389vw] pt-[15px] xl:pb-[1.042vw] pb-[15px]'>
                <h2
                  className='text-[#fff] text-[20px] 
                     xl:text-[1.389vw] font-semibold leading-8'
                >
                  {Tenant.userName}
                </h2>
                <div className='flex items-center gap-5'>
                  <p
                    className='text-[#DEE1E6] text-[14px] 
                     xl:text-[0.972vw] font-light leading-none'
                  >
                    {Tenant.email}
                  </p>
                  <p className='text-[#DEE1E6]'>|</p>
                  <p
                    className='text-[#DEE1E6] text-[14px] 
                     xl:text-[0.972vw] font-normal leading-4'
                  >
                    {Tenant.mobile}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-12 sm:col-span-4 xl:col-span-6'>
            <div className='flex flex-wrap justify-between items-center h-full'>
              <div className='flex gap-[15px] xl:gap-[1.736vw]'>
                <div className='flex '>
                  <p
                    className={`text-[#DEE1E6] text-[14px] xl:text-[0.972vw] font-semibold ml-3`}
                  >
                    Added on: {Tenant.createdOn}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute top-4 right-5'>
            <i
              className='pi pi-ellipsis-v text-[#fff] text-[14px] xl:text-[0.94vw] align-top cursor-pointer'
              title='Select setting'
              onClick={(e) => {
                op.current.toggle(e);
                setUserName(Tenant.userName);
              }}
            ></i>
            <OverlayPanel ref={op} className='op'>
              <div className=' text-[#565D6D] text-[14px] xl:text-[0.972vw] font-normal'>
                <Link href='' onClick={() => setOpen(true)}>
                  <li className='list-none flex gap-2 items-center xl:px-[1.111vw] xl:py-[0.556vw] py-[6px] '>
                    <i className='pi pi-cog  relative'></i>Manage User
                  </li>
                </Link>
                <Link
                  href=''
                  onClick={deleteconfirm}
                  className=' flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] '
                >
                  <i className='pi pi-trash'></i> Delete User
                </Link>
              </div>
            </OverlayPanel>
          </div>
          {/* manage setting  */}
          <Dialog
            header={userName}
            visible={open}
            style={{ width: '50vw' }}
            onHide={() => setOpen(false)}
          >
            <div className='card flex justify-content-center my-2'>
              <InputSwitch
                checked={checked}
                onChange={(e) => setChecked(e.value)}
              />
              <h1 className='mx-2'>Allow TopUp </h1>
            </div>
          </Dialog>
        </div>
      </div>
    );
  };
  const op = useRef(null);
  return (
    <>
      <Layout pageTitle='Tenant'>
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
              Tenants: {defaultProperty.property}
            </h2>

            <div className='flex gap-3 items-center'>
              <AddTenantButton />
            </div>
          </div>
          <div className='xl:my-[2.083vw] my-[20px] '>
            <DataView value={owner} itemTemplate={userTemplate} />
          </div>
        </div>
        {/* {tenant.length === 1 ? (
          <div className='mt-[31px] xl:mt-[1.615vw] xl:p-[1.667vw] p-[20px] bg-[#fff] shadow1'>
            <div className='flex flex-wrap md:justify-between items-center gap-5'>
              <h2 className='text-[#565D6D] text-[18px] xl:text-[1.389vw] font-semibold '>
                Users: Tenant
              </h2>
            </div>
            <div className='xl:my-[2.083vw] my-[20px] '>
              <DataView value={tenant} itemTemplate={userTemplate} />
            </div>
          </div>
        ) : (
          <p>No tenants Found</p>
        )} */}
        {tenant === null ? (
          <div className='mt-[31px] xl:mt-[1.615vw] xl:p-[1.667vw] p-[20px] bg-[#fff] shadow1'>
            <div className='flex flex-wrap md:justify-between items-center gap-5'>
              <h2 className='text-[#565D6D] text-[18px] xl:text-[1.389vw] font-semibold '>
                Users: Tenant
              </h2>
            </div>
            <div className='xl:my-[2.083vw] my-[20px] '>
              <DataView value={tenant} itemTemplate={userTemplate} />
            </div>
          </div>
        ) : (
          <div className='mt-[31px] xl:mt-[1.615vw] xl:p-[1.667vw] p-[20px] bg-[#fff] shadow1'>
            <h2 className='text-[#565D6D] text-[18px] xl:text-[1.389vw] font-semibold '>
              Users: Tenant
            </h2>
            <p>No Tenants Found</p>
          </div>
        )}
        {/* <div className='mt-[31px] xl:mt-[1.615vw] xl:p-[1.667vw] p-[20px] bg-[#fff] shadow1'>
          <div className='flex flex-wrap md:justify-between items-center gap-5'>
            <h2 className='text-[#565D6D] text-[18px] xl:text-[1.389vw] font-semibold '>
              Users: Tenant
            </h2>
          </div>
          <div className='xl:my-[2.083vw] my-[20px] '>
            <DataView value={tenant} itemTemplate={userTemplate} />
          </div>
        </div> */}

        <div className='mt-[31px] xl:mt-[1.615vw] xl:p-[1.667vw] p-[20px] bg-[#fff] shadow1'>
          <div className='flex flex-wrap md:justify-between items-center gap-5'>
            <h2 className='text-[#565D6D] text-[18px] xl:text-[1.389vw] font-semibold '>
              Users: Associates
            </h2>
            <div className='flex gap-3 items-center'>
              <Link
                href=''
                onClick={() => setVisible(true)}
                className='px-[16px] xl:px-[1.111vw] py-[10px] xl:py-[0.694vw] red text-[16px] xl:text-[1.111vw] font-light uppercase rounded-full'
              >
                <i className='pi pi-plus text-[14px] mr-2'></i>ADD NEW USER
              </Link>
            </div>
          </div>
          <div className='xl:my-[2.083vw] my-[20px] '>
            <DataView value={users} itemTemplate={userTemplate} />
          </div>
        </div>

        {/* popup add user & tenant popup  */}
        <div className='otp-popup profilepopup'>
          <Dialog
            visible={visible}
            onHide={() => setVisible(false)}
            draggable={false}
            resizable={false}
            className='xl:w-[40vw] w-[690px] otp-popup profilepopup'
          >
            <div className='mt-[35px] xl:mt-[1.823vw] flex justify-center text-[#171A1F] text-[20px] xl:text-[2.083vw] font-bold leading-10'>
              {propertyUserTypeId === 2 ? 'Add New User' : 'Add New Tenant'}
            </div>

            <div className='xl:mt-[1.042vw] mt-[20px] xl:px-[2.167vw] px-[20px]'>
              <div className='xl:space-y-[0.573vw] space-y-[10px]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-14 xl:gap-[2.917vw]'>
                  <div className='custom_dropdown'>
                    <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8 block'>
                      Title <span className='text-[#EC3237]'>*</span>
                    </label>
                    <Dropdown
                      value={formData.title}
                      name='title'
                      key={title.id}
                      onChange={(e) => {
                        handleInputChange(e);
                        setTitleId(e.target.value.id);
                      }}
                      options={title}
                      optionLabel='name'
                      placeholder='Select'
                      className='w-full md:w-[10rem] '
                    />
                  </div>
                  <div className='custom_input'>
                    <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                      First name <span className='text-[#EC3237]'>*</span>
                    </label>
                    <InputText
                      name='firstname'
                      value={formData.firstname}
                      onChange={handleInputChange}
                      placeholder='Enter last name '
                      className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                    />
                    {validation.firstName && (
                      <h1 className='text-[#EC3237]'>Firstname is required</h1>
                    )}
                  </div>
                </div>
                <div className='custom_input grid grid-cols-1 sm:grid-cols-2 gap-14 xl:gap-[2.917vw]'>
                  <div className=''>
                    <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                      Last name <span className='text-[#EC3237]'>*</span>
                    </label>
                    <InputText
                      name='lastname'
                      value={formData.lastname}
                      onChange={handleInputChange}
                      placeholder='Enter last name '
                      className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                    />
                    {validation.lastName && (
                      <h1 className='text-[#EC3237]'>Lastname is required</h1>
                    )}
                  </div>
                  <div className=''>
                    <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                      Mobile <span className='text-[#EC3237]'>*</span>
                    </label>
                    <InputText
                      name='mobile'
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder='Enter mobile number'
                      className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                    />
                    {validation.mobile && (
                      <h1 className='text-[#EC3237]'>
                        Mobile number is required
                      </h1>
                    )}
                  </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-14 xl:gap-[2.917vw]'>
                  <div className='custom_input'>
                    <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                      Email <span className='text-[#EC3237]'>*</span>
                    </label>
                    <InputText
                      name='email'
                      placeholder='Enter email '
                      value={formData.email}
                      onChange={handleInputChange}
                      className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                    />
                    {validation.email && (
                      <h1 className='text-[#EC3237]'>Email is required</h1>
                    )}
                  </div>
                  <div className='custom_dropdown'>
                    <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8 block'>
                      Select Property <span className='text-[#EC3237]'>*</span>
                    </label>
                    <Dropdown
                      value={formData.property}
                      onChange={(e) => {
                        handleInputChange(e);
                        // console.log(e.target.value.id)
                        setSelectPropertyId(e.target.value.id);
                      }}
                      options={propertylist}
                      optionLabel='name'
                      key={propertylist.id}
                      name='property'
                      placeholder={defaultProperty.property}
                      className='w-full '
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='xl:mt-[1.979vw] mt-[38px] xl:px-[2.167vw] px-[20px] mb-[42px] xl:mb-[2.188vw]'>
              <div className='flex gap-1'>
                <Checkbox
                  htmlFor='ingredient1'
                  onChange={(e) => setChecked(e.checked)}
                  checked={checked}
                  className='mt-1'
                ></Checkbox>
                <label htmlFor='ingredient1' className='ml-2'>
                  Agree… xxxxx xxxxxx xxxxxx xxx xx x xx x x x x x x x x x x x
                  xxx x x xx x x x x x x x x x x x x{' '}
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
              {/* <Link
                href=''
                onClick={deleteconfirm}
                className=' custmBtn outline_btn font-medium radiusFull items-center flex justify-center'
              >
                <i className='pi pi-trash text-[14px] mr-2'></i> Delete Tenant
              </Link> */}
              <div className='flex flex-wrap gap-4 items-center  '>
                <Link
                  href=''
                  onClick={() => {
                    setVisible(false);
                    setPropertyUserTypeId(2);
                  }}
                  className=' px-4 text-center flex justify-center text-[#9095A1] '
                >
                  CANCEL
                </Link>
                <Link
                  href=''
                  onClick={() => {
                    setVisible(false);
                    addTenantUser();
                  }}
                  className=' custmBtn red radiusFull  text-center flex justify-center'
                >
                  <i className='pi pi-check'></i>{' '}
                  {propertyUserTypeId === 2 ? 'Add User' : 'Add Tenant'}
                </Link>
              </div>
            </div>
          </Dialog>

          <Toast ref={toast} />
          <ConfirmDialog />
        </div>

        {/* <AddNewTenantPopup
          visible={visible}
          onHides={() => setVisible(false)}
        /> */}

        <Toast ref={toast} />
        <ConfirmDialog />
      </Layout>
    </>
  );
}
