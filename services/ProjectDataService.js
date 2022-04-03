import http from "./http-common";
const API_VERSION = "/api/v1";

class ProjectDataService {
  async create(data) {
    return http.post(`${API_VERSION}/projects`, data);
  }

  async get(project) {
    return http.get(`${API_VERSION}/projects/${project}`);
  }

  async list(l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(`${API_VERSION}/projects?limit=${limit}&page=${page}`);
  }

  async remove(project) {
    return http.delete(`${API_VERSION}/projects/${project}`);
  }

  async update(project, data) {
    return http.put(`${API_VERSION}/projects/${project}`, data);
  }

  async meetings(project, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `/projects/${project}/meetings?limit=${limit}&page=${page}`
    );
  }

  async people(project, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `${API_VERSION}/projects/${project}/people?limit=${limit}&page=${page}`
    );
  }

  async tasks(project, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `${API_VERSION}/projects/${project}/tasks?limit=${limit}&page=${page}`
    );
  }

  async meetingsByText(project, text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `/projects/${project}/meetings?text=${text}&limit=${limit}&page=${page}`
    );
  }

  async peopleByText(project, text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `/projects/${project}/people?text=${text}&limit=${limit}&page=${page}`
    );
  }

  async projectsByText(text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `${API_VERSION}/projects?text=${text}&limit=${limit}&page=${page}`
    );
  }

  async tasksByText(project, text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `/projects/${project}/tasks?text=${text}&limit=${limit}&page=${page}`
    );
  }
}

export default new ProjectDataService();
