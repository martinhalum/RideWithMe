import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {Ride, User, RideAction} from '@redux/types';
import {useEffect, useState} from 'react';
import {Dispatch} from 'redux';
import {addRide, setLoading} from '@redux/actions';

export const useFetchAll = (collectionPath: string) => {
  const dispatch: Dispatch<RideAction> = useDispatch();
  const [document, setDocument] = useState<Ride[] | null>();
  const [userDocument, setUserDocument] = useState<User[] | null>();

  useEffect(() => {
    const snapshotData: Ride[] = [];
    const unsubscribe = firestore()
      .collection(collectionPath)
      .onSnapshot(snapshot => {
        if (!snapshot.empty) {
          snapshot.forEach(data => {
            const {
              id,
              userId,
              driverId,
              pickupLocation,
              destination,
              pickupTime,
              status,
              timestamp,
            } = data.data();

            const newData = {
              id,
              userId,
              driverId,
              pickupLocation,
              destination,
              pickupTime: pickupTime.nanoseconds,
              status,
              timestamp: timestamp.nanoseconds,
            };

            snapshotData.push(newData);

            dispatch(addRide(newData));

            dispatch(setLoading(false));
          });
        }
        setDocument(snapshotData);
      });

    return () => unsubscribe();
  }, [collectionPath, dispatch]);

  return document;
};
