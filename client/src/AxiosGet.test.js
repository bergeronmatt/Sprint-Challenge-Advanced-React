import React from "react";
import { render, cleanup, waitForElement} from "@testing-library/react";

import '@testing-library/jest-dom/extend-expect';

import axiosMock from 'axios';
import AxiosGet from './components/AxiosGet';

afterEach(cleanup);

test('fetches and disaplays data', async () => {

    axiosMock.get.mockResolvedValueOnce({data: {greeting: 'hello'}})

    const url = '/greeting';
    const {getByTestId, getByText} = render(<AxiosGet url={url}/>)

    expect(getByTestId('loading')).toHaveTextContent('Loading data...');

    const resolvedSpan = waitForElement(() => 
    getByTestId('resolved'))

    expect(resolvedSpan).toHaveTextContent('hello');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
})