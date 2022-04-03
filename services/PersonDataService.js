import http from "./http-common";
const API_VERSION = "/api/v1";

class PersonDataService {
  async create(data) {
    return http.post(`${API_VERSION}/people`, data);
  }

  async get(person) {
    return http.get(`${API_VERSION}/people/${person}`);
  }

  async list(l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(`${API_VERSION}/people?limit=${limit}&page=${page}`);
  }

  async remove(person) {
    return http.delete(`${API_VERSION}/people/${person}`);
  }

  async update(person, data) {
    return http.put(`${API_VERSION}/people/${person}`, data);
  }

  async meetings(person, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `${API_VERSION}/people/${person}/meetings?limit=${limit}&page=${page}`
    );
  }

  async projects(person, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `${API_VERSION}/people/${person}/projects?limit=${limit}&page=${page}`
    );
  }

  async tasks(person, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `${API_VERSION}/people/${person}/tasks?limit=${limit}&page=${page}`
    );
  }

  async meetingsByText(person, text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `/people/${person}/meetings?text=${text}&limit=${limit}&page=${page}`
    );
  }

  async peopleByText(text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `${API_VERSION}/people?text=${text}&limit=${limit}&page=${page}`
    );
  }

  async projectsByText(person, text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `/people/${person}/projects?text=${text}&limit=${limit}&page=${page}`
    );
  }

  async tasksByText(person, text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `/people/${person}/tasks?text=${text}&limit=${limit}&page=${page}`
    );
  }
}

export default new PersonDataService();
