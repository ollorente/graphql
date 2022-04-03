import http from "./http-common";
const API_VERSION = "/api/v1";

class TaskDataService {
  async create(data) {
    return http.post(`${API_VERSION}/tasks`, data);
  }

  get(task) {
    return http.get(`${API_VERSION}/tasks/${task}`);
  }

  async list(l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(`${API_VERSION}/tasks?limit=${limit}&page=${page}`);
  }

  async remove(task) {
    return http.delete(`${API_VERSION}/tasks/${task}`);
  }

  async update(task, data) {
    return http.put(`${API_VERSION}/tasks/${task}`, data);
  }

  async people(task, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `${API_VERSION}/tasks/${task}/people?limit=${limit}&page=${page}`
    );
  }

  async peopleByText(task, text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `/tasks/${task}/people?text=${text}&limit=${limit}&page=${page}`
    );
  }

  async tasksByText(text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `${API_VERSION}/tasks?text=${text}&limit=${limit}&page=${page}`
    );
  }
}

export default new TaskDataService();
