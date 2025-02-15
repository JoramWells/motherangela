/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-void */

'use client';

import React, {
  type FormEvent, use, useEffect, useState,
} from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetAppModulesQuery } from '@/api/app-modules/appModule.api';
import InputText from '@/components/custom/forms/InputText';

const dataList2 = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Patients',
    link: '/',
  },
];

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/root/app-modules/edit`;

function AddApp({ params }: { params: Promise<{id:string}> }) {
  // const { appModuleID } = React.use(props.params)
  const { id } = use(params);

  const { data } = useGetAppModulesQuery(id as string);

  const [file, setFile] = useState<File | undefined>();
  const [title, setTitle] = useState<string | undefined>('');
  const [link, setLink] = useState<string | undefined>('');
  const [description, setDescription] = useState<string | undefined>('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (data != null) {
      setTitle(data?.title);
      setLink(data?.link);
      setDescription(data?.description);
      setIsActive(data.isActive as boolean);
    }
  }, [data]);

  //
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', title as string);
    formData.append('description', description as string);
    formData.append('link', link as string);
    formData.append('isActive', isActive as unknown as string);
    if (file != null) {
      formData.append('file', file);
    }
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    // setIsLoadingArticleSave(true)
    await axios.put(`${URL}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformRequest: [(dtm) => dtm],
    });
    // setIsLoadingArticleSave(false);
  };
  return (
    <>
      <BreadcrumbNav listItems={dataList2} />

      <div className="p-2">
        <form
          className="w-1/2 p-4 bg-white rounded-lg flex flex-col space-y-4"
          onSubmit={(e) => void handleSubmit(e)}
        >
          <InputText
            label="Module Name"
            name="title"
            value={title}
            onChange={setTitle}
          />
          <InputText
            label="Link"
            value={link}
            name="link"
            onChange={setLink}
          />
          <Textarea
            placeholder="Enter Description"
            name="description"
            value={description}
            className="shadow-none"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <div>
            <label htmlFor="" className="text-[14px] text-slate-700">Active</label>
            <p className="text-[12px] text-slate-500">An active module is visible by all the users</p>
            <Switch
              checked={isActive}
              onCheckedChange={() => {
                setIsActive((prev) => !prev);
              }}
              className="text-teal-600 bg-teal-600 "
            />
          </div>

          <InputText
            label="Select image"
            type="file"
            name="file"
            onChange={setFile}
            // value={file}
          />
          <Button size="sm" type="submit">
            Save
          </Button>
        </form>
      </div>
    </>
  );
}

export default AddApp;
