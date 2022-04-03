import http from "./http-common";
const API_VERSION = "/api/v1";

class MeetingDataService {
  async create(data) {
    return http.post(`${API_VERSION}/meetings`, data);
  }

  async get(meeting) {
    return http.get(`${API_VERSION}/meetings/${meeting}`);
  }

  async list(l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(`${API_VERSION}/meetings?limit=${limit}&page=${page}`);
  }

  async remove(meeting) {
    return http.delete(`${API_VERSION}/meetings/${meeting}`);
  }

  async update(meeting, data) {
    return http.put(`${API_VERSION}/meetings/${meeting}`, data);
  }

  async people(meeting, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `${API_VERSION}/meetings/${meeting}/people?limit=${limit}&page=${page}`
    );
  }

  async tasks(meeting, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `${API_VERSION}/meetings/${meeting}/tasks?limit=${limit}&page=${page}`
    );
  }

  async meetingsByText(text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `${API_VERSION}/meetings?text=${text}&limit=${limit}&page=${page}`
    );
  }

  async peopleByText(meeting, text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `/meetings/${meeting}/people?text=${text}&limit=${limit}&page=${page}`
    );
  }

  async tasksByText(meeting, text, l, p) {
    const limit = l ?? 10;
    const page = p ?? 1;

    return http.get(
      `/meetings/${meeting}/tasks?text=${text}&limit=${limit}&page=${page}`
    );
  }
}

export default new MeetingDataService();
