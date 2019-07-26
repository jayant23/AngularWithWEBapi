export class User {
    UserId: string;
    UserName: string;
    Password: string;
    EmailId: string;
}

export const body =   {"jsonrpc":"2.0","method":"getToken","params":["mib","f43618e37b82004066d60db3431f4a06392599a6cfcafa8268bf25becc0ec7d7"],"id":1}

export const eventlist = {"jsonrpc":"2.0","method":"getEventList","params":[],"id":1}
export const  getunitList = {"jsonrpc":"2.0","method":"getUnitList","params":[],"id":2}
export const firstworkingDay ={"jsonrpc":"2.0","method":"getFirstWorkingDay","params":["1"],"id":3}