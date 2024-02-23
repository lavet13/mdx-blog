import { FC } from 'react';

const Dump: FC<{ data: any }> = ({ data }) => {
  return (
    <pre
      style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};

export default Dump;
