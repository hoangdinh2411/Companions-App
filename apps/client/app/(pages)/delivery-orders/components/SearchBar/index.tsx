'use client';
import React from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { getToken } from '../../../../actions/tokens';
import APP_ROUTER from '../../../../lib/config/router';
import Button from '../../../../components/UI/Button';
import SearchField from '../../../../components/shared/SearchField';

export default function SearchBar() {
  const router = useRouter();

  const handleRedirectToAddNew = async () => {
    const token = await getToken();
    if (token) {
      router.push(APP_ROUTER.ADD_NEW_DELIVERY_ORDER);
    } else {
      router.push(APP_ROUTER.SIGN_IN);
      toast.warning('Please sign in to continue');
    }
  };
  return (
    <section className='orders__search-bar'>
      <div className='search-bar__search'>
        <SearchField />
        <div className='orders__add-new'>
          <Button onClick={handleRedirectToAddNew}>New Order</Button>
        </div>
      </div>
    </section>
  );
}
