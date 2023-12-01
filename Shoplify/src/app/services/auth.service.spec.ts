import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);

  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // test for signup
  it('should signup', () => {
    const userDetails = {
      "userName": "user1",
      "email": "michealvenum007@gmail.com",
      "phone_no": "1234567890",
      "password": "123456",
      "confirm_assword": "123456"
    };

    service.registerUser(userDetails).subscribe((res) => {
      expect(res).toEqual(userDetails);
    });

    const req = httpMock.expectOne('http://localhost:5400/user/register');
    expect(req.request.method).toBe('POST');
    req.flush(userDetails);


  });

  // test for login
  it('should login', async () => {
    const userLogin = {
      "email": "michealvenum007@gmail.com",
      "password": "12345678"
    };

    const res = await service.login(userLogin);
    expect(res).toEqual(userLogin);

    const req = httpMock.expectOne('http://localhost:5400/user/login');
    expect(req.request.method).toBe('POST');
    req.flush(userLogin);
  });

   //request reset password
   it('should request reset password', () => {
    const email = {
      "email": "michealvenum007@gmail.com"
    };

    const res = service.requestReset(email);
    expect(res).toEqual(email);

    const req = httpMock.expectOne('http://localhost:5400/user/requestResetPassword');
    expect(req.request.method).toBe('POST');
    req.flush(email);

  });

  //reset password
  it('should reset password', () => {
    const passwordDetails = {
      "password": "12345678",
      "confirmPassword": "12345678"
    };

    const res = service.resetPassword(passwordDetails);
    expect(res).toEqual(passwordDetails);

    const req = httpMock.expectOne('http://localhost:5400/user/resetPassword');
    expect(req.request.method).toBe('POST');
    req.flush(passwordDetails);

  });




});
