(function(){
    // Tooltip for map points
    const map = document.getElementById('map');
    const tooltip = document.getElementById('tooltip');
    let activePoint = null;
    function positionTooltip(btn){
      const mapRect = map.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      let left = btn.offsetLeft + 25;
      let top = btn.offsetTop - tooltip.offsetHeight / 2;
      if(left + tooltipRect.width > map.clientWidth){
        left = btn.offsetLeft - tooltipRect.width - 25;
      }
      if(top < 5) top = 5;
      if(top + tooltipRect.height > map.clientHeight) top = map.clientHeight - tooltipRect.height - 5;
      tooltip.style.left = left + 'px';
      tooltip.style.top = top + 'px';
    }
    function showTooltip(btn){
        const name = btn.getAttribute('data-name');
        const desc = btn.getAttribute('data-desc');
        tooltip.textContent = name + ": " + desc;
        tooltip.classList.add('visible');
        positionTooltip(btn);
        btn.setAttribute('aria-expanded', 'true');
        activePoint = btn;
      }
      function hideTooltip(btn){
        tooltip.classList.remove('visible');
        tooltip.textContent = '';
        btn.setAttribute('aria-expanded', 'false');
        activePoint = null;
      }
      map.querySelectorAll('.map-point').forEach(btn => {
        btn.addEventListener('mouseenter', () => showTooltip(btn));
        btn.addEventListener('mouseleave', () => hideTooltip(btn));
        btn.addEventListener('focus', () => showTooltip(btn));
        btn.addEventListener('blur', () => hideTooltip(btn));
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if(activePoint === btn){
            hideTooltip(btn);
          } else {
            showTooltip(btn);
          }
        });
      });
      document.addEventListener('click', (e) => {
        if(activePoint && !activePoint.contains(e.target) && !tooltip.contains(e.target)){
          hideTooltip(activePoint);
        }
      });
      // Navigation button scroll handlers
      const navButtons = document.querySelectorAll('.nav-btn');
      navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-target');
          const targetEl = document.getElementById(targetId);
          if(targetEl){
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Focus landmark after scroll
            setTimeout(() => targetEl.focus({preventScroll:true}), 500);
          }
        });
      });
    })();  