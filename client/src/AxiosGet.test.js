import React from "react";
import { render, cleanup} from "@testing-library/react";

import '@testing-library/jest-dom/extend-expect';
import AxiosGet from './components/AxiosGet';

afterEach(cleanup);

test('fetches and disaplays data', async () => {

    

    const url = '/greeting';
    const {getByTestId} = render(<AxiosGet url={url}/>)

    expect(getByTestId('loading'))


})