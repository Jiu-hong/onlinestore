import { useState, useRef } from 'react';
import Image from 'next/image';
export default function Upload() {
  const [src, setSrc] = useState('');
  var fileArray = [];

  const refForm = useRef(null);
  const refFile = useRef(null);
  const uploadPhoto = async (e) => {
    const file = e.target.files[0];
    // const file = e.target.files;
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/upload-url?file=${filename}`);
    const { url, fields } = await res.json();
    console.log('url: ', url);
    console.log('fields: ', fields);
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      console.log('key: ', key);
      console.log('value: ', value);
      formData.append(key, value);
    });
    console.log('formData: ', formData);
    fetch(url, {
      method: 'POST',
      body: formData,
    }).then((result) => console.log('result: ', result));

    /*if (upload.ok) {
      console.log('Uploaded successfully!');
    } else {
      console.error('Upload failed.');
    }*/
  };

  const handleFile = (e) => {
    e.preventDefault();

    for (let i = 0; i < refFile.current.files.length; i++) {
      fileArray.push(refFile.current.files[i]);
    }
    fileArray.map((file) => {
      const filename = encodeURIComponent(file.name);
      fetch(`/api/upload-url?file=${filename}`)
        .then((res) => res.json())
        .then(({ url, fields }) => {
          console.log('url: ', url);
          console.log('fields: ', fields);
          const formData = new FormData();

          Object.entries({ ...fields, file }).forEach(([key, value]) => {
            formData.append(key, value);
          });

          fetch(url, {
            method: 'POST',
            body: formData,
          }).then((result) => console.log('result: ', result));
        });
    });
  };

  const uploadPhototoG = async (e) => {
    const file = e.target.files[0];
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/uploadg-url?file=${filename}`);
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const upload = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (upload.ok) {
      console.log('Uploaded successfully!');
    } else {
      console.error('Upload failed.');
    }
  };

  const cors = async () => {
    const res = await fetch(`/api/CORS`);
    console.log('res: ', res);
  };

  const handleResize = (e) => {
    e.preventDefault();
    setSrc(
      // 's3://redbirdbucket-resized/resized-brooke-lark-8beTH4VkhLI-unsplash.jpg'
      'https://s3.amazonaws.com/redbirdbucket-resized/resized-lemon.jpg'
    );
  };
  return (
    <>
      <hr />
      <label>
        upload to google
        <input
          onChange={uploadPhototoG}
          type='file'
          accept='image/png, image/jpeg'
        />
      </label>
      <hr />
      <label>
        original
        <input onChange={uploadPhoto} type='file' />
      </label>
      <hr />
      <form ref={refForm} className='form container'>
        <label>
          {' '}
          upload files
          <input
            ref={refFile}
            className='form-control'
            //  onChange={uploadPhoto}
            type='file'
            accept='image/png, image/jpeg'
            multiple
          />
        </label>
        <br />
        <button className='btn btn-primary' onClick={handleFile}>
          click
        </button>
        <hr />
        {src && <Image src={src} width={60} height={60} />}
        <button className='btn btn-primary' onClick={handleResize}>
          get resized file
        </button>
        <hr />
        <button onClick={cors}>cors</button>
      </form>
      <hr />
    </>
  );
}
