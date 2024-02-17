import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserPersonalAccountDetailQuery } from '../../api/personalAccountCharges.api';

const ProcedureLeft = () => {
  const { id } = useParams();
  const { data } = useGetUserPersonalAccountDetailQuery(id);
  console.log(data);
  return (
    <div>ProcedureLeft</div>
  );
};

export default ProcedureLeft;
