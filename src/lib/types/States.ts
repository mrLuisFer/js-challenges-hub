import { SetStateAction } from 'jotai';
import { Dispatch } from 'react';

export type SetStateFunc = Dispatch<SetStateAction<boolean>> | undefined;
