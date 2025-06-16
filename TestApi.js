const axios = require("axios");
const { expect } = require("chai");

require('dotenv').config();

// Konfigurasi dotenv (Node.js)
require('dotenv').config();

// Penggunaan variabel lingkungan
const API_URL = process.env.API_URL;
const headers = {
  Authorization: `Bearer ${process.env.API_TOKEN}`,
  "Content-Type": "application/json",
};

// Helper function to perform GET requests
const getRequest = async (url) => {
  try {
    const response = await axios.get(url, { headers });
    return response;
  } catch (error) {
    return error.response;
  }
};

// Helper function to perform POST requests
const postRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data, { headers });
    return response;
  } catch (error) {
    return error.response;
  }
};

// Helper function to perform PUT requests
const putRequest = async (url, data) => {
  try {
    const response = await axios.put(url, data, { headers });
    return response;
  } catch (error) {
    return error.response;
  }
};

// Helper function to perform DELETE requests
const deleteRequest = async (url) => {
  try {
    const response = await axios.delete(url, { headers });
    return response;
  } catch (error) {
    return error.response;
  }
};

// Test Suite
describe("API Automation -  Testing Gorest API", () => {
  let userId;

  it("List user details (Positive Test)", async () => {
    const response = await getRequest(API_URL);
    console.log("List User", response.data);
    expect(response.status).to.equal(200);
  });

  it("Create a new user (Positive Test)", async () => {
    const userData = { name: "Testing No 1", gender: "male", email: "testingno1@gmail.com", status: "active" };
    const response = await postRequest(API_URL, userData);
    console.log("Create User", response.data);
    expect(response.status).to.equal(201);
    expect(response.data).to.have.property("id");
    userId = response.data.id;
  });

  it("Get user details (Positive Test)", async () => {
    const response = await getRequest(`${API_URL}${userId}`);
    console.log("Get User", response.data);
    expect(response.status).to.equal(200);
    expect(response.data.id).to.equal(userId);
  });

  it("Update user details (Positive Test)", async () => {
    const updateData = { name: "Testing no 2", status: "inactive" };
    const response = await putRequest(`${API_URL}${userId}`, updateData);
    console.log("Update User", response.data);
    expect(response.status).to.equal(200);
  });

  it("Delete user (Positive Test)", async () => {
    const response = await deleteRequest(`${API_URL}${userId}`);
    console.log("Delete User", response.data);
    expect(response.status).to.equal(204);
  });

  it("Get non-existing user (Negative Test)", async () => {
    const response = await getRequest(`${API_URL}9999999`);
    console.log("Get Non-Existing User", response.data);
    expect(response.status).to.equal(404);
  });
});
