import { AxiosResponse } from "axios";
import { MockAPIMode, Values } from "./NetworkTypes";
/**
 * @author Shin BeomChul
 * @since 2022.03.02
 */
declare class MockService {
    /**
     * @param serviceMode FAST(지연없음), REAL(실제 http요청), WOST(2초 후 http응답)
     * @returns
     */
    getMockAxiosResponse(serviceMode?: Values<typeof MockAPIMode>): Promise<AxiosResponse<any>>;
    /** No latency AxiosResponse */
    fakeHttpLatencyMock(): Promise<AxiosResponse<any>>;
    /** real latency AxiosResponse */
    realHttpLatencyMock(): Promise<AxiosResponse<any>>;
    /** worst latency AxiosResponse */
    worstHttpLatencyMock(): Promise<AxiosResponse<any>>;
}
export default MockService;
