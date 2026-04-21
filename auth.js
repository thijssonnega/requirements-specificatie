const ROLE_CONFIG = {
  management: {
    label: "CEO / Management",
    target: "wireframe-2-management.html"
  },
  finance: {
    label: "CFO / Financieel",
    target: "wireframe-3-financieel.html"
  },
  operations: {
    label: "COO / Productie",
    target: "wireframe-4-productie.html"
  },
  it: {
    label: "IT-beheerder",
    target: "wireframe-5-beheer.html"
  }
};

function getRoleFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("role");
}

function getStoredRole() {
  return window.sessionStorage.getItem("dc_role");
}

function getRole() {
  return getRoleFromUrl() || getStoredRole();
}

function setRole(role) {
  window.sessionStorage.setItem("dc_role", role);
}

function clearRole() {
  window.sessionStorage.removeItem("dc_role");
}

function roleLabel(role) {
  if (!ROLE_CONFIG[role]) {
    return "Onbekende rol";
  }
  return ROLE_CONFIG[role].label;
}

function redirectToRoleDashboard(role) {
  const config = ROLE_CONFIG[role];
  if (!config) {
    window.location.href = "wireframe-1-login.html?error=rol";
    return;
  }
  setRole(role);
  window.location.href = `${config.target}?role=${encodeURIComponent(role)}`;
}

function requireRole(requiredRole) {
  const activeRole = getRole();
  if (!activeRole || activeRole !== requiredRole) {
    clearRole();
    window.location.href = "wireframe-1-login.html?error=toegang";
    return;
  }
  setRole(activeRole);
}

function setupLogout(buttonId) {
  const button = document.getElementById(buttonId);
  if (!button) {
    return;
  }
  button.addEventListener("click", () => {
    clearRole();
    window.location.href = "wireframe-1-login.html";
  });
}