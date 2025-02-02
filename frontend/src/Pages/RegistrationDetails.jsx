import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import Navbar from '../Components/Navbar';

const RegistrationDetails = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-10 py-10">
        <Typography variant="h4" className="text-center font-bold mb-8">Registration Details</Typography>

        {/* Registration Table for Indian Delegates */}
        <Box className="mb-10 ">
          <Typography variant="h5" className="font-semibold text-lg mb-4">Indian Delegates (INR)</Typography>

          <TableContainer component={Paper}>
            <Table className="min-w-full" aria-label="indian-delegates-table">
              <TableHead>
                <TableRow>
                  <TableCell>Categories</TableCell>
                  <TableCell>Early Bird Registration (On or before 18th September)</TableCell>
                  <TableCell>Regular Registration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  {
                    category: 'IEEE',
                    studentResearchScholarsEarly: '₹5310',
                    studentResearchScholarsRegular: '₹6490',
                    academiciansEarly: '₹7080',
                    academiciansRegular: '₹8260',
                    industryProfessionalsEarly: '₹8260',
                    industryProfessionalsRegular: '₹11800'
                  },
                  {
                    category: 'Non-IEEE',
                    studentResearchScholarsEarly: '₹6490',
                    studentResearchScholarsRegular: '₹7670',
                    academiciansEarly: '₹8260',
                    academiciansRegular: '₹10030',
                    industryProfessionalsEarly: '₹9440',
                    industryProfessionalsRegular: '₹15930'
                  },
                ].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>
                      {row.studentResearchScholarsEarly}<br />
                      {row.academiciansEarly}<br />
                      {row.industryProfessionalsEarly}
                    </TableCell>
                    <TableCell>
                      {row.studentResearchScholarsRegular}<br />
                      {row.academiciansRegular}<br />
                      {row.industryProfessionalsRegular}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2" className="mt-2 text-center text-gray-500">*All pricing details mentioned are inclusive of 18% GST</Typography>
        </Box>

        {/* Registration Table for Foreign Delegates */}
        <Box className="mb-10">
          <Typography variant="h5" className="font-semibold text-lg mb-4">Foreign Delegates (USD)</Typography>

          <TableContainer component={Paper}>
            <Table className="min-w-full" aria-label="foreign-delegates-table">
              <TableHead>
                <TableRow>
                  <TableCell>Categories</TableCell>
                  <TableCell>Early Bird Registration (On or before 18th September)</TableCell>
                  <TableCell>Regular Registration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  {
                    category: 'IEEE',
                    studentResearchScholarsEarly: '$80',
                    studentResearchScholarsRegular: '$110',
                    academiciansEarly: '$100',
                    academiciansRegular: '$135',
                    industryProfessionalsEarly: '$110',
                    industryProfessionalsRegular: '$200'
                  },
                  {
                    category: 'Non-IEEE',
                    studentResearchScholarsEarly: '$110',
                    studentResearchScholarsRegular: '$130',
                    academiciansEarly: '$130',
                    academiciansRegular: '$165',
                    industryProfessionalsEarly: '$135',
                    industryProfessionalsRegular: '$240'
                  },
                ].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>
                      {row.studentResearchScholarsEarly}<br />
                      {row.academiciansEarly}<br />
                      {row.industryProfessionalsEarly}
                    </TableCell>
                    <TableCell>
                      {row.studentResearchScholarsRegular}<br />
                      {row.academiciansRegular}<br />
                      {row.industryProfessionalsRegular}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2" className="mt-2 text-center text-gray-500">*All pricing details mentioned are inclusive of 18% GST</Typography>
        </Box>

        {/* Payment Section */}
        <Box className="text-center mb-10">
          <Button variant="contained" color="primary" className="px-6 py-3">
            Click Here to Pay Through Razorpay (Indian Delegates)
          </Button>
        </Box>

        {/* Bank Account Details Section */}
        <Box className="mb-10">
          <Typography variant="h6" className="font-semibold text-xl mb-4">Registration Method for Foreign Delegates</Typography>
          <Typography variant="body1">Beneficiary Name: PRINCIPAL, RVCE</Typography>
          <Typography variant="body1">Bank Account Number: 136010112055</Typography>
          <Typography variant="body1">Bank Name: KOTAK MAHINDRA BANK</Typography>
          <Typography variant="body1">Branch Name: RVCE Campus, Bengaluru</Typography>
          <Typography variant="body1">IFSC Code: KKBK0008053</Typography>
          <Typography variant="body1">SWIFT Code: KKBKINBB</Typography>
        </Box>

        {/* Instructions Section */}
        <Box className="mb-10">
          <Typography variant="h6" className="font-semibold text-xl mb-4">Instructions for Registration</Typography>
          <ul className="list-disc pl-5">
            <li>At least one author per accepted paper has to register.</li>
            <li>At least one author must present their accepted paper in the conference for consideration of publication on IEEE explore.</li>
            <li>Registration fee for the paper (with authorship) includes access to the pre conference tutorial, conference proceedings, all technical sessions, and presenter certificate.</li>
            <li>Registration fee for the pre conference tutorial includes access to the pre conference tutorial only (7th Nov 2024).</li>
            <li>Registration fee for the conference participation without authorship-attendee is not entitled to paper publication, however a participation certificate will be provided.</li>
            <li>While registering for Best Thesis Award, enter paper id as 9999.</li>
          </ul>
        </Box>

        {/* Important Notes Section */}
        <Box className="mb-10">
          <Typography variant="h6" className="font-semibold text-xl mb-4">Important Notes</Typography>
          <ul className="list-disc pl-5">
            <li>Registration category should be chosen appropriately from the aforementioned table.</li>
            <li>Registration fees are not refundable or non-transferable.</li>
            <li>You must save the payment proof in pdf. This payment proof file is to be attached in a section while filling the registration form.</li>
            <li>CSITSS-2024 organizing committee will not be responsible for any financial loss caused by improper transactions during registration process in CSITSS-2024.</li>
            <li>The author's name(s) must match the ones provided during the manuscript submission, registration (There should be one/same name at all stages of the conference).</li>
            <li>The submission of invalid proofs will lead to the cancellation of participation in the conference.</li>
          </ul>
        </Box>
      </div>
    </>
  );
};

export default RegistrationDetails;
