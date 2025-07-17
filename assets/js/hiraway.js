document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('page-loader')
  const body = document.body

  // Handle all link clicks
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a')
    if (link && !link.getAttribute('href').startsWith('#') && !link.getAttribute('href').startsWith('javascript:')) {
      e.preventDefault()
      const href = link.getAttribute('href')

      // Show loader with fade in effect
      loader.style.display = 'flex'
      setTimeout(() => loader.classList.add('active'), 10)
      body.classList.add('page-transitioning')

      // Preload the page
      fetch(href)
        .then((response) => response.text())
        .then((html) => {
          // Navigate after a short delay to show the transition
          setTimeout(() => {
            window.location.href = href
          }, 300)
        })
        .catch(() => {
          // If fetch fails, just navigate normally
          window.location.href = href
        })
    }
  })

  // Hide loader with fade out effect
  window.addEventListener('load', function () {
    loader.classList.remove('active')
    setTimeout(() => {
      loader.style.display = 'none'
      body.classList.remove('page-transitioning')
    }, 300)
  })

  // Initialize monochrome mode
  if (localStorage.getItem('monochrome-mode') === 'true') {
    document.documentElement.classList.add('monochrome')
  }

  // Sidebar toggle
  var sidebarToggleEl = document.getElementById('sidebarToggle')
  var sidebarEl = document.getElementById('sidebar')
  var mainContentEl = document.getElementById('mainContent')
  var sidebarOverlay = document.getElementById('sidebarOverlay')
  if (sidebarToggleEl && sidebarEl && mainContentEl) {
    sidebarToggleEl.addEventListener('click', function () {
      if (window.innerWidth <= 640) {
        sidebarEl.classList.toggle('sidebar-open')
        sidebarOverlay.classList.toggle('active')
        document.body.style.overflow = sidebarEl.classList.contains('sidebar-open') ? 'hidden' : ''
      } else {
        sidebarEl.classList.toggle('w-20')
        sidebarEl.classList.toggle('w-64')
        mainContentEl.classList.toggle('ml-20')
        mainContentEl.classList.toggle('ml-64')
      }
    })
  }
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', function () {
      sidebarEl.classList.remove('sidebar-open')
      sidebarOverlay.classList.remove('active')
      document.body.style.overflow = ''
    })
  }

  // Dropdown sidebar logic
  const dropdowns = [
    {
      btn: 'dropdownDashboardBtn',
      menu: 'dropdownDashboardMenu',
      icon: 'dropdownDashboardIcon',
    },
    {
      btn: 'dropdownMultiLevelBtn',
      menu: 'dropdownMultiLevelMenu',
      icon: 'dropdownMultiLevelIcon',
    },
    {
      btn: 'dropdownLevel1Btn',
      menu: 'dropdownLevel1Menu',
      icon: 'dropdownLevel1Icon',
    },
    {
      btn: 'dropdownLevel2Btn',
      menu: 'dropdownLevel2Menu',
      icon: 'dropdownLevel2Icon',
    },
    {
      btn: 'dropdownComponentBtn',
      menu: 'dropdownComponentMenu',
      icon: 'dropdownComponentIcon',
    },
    {
      btn: 'dropdownFormBtn',
      menu: 'dropdownFormMenu',
      icon: 'dropdownFormIcon',
    },
    {
      btn: 'dropdownChartBtn',
      menu: 'dropdownChartMenu',
      icon: 'dropdownChartIcon',
    },
    {
      btn: 'dropdownTableBtn',
      menu: 'dropdownTableMenu',
      icon: 'dropdownTableIcon',
    },
    {
      btn: 'dropdownPagesBtn',
      menu: 'dropdownPagesMenu',
      icon: 'dropdownPagesIcon',
    },
    {
      btn: 'dropdownAppsBtn',
      menu: 'dropdownAppsMenu',
      icon: 'dropdownAppsIcon',
    },
    {
      btn: 'dropdownHealthcareBtn',
      menu: 'dropdownHealthcareMenu',
      icon: 'dropdownHealthcareIcon',
    },
    {
      btn: 'dropdownHealthcareDetailsBtn',
      menu: 'dropdownHealthcareDetailsMenu',
      icon: 'dropdownHealthcareDetailsIcon',
    },
    {
      btn: 'dropdownHealthcareReportsBtn',
      menu: 'dropdownHealthcareReportsMenu',
      icon: 'dropdownHealthcareReportsIcon',
    },
  ]
  const sidebarToggle = document.getElementById('sidebarToggle')
  const sidebarOpenIcon = document.getElementById('sidebarOpenIcon')
  const sidebarClosedIcon = document.getElementById('sidebarClosedIcon')
  let sidebarOpen = true // or false, depending on your default
  const sidebar = document.getElementById('sidebar')
  const mobileSearchBtn = document.getElementById('mobileSearchBtn')
  const mobileSearchDiv = document.getElementById('mobileSearchDiv')
  const desktopSearchInput = document.getElementById('desktopSearchInput')
  const iconSearchBtn = document.getElementById('iconSearchBtn')
  const backMobileSearchBtn = document.getElementById('mobileSearchDiv')
  const mobileSearchCloseBtn = document.getElementById('mobileSearchCloseBtn')
  const headerRight = document.querySelector('.main-header-right')
  const sidebarLabels = document.querySelectorAll('.sidebar-label')

  if (mobileSearchBtn && mobileSearchDiv && desktopSearchInput && iconSearchBtn && backMobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', function () {
      if (window.innerWidth <= 640) {
        mobileSearchDiv.classList.add('show')
        headerRight.classList.add('hidden')
        mobileSearchBtn.style.display = 'none'
        desktopSearchInput.focus()
      }
    })

    // Add click event to close search when clicking on the search div itself
    mobileSearchDiv.addEventListener('click', function (e) {
      if (window.innerWidth <= 640 && e.target === mobileSearchDiv) {
        mobileSearchDiv.classList.remove('show')
        headerRight.classList.remove('hidden')
        mobileSearchBtn.style.display = ''
      }
    })

    // Add close button functionality
    if (mobileSearchCloseBtn) {
      mobileSearchCloseBtn.addEventListener('click', function () {
        if (window.innerWidth <= 640) {
          mobileSearchDiv.classList.remove('show')
          headerRight.classList.remove('hidden')
          mobileSearchBtn.style.display = ''
        }
      })
    }

    // Add escape key functionality
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && window.innerWidth <= 640 && mobileSearchDiv.classList.contains('show')) {
        mobileSearchDiv.classList.remove('show')
        headerRight.classList.remove('hidden')
        mobileSearchBtn.style.display = ''
      }
    })
  }

  dropdowns.forEach(({ btn, menu, icon }, idx) => {
    const btnEl = document.getElementById(btn)
    const menuEl = document.getElementById(menu)
    const iconEl = document.getElementById(icon)
    if (btnEl && menuEl && iconEl) {
      btnEl.addEventListener('click', (e) => {
        e.stopPropagation()
        // Check if we're on mobile and sidebar is collapsed
        const isMobile = window.innerWidth < 768
        const isSidebarCollapsed = sidebar ? sidebar.classList.contains('w-20') : false

        if (isMobile && isSidebarCollapsed) {
          // Expand sidebar
          if (sidebar) {
            sidebar.classList.remove('w-20')
            sidebar.classList.add('w-64')
          }
          mainContentEl.classList.remove('ml-20')
          mainContentEl.classList.add('ml-64')
          sidebarLabels.forEach((label) => label.classList.remove('hidden'))
          sidebarOpen = true
          sidebarOpenIcon.classList.remove('hidden')
          sidebarOpenIcon.classList.add('block')
          sidebarClosedIcon.classList.add('hidden')
          sidebarClosedIcon.classList.remove('block')
        }

        // Close other dropdowns at the same level
        const currentLevel = menuEl.closest('.pl-14, .pl-4')
        dropdowns.forEach(({ menu: otherMenu, icon: otherIcon }, otherIdx) => {
          const otherMenuEl = document.getElementById(otherMenu)
          const otherIconEl = document.getElementById(otherIcon)
          if (otherIdx !== idx && otherMenuEl && otherIconEl) {
            const otherLevel = otherMenuEl.closest('.pl-14, .pl-4')
            if (otherLevel === currentLevel) {
              otherMenuEl.classList.add('hidden')
              otherIconEl.classList.remove('rotate-180')
            }
          }
        })

        menuEl.classList.toggle('hidden')
        iconEl.classList.toggle('rotate-180')
      })
    }
  })

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    dropdowns.forEach(({ menu, icon }) => {
      const menuEl = document.getElementById(menu)
      const iconEl = document.getElementById(icon)
      if (menuEl && iconEl && !menuEl.contains(e.target) && !e.target.closest(`#${menu}`)) {
        menuEl.classList.add('hidden')
        iconEl.classList.remove('rotate-180')
      }
    })
  })

  if (sidebarToggle && sidebar && sidebarOpenIcon && sidebarClosedIcon) {
    sidebarToggle.addEventListener('click', () => {
      sidebarOpen = !sidebarOpen
      if (sidebarOpen) {
        sidebarOpenIcon.classList.remove('hidden')
        sidebarOpenIcon.classList.add('block')
        sidebarClosedIcon.classList.add('hidden')
        sidebarClosedIcon.classList.remove('block')
      } else {
        sidebarOpenIcon.classList.add('hidden')
        sidebarOpenIcon.classList.remove('block')
        sidebarClosedIcon.classList.remove('hidden')
        sidebarClosedIcon.classList.add('block')
      }
    })
    sidebarToggle.addEventListener('click', () => {
      const isCollapsed = sidebar ? sidebar.classList.contains('w-20') : false
      sidebarLabels.forEach((label) => {
        if (isCollapsed) {
          label.classList.add('hidden')
        } else {
          label.classList.remove('hidden')
        }
      })
    })
  }

  // Add active class to the active link
  const navLinks = document.querySelectorAll('aside nav a')
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      navLinks.forEach((l) => l.classList.remove('active'))
      link.classList.add('active')
    })
  })

  // command + k to focus search input
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'f') {
      e.preventDefault()
      const input = document.getElementById('desktopSearchInput')
      if (input) input.focus()
    }
  })

  // header dropdown avatar + notification
  // --- USER DROPDOWN ---
  const avatarBtn = document.getElementById('avatarBtn')
  const userDropdown = document.getElementById('userDropdown')
  const userWrapper = document.getElementById('userDropdownWrapper')

  avatarBtn.addEventListener('click', function (e) {
    e.stopPropagation()
    userDropdown.classList.toggle('hidden')
  })

  // --- NOTIFICATION DROPDOWN ---
  const notifBtn = document.getElementById('notifBtn')
  const notifDropdown = document.getElementById('notifDropdown')
  const notifWrapper = document.getElementById('notifDropdownWrapper')

  notifBtn.addEventListener('click', function (e) {
    e.stopPropagation()
    notifDropdown.classList.toggle('hidden')
  })

  // Close dropdowns if click outside
  document.addEventListener('click', function (e) {
    if (!userWrapper.contains(e.target)) {
      userDropdown.classList.add('hidden')
    }
    if (!notifWrapper.contains(e.target)) {
      notifDropdown.classList.add('hidden')
    }
  })

  function checkMobileScreen() {
    const isMobile = window.innerWidth < 768
    const sidebar = document.getElementById('sidebar')
    const mainContent = document.getElementById('mainContent')
    const sidebarLabels = document.querySelectorAll('.sidebar-label')
    if (isMobile) {
      sidebar.classList.remove('w-20', 'w-64')
      mainContent.classList.remove('ml-20', 'ml-64')
      sidebarLabels.forEach((label) => label.classList.remove('hidden'))
    } else {
      sidebar.classList.remove('sidebar-open')
      document.getElementById('sidebarOverlay').classList.remove('active')
      document.body.style.overflow = ''
      sidebar.classList.add('w-64')
      mainContent.classList.add('ml-64')
      sidebarLabels.forEach((label) => label.classList.remove('hidden'))
    }
  }

  // Run on page load
  checkMobileScreen()

  // --- SEARCHABLE DROPDOWN ---
  const input = document.getElementById('searchable-select')
  const optionsList = document.getElementById('options-list')
  const options = Array.from(optionsList.querySelectorAll('li'))

  function filterOptions() {
    const filter = input.value.toLowerCase()
    let anyVisible = false

    options.forEach((option) => {
      if (option.textContent.toLowerCase().includes(filter)) {
        option.style.display = ''
        anyVisible = true
      } else {
        option.style.display = 'none'
      }
    })

    if (input === document.activeElement && anyVisible) {
      optionsList.classList.remove('hidden')
    } else {
      optionsList.classList.add('hidden')
    }
  }

  input.addEventListener('focus', filterOptions)
  input.addEventListener('input', filterOptions)

  options.forEach((option) => {
    option.addEventListener('click', () => {
      input.value = option.textContent
      optionsList.classList.add('hidden')
      input.focus()
    })
  })

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !optionsList.contains(e.target)) {
      optionsList.classList.add('hidden')
    }
  })

  // mobile search
  function handleSearchVisibility() {
    if (window.innerWidth >= 640) {
      // sm breakpoint
      mobileSearchDiv.classList.remove('hidden')
      mobileSearchDiv.classList.add('sm:block')
      mobileSearchDiv.style.display = 'block'
    } else {
      mobileSearchDiv.classList.add('hidden')
      mobileSearchDiv.classList.remove('sm:block')
      mobileSearchDiv.style.display = ''
    }
  }

  // Initial check
  handleSearchVisibility()

  // Handle window resize with debounce
  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      handleSearchVisibility()
    }, 100)
  })

  // Handle mobile button click
  mobileSearchBtn.addEventListener('click', () => {
    if (window.innerWidth < 640) {
      mobileSearchDiv.classList.toggle('hidden')
    }
  })

  // Handle back button click
  if (backMobileSearchBtn) {
    backMobileSearchBtn.addEventListener('click', () => {
      if (window.innerWidth < 640) {
        mobileSearchDiv.classList.add('hidden')
      }
      // Force check visibility after back button click
      setTimeout(handleSearchVisibility, 100)
    })
  }

  // Default Dropdown
  const defaultDropdownButton = document.getElementById('defaultDropdownButton')
  const defaultDropdownMenu = document.getElementById('defaultDropdownMenu')

  if (defaultDropdownButton && defaultDropdownMenu) {
    defaultDropdownButton.addEventListener('click', function () {
      defaultDropdownMenu.classList.toggle('hidden')
    })

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
      if (!defaultDropdownButton.contains(event.target) && !defaultDropdownMenu.contains(event.target)) {
        defaultDropdownMenu.classList.add('hidden')
      }
    })
  }

  // Multiselect Dropdown
  const multiselectDropdownButton = document.getElementById('multiselectDropdownButton')
  const multiselectDropdownMenu = document.getElementById('multiselectDropdownMenu')
  const multiselectDropdownSearch = document.getElementById('multiselectDropdownSearch')
  const multiselectDropdownOptions = document.getElementById('multiselectDropdownOptions')
  const multiselectSelectedItems = document.getElementById('multiselectSelectedItems')

  let selectedValues = new Set()

  if (multiselectDropdownButton && multiselectDropdownMenu) {
    // Toggle dropdown
    multiselectDropdownButton.addEventListener('click', function () {
      multiselectDropdownMenu.classList.toggle('hidden')
    })

    // Handle option selection
    multiselectDropdownOptions.addEventListener('click', function (event) {
      const option = event.target.closest('a')
      if (!option) return

      const value = option.dataset.value
      const text = option.textContent

      if (selectedValues.has(value)) {
        selectedValues.delete(value)
        option.classList.remove('bg-blue-50')
      } else {
        selectedValues.add(value)
        option.classList.add('bg-blue-50')
      }

      updateSelectedItems()
    })

    // Search functionality
    multiselectDropdownSearch.addEventListener('input', function (event) {
      const searchTerm = event.target.value.toLowerCase()
      const options = multiselectDropdownOptions.getElementsByTagName('a')

      Array.from(options).forEach((option) => {
        const text = option.textContent.toLowerCase()
        option.style.display = text.includes(searchTerm) ? 'block' : 'none'
      })
    })

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
      if (!multiselectDropdownButton.contains(event.target) && !multiselectDropdownMenu.contains(event.target)) {
        multiselectDropdownMenu.classList.add('hidden')
      }
    })
  }

  function updateSelectedItems() {
    if (!multiselectSelectedItems) return

    if (selectedValues.size === 0) {
      multiselectSelectedItems.innerHTML = '<span class="text-gray-500">Select options</span>'
      return
    }

    multiselectSelectedItems.innerHTML = ''
    selectedValues.forEach((value) => {
      const option = multiselectDropdownOptions.querySelector(`[data-value="${value}"]`)
      if (option) {
        const badge = document.createElement('span')
        badge.className = 'inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800'
        badge.textContent = option.textContent
        multiselectSelectedItems.appendChild(badge)
      }
    })
  }

  // F12 In Developer Mode
  const f12InDeveloperModeSwitch = document.getElementById('f12InDeveloperModeSwitch')
  if (f12InDeveloperModeSwitch) {
    f12InDeveloperModeSwitch.addEventListener('change', function () {
      if (f12InDeveloperModeSwitch.checked) {
        document.addEventListener('contextmenu', (event) => event.preventDefault())
        document.onkeydown = function (e) {
          const key = e.key.toUpperCase()
          if (key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(key)) || (e.ctrlKey && key === 'U')) {
            e.preventDefault()
            return false
          }
        }
        console.log('%c🔒 Protected by hiraway. This UI is copyrighted.', 'color: gray; font-size: 14px;')
      } else {
        document.removeEventListener('contextmenu', (event) => event.preventDefault())
        document.onkeydown = null
      }
    })
  }

  // === Edit Dropdown Logic ===
  const editDropdownBtn = document.getElementById('editDropdownBtn')
  const editDropdown = document.getElementById('editDropdown')
  if (editDropdownBtn && editDropdown) {
    editDropdownBtn.addEventListener('click', function (e) {
      e.stopPropagation()
      editDropdown.classList.toggle('hidden')
    })
    document.addEventListener('click', function (e) {
      if (!editDropdown.contains(e.target) && e.target !== editDropdownBtn) {
        editDropdown.classList.add('hidden')
      }
    })
  }

  // RTL Toggle
  const rtlSwitch = document.getElementById('rtlSwitch')
  if (rtlSwitch) {
    rtlSwitch.checked = document.documentElement.getAttribute('dir') === 'rtl'
    rtlSwitch.addEventListener('change', function () {
      if (rtlSwitch.checked) {
        document.documentElement.setAttribute('dir', 'rtl')
        localStorage.setItem('rtl-mode', 'true')
      } else {
        document.documentElement.removeAttribute('dir')
        localStorage.setItem('rtl-mode', 'false')
      }
    })
    // On load
    if (localStorage.getItem('rtl-mode') === 'true') {
      document.documentElement.setAttribute('dir', 'rtl')
      rtlSwitch.checked = true
    }
  }

  // --- TAILWINDCSS DARK MODE LOGIC ---
  function updateDarkClass() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  // Run on page load
  updateDarkClass()
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateDarkClass)

  // Dark Mode Toggle (TailwindCSS best practice)
  const darkSwitch = document.getElementById('darkSwitch')
  if (darkSwitch) {
    // Set initial state of the switch
    darkSwitch.checked = document.documentElement.classList.contains('dark')
    darkSwitch.addEventListener('change', function () {
      if (darkSwitch.checked) {
        localStorage.theme = 'dark'
      } else {
        localStorage.theme = 'light'
      }
      updateDarkClass()
    })
    // Keep switch in sync if theme changes elsewhere
    window.addEventListener('storage', function (e) {
      if (e.key === 'theme') {
        updateDarkClass()
        darkSwitch.checked = document.documentElement.classList.contains('dark')
      }
    })
  }

  // Monochrome Toggle (langsung toggle tanpa tombol header)
  const monoSwitch = document.getElementById('monoSwitch')
  if (monoSwitch) {
    monoSwitch.checked = document.documentElement.classList.contains('monochrome')
    monoSwitch.addEventListener('change', function () {
      if (document.documentElement.classList.contains('monochrome')) {
        document.documentElement.classList.remove('monochrome')
        localStorage.setItem('monochrome-mode', 'false')
      } else {
        document.documentElement.classList.add('monochrome')
        localStorage.setItem('monochrome-mode', 'true')
      }
    })
    // On load
    if (document.documentElement.classList.contains('monochrome')) {
      monoSwitch.checked = true
    }
  }

  // Collapsed Sidebar Toggle
  const sidebarCollapseSwitch = document.getElementById('sidebarCollapseSwitch')
  if (sidebarCollapseSwitch) {
    // Assume collapsed = w-20, expanded = w-64
    const sidebar = document.getElementById('sidebar')
    const mainContent = document.getElementById('mainContent')
    const sidebarLabels = document.querySelectorAll('.sidebar-label')
    function setSidebarCollapsed(collapsed) {
      if (collapsed) {
        sidebar.classList.add('w-20')
        sidebar.classList.remove('w-64')
        mainContent.classList.add('ml-20')
        mainContent.classList.remove('ml-64')
        sidebarLabels.forEach((label) => label.classList.add('hidden'))
      } else {
        sidebar.classList.remove('w-20')
        sidebar.classList.add('w-64')
        mainContent.classList.remove('ml-20')
        mainContent.classList.add('ml-64')
        sidebarLabels.forEach((label) => label.classList.remove('hidden'))
      }
    }
    sidebarCollapseSwitch.checked = sidebar.classList.contains('w-20')
    sidebarCollapseSwitch.addEventListener('change', function () {
      setSidebarCollapsed(sidebarCollapseSwitch.checked)
      localStorage.setItem('sidebar-collapsed', sidebarCollapseSwitch.checked ? 'true' : 'false')
    })
    // On load
    if (localStorage.getItem('sidebar-collapsed') === 'true') {
      setSidebarCollapsed(true)
      sidebarCollapseSwitch.checked = true
    }
  }

  // Sidebar Color Radio
  const sidebarColorRadios = document.getElementById('sidebarColorRadios')
  if (sidebarColorRadios) {
    const sidebar = document.getElementById('sidebar')
    const colorClasses = ['sidebar-default', 'sidebar-primary', 'sidebar-success', 'sidebar-danger', 'sidebar-warning', 'sidebar-dark']
    function setSidebarColor(val) {
      colorClasses.forEach((cls) => sidebar.classList.remove(cls))
      sidebar.classList.add('sidebar-' + val)
      localStorage.setItem('sidebar-color', val)
    }
    sidebarColorRadios.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.addEventListener('change', function () {
        if (radio.checked) setSidebarColor(radio.value)
      })
    })
    // On load
    const saved = localStorage.getItem('sidebar-color') || 'default'
    setSidebarColor(saved)
    sidebarColorRadios.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = radio.value === saved
    })
  }

  // breadcrumb
  const path = window.location.pathname
  const fileName = path.substring(path.lastIndexOf('/') + 1)

  const pageName = fileName.replace('.html', '').replace(/[-_]/g, ' ')
  const capitalized = pageName.charAt(0).toUpperCase() + pageName.slice(1)

  const pageNameEl = document.getElementById('pageName')
  if (pageNameEl) {
    pageNameEl.innerText = capitalized
  }

  // get version from url
  fetch('../version.html')
    .then((res) => res.text())
    .then((html) => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')
      const accordions = doc.querySelectorAll('.accordion')
      let versions = []
      accordions.forEach((acc) => {
        const header = acc.querySelector('.accordion-header')
        const versionLabel = header?.querySelector('.font-semibold')?.textContent?.trim()
        const published = header?.querySelector('.flex.items-center.gap-3 .text-gray-400:not(.hidden)')?.textContent?.trim()
        if (published && !(published.toLowerCase().includes('coming soon') || published === '-')) {
          versions.push(versionLabel)
        }
      })
      if (versions.length > 0) {
        versions.sort((a, b) => {
          const pa = a.split('.').map(Number)
          const pb = b.split('.').map(Number)
          for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
            if ((pa[i] || 0) > (pb[i] || 0)) return -1
            if ((pa[i] || 0) < (pb[i] || 0)) return 1
          }
          return 0
        })
        const sidebarVersion = document.getElementById('sidebar-version')
        if (sidebarVersion) {
          sidebarVersion.textContent = 'Version: ' + versions[0]
        }
      }
    })

  var headerSidebarToggle = document.getElementById('headerSidebarToggle')
  if (headerSidebarToggle && sidebarEl && sidebarOverlay) {
    headerSidebarToggle.addEventListener('click', function () {
      if (window.innerWidth <= 640) {
        sidebarEl.classList.add('sidebar-open')
        sidebarOverlay.classList.add('active')
        document.body.style.overflow = 'hidden'
      }
    })
  }
})
