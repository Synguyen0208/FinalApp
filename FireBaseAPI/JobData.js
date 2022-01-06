import { getDatabase, onValue, ref } from 'firebase/database';

const getJobData = async () => {
  let data = [];
  const db = getDatabase();
  const reference = await ref(db, `jobData`);
  return await onValue(reference, (snapshot) => {
    return snapshot.val();
  });
  return data;
};
export { getJobData };
