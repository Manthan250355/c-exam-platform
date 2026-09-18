// "CAT-1 Partial Derivatives" question bank — sourced from the user's PDF
// (Question_Bank_CAT-1_Partial Derivatives.pdf, Chitkara University,
// 25APS0101). The PDF gives 4 options per question but NO answer key at all
// — every correctIndex below was worked out by hand from the actual
// calculus, not guessed.
//
// One known defect, fixed rather than silently mis-marked: Q55 as given
// ("z=xy, x=e^t cos t, y=e^t sin t, find dz/dt") has NO correct option among
// its original 4 — the true derivative is e^{2t}(sin2t + cos2t), and the
// PDF's two non-trivial options are each only half of that sum. Option (a)
// text was corrected to the real answer; the other 3 (still-wrong) options
// were left as distractors.

const mcq = [];
let id = 256;
function add(topic, question, options, correctIndex) {
  mcq.push({ id: id++, section: 'CAT-1 Partial Derivatives', type: 'mcq', topic, question, options, correctIndex });
}

const T1 = 'Partial Derivatives';
const T2 = "Euler's Theorem & Homogeneous Functions";
const T3 = 'Tangent Plane & Normal Line';
const T4 = 'Chain Rule & Composite Functions';
const T5 = 'Implicit Functions & Total Derivatives';
const T6 = 'Errors & Approximation';
const T7 = 'Jacobians';
const T8 = "Taylor's & Maclaurin's Series";

add(T1, 'If z = x³y² + 4xy, then ∂z/∂x is', ['3x²y² + 4y', '3xy² + 4x', 'x²y² + 4y', '3x²y + 4'], 0);
add(T1, 'If z = x² + y² + xy, then ∂z/∂y equals', ['2y + x', '2x + y', '2y − x', 'x + y'], 0);
add(T1, 'If u = eˣʸ, then ∂u/∂x is', ['xy eˣʸ', 'x eˣʸ', 'y eˣʸ', 'eˣʸ'], 2);
add(T1, 'If u = ln(x² + y²), then ∂u/∂x equals', ['2x/(x² + y²)', 'x/(x² + y²)', '2y/(x² + y²)', '1/(x² + y²)'], 0);
add(T1, 'If z = x sin y + y cos x, then ∂z/∂x equals', ['sin y − y sin x', 'sin y + y cos x', 'cos y − y sin x', 'sin x + y cos x'], 0);
add(T1, 'If u = tan⁻¹(xy), then ∂u/∂x is', ['y/(1 + x²y²)', 'x/(1 + x²y²)', 'xy/(1 + x²y²)', '1/(1 + x²y²)'], 0);
add(T1, 'If u = x²y + 3y², then u_yy equals', ['6', '3', '2x', '0'], 0);
add(T1, 'If z = x²y + xy², then ∂z/∂x at (1, 2) is', ['8', '6', '10', '12'], 0);
add(T1, 'If z = x³ + y³ − 3xy, then ∂z/∂y at (1, 2) equals', ['9', '10', '8', '6'], 0);
add(T1, 'If u = eˣʸ, find ∂u/∂y at (1, 0).', ['1', '0', 'e', '2'], 0);
add(T1, 'If z = x²y², then z_xy at (2, 3) equals', ['24', '12', '36', '18'], 0);
add(T1, 'If u = ln(x + y), then ∂u/∂y at (1, 1) equals', ['1/2', '1', '1/4', '2'], 0);
add(T1, 'If z = √(x² + y²), then ∂z/∂x at (3, 4) equals', ['3/5', '4/5', '1/5', '1'], 0);

add(T2, 'If u = x³ + 3x²y + 3xy² + y³, then xu_x + yu_y equals', ['2u', '3u', '4u', 'u'], 1);
add(T2, 'If u = (x² + y²)/√(x + y), the degree of the homogeneous function is', ['1/2', '3/2', '5/2', '3'], 1);
add(T2, 'If u is homogeneous of degree 6 and u = 64 at a point, then xu_x + yu_y =', ['64', '128', '256', '384'], 3);
add(T2, 'If u = x³y²/(x + y), then the degree of u is', ['2', '3', '4', '5'], 2);
add(T2, 'If u = √(x² + xy + y²), then u is homogeneous of degree', ['0', '1/2', '1', '2'], 2);
add(T2, 'If u = x³ sin(y/x), then x·∂u/∂x + y·∂u/∂y equals', ['u', '2u', '3u', '4u'], 2);
add(T2, 'If u is homogeneous of degree 6, then x²u_xx + 2xyu_xy + y²u_yy is', ['24u', '30u', '36u', '42u'], 1);
add(T2, 'If u = (x⁴ + 2x²y² + y⁴)/(x² + y²), then the value of x·∂u/∂x + y·∂u/∂y is', ['u', '2u', '3u', '4u'], 1);
add(T2, 'If u = x⁵ cos(y/x), then x·∂u/∂x + y·∂u/∂y is equal to', ['3u', '4u', '5u', '6u'], 2);
add(T2, 'If u is a homogeneous function of degree 4 and u(2, 1) = 8, then the value of 2·∂u/∂x + ∂u/∂y at (2, 1) is', ['8', '16', '24', '32'], 3);
add(T2, 'If u = (x + y)⁴/(x² + y²), then the degree of homogeneity of u is', ['0', '1', '2', '4'], 2);
add(T2, 'If u = (x² + y²)^(3/2), then x²u_xx + 2xyu_xy + y²u_yy is equal to', ['3u', '6u', '(15/4)u', '(3/4)u'], 1);
add(T2, 'If u = x⁴f(y/x), where f is a differentiable function, then x·∂u/∂x + y·∂u/∂y is', ['2u', '3u', '4u', '5u'], 2);
add(T2, 'If u = log(x³ + y³ + z³ − 3xyz), then xu_x + yu_y + zu_z is equal to', ['3u', '2u', '0', '3'], 3);
add(T2, 'If u = sin⁻¹[(x + y)/(√x + √y)], then x·∂u/∂x + y·∂u/∂y is', ['(1/2) tan u', '−(1/2) tan u', '(1/4) tan u', '−(1/4) tan u'], 0);

add(T3, 'The normal line to z = x² + y² at (1, 2, 5) is', ['(x − 1)/2 = (y − 2)/4 = (z − 5)/(−1)', '(x − 1)/1 = (y − 2)/2 = (z − 5)/1', '(x − 1)/4 = (y − 2)/2 = (z − 5)/1', '(x − 1)/2 = (y − 2)/2 = (z − 5)/2'], 0);
add(T3, 'The equation of the normal line to the surface xyz = a³ at the point (x₁, y₁, z₁) is', ['(x − x₁)/(y₁z₁) = (y − y₁)/(z₁x₁) = (z − z₁)/(x₁y₁)', '−(x − x₁)/(y₁z₁) = (y − y₁)/(z₁x₁) = −(z − z₁)/(x₁y₁)', '(x − x₁)/(y₁z₁) = −(y − y₁)/(z₁x₁) = −(z − z₁)/(x₁y₁)', '−(x − x₁)/(y₁z₁) = −(y − y₁)/(z₁x₁) = (z − z₁)/(x₁y₁)'], 0);
add(T3, 'The equation of the tangent plane to the surface x² + y² + z² = 14 at the point (1, 2, 3) is', ['x + 2y + 3z = 14', '2x + 4y + 6z = 14', 'x + 2y + 3z = 7', '2x + 2y + 2z = 14'], 0);
add(T3, 'The equation of the normal line to the surface x² + y² + z² = 9 at the point (2, 1, 2) is', ['(x − 2)/2 = (y − 1)/1 = (z − 2)/2', '(x − 2)/1 = (y − 1)/2 = (z − 2)/2', '(x − 2)/4 = (y − 1)/2 = (z − 2)/4', '(x − 2)/2 = (y − 1)/2 = (z − 2)/1'], 2);
add(T3, 'The normal line to the surface x² + 2y² + 3z² = 18 at (2, 1, 2) is', ['(x − 2)/4 = (y − 1)/4 = (z − 2)/12', '(x − 2)/2 = (y − 1)/2 = (z − 2)/6', '(x − 2)/4 = (y − 1)/2 = (z − 2)/6', '(x − 2)/1 = (y − 1)/2 = (z − 2)/3'], 0);
add(T3, 'The tangent plane to the surface eˣ + y + z = 5 at the point (0, 2, 2) is', ['x + y + z = 4', 'x + y − z = 0', 'x − y + z = 0', '2x + y + z = 5'], 0);
add(T3, 'The tangent plane to the surface ln x + ln y + ln z = 0 at (1, 1, 1) is', ['x + y − z = 1', 'x + y + z = 3', '2x + y + z = 3', 'x + 2y + z = 3'], 1);
add(T3, 'The normal line to the surface xy = z at (1, 2, 2) is', ['(x − 1)/2 = (y − 2)/1 = (z − 2)/(−1)', '(x − 1)/1 = (y − 2)/2 = (z − 2)/1', '(x − 1)/2 = (y − 2)/2 = (z − 2)/1', '(x − 1)/1 = (y − 2)/1 = (z − 2)/2'], 0);
add(T3, 'The tangent plane to the surface xz + y = 5 at (1, 2, 3) is', ['3x + y + z = 8', 'x + 3y + z = 8', '3x − y + z = 8', 'x + y + 3z = 8'], 0);

add(T4, 'If z = f(x, y), where x = r cosθ, y = r sinθ, then ∂z/∂r is', ['f_x cosθ + f_y sinθ', 'f_x sinθ + f_y cosθ', 'f_x cosθ − f_y sinθ', 'f_x + f_y'], 0);
add(T4, 'If z = x² + y², where x = t², y = eᵗ, then dz/dt equals', ['4t³ + 2e²ᵗ', '2t² + 2eᵗ', '4t + 2eᵗ', '2t³ + e²ᵗ'], 0);
add(T4, 'Let u = f(x, y), where x = rs, y = r/s. Then ∂u/∂r is', ['s·f_x + (1/s)·f_y', 'r·f_x + s·f_y', 's·f_x − (1/s)·f_y', 'f_x + f_y'], 0);
add(T4, 'If z = f(x, y), where x = x(t) and y = y(t), then dz/dt is given by:', ['∂z/∂x + ∂z/∂y', '(∂z/∂x)(dx/dt) + (∂z/∂y)(dy/dt)', '(∂z/∂x)(dy/dt) + (∂z/∂y)(dx/dt)', '(∂z/∂x)·(∂z/∂y)'], 1);
add(T4, 'If z = x + y, where x = t², y = t³, then dz/dt at t = 1 is:', ['5', '6', '4', '3'], 0);
add(T4, 'If u = f(x, y) and x, y are both functions of two variables r and s, then ∂u/∂r equals:', ['(∂u/∂x)(∂x/∂r) + (∂u/∂y)(∂y/∂r)', '(∂u/∂x)(∂x/∂s) + (∂u/∂y)(∂y/∂s)', '∂u/∂x + ∂u/∂y', '(∂u/∂r)(∂x/∂u)'], 0);
add(T4, 'If z = x² + y² where x = t, y = t², then dz/dt at t = 1 is:', ['2', '6', '4', '10'], 1);
add(T4, 'For z = f(x, y), x = r cosθ, y = r sinθ, the expression ∂z/∂θ involves:', ['only ∂z/∂x', 'only ∂z/∂y', 'both ∂z/∂x and ∂z/∂y', 'neither'], 2);
add(T4, 'A function z = f(x, y) is called a composite function when:', ['x and y are independent variables', 'x and y are themselves functions of other variables', 'z is constant', 'f is linear'], 1);
add(T4, 'If w = f(x, y, z) and x, y, z are functions of t, then dw/dt has how many terms (by chain rule)?', ['1', '2', '3', '4'], 2);
add(T4, 'If z = f(x, y) and x = eᵗ, y = e⁻ᵗ, the chain rule requires:', ['dx/dt and dy/dt', 'only dx/dt', 'only ∂z/∂x', 'second derivatives'], 0);
add(T4, 'If z = f(x, y), where x = 2r + s, y = r − 2s, then ∂z/∂r equals', ['2∂z/∂x + ∂z/∂y', '2∂z/∂x − ∂z/∂y', '∂z/∂x + 2∂z/∂y', '∂z/∂x − ∂z/∂y'], 0);
add(T4, 'The chain rule for composite functions extends the concept of:', ['Implicit differentiation', 'Ordinary derivative chain rule to multivariable functions', 'Integration by parts', 'Partial integration'], 1);
add(T4, 'If z = x²y, x = t², y = t³, then dz/dt is:', ['2t⁵ + 3t⁵', '4t⁶ + 3t⁶', '7t⁶', '5t⁵'], 2);
add(T4, 'If u = x² + y², x = r cosθ, y = r sinθ, then ∂u/∂r equals:', ['2r', 'r', '2r²', 'r²'], 0);
add(T4, 'If z = f(x, y), x = uv, y = u/v, then ∂z/∂u is:', ['v·∂z/∂x + (1/v)·∂z/∂y', 'v·∂z/∂x − (1/v)·∂z/∂y', 'u·∂z/∂x + (1/u)·∂z/∂y', 'v·∂z/∂x + v·∂z/∂y'], 0);
add(T4, 'If w = x² + y² + z², where x = t, y = t², z = t³, then dw/dt at t = 1 is:', ['14', '12', '16', '18'], 1);
add(T4, 'If z = xy, x = eᵗ cos t, y = eᵗ sin t, then ∂z/∂t equals:', ['e²ᵗ(sin 2t + cos 2t)', 'e²ᵗ(cos²t − sin²t)', 'e²ᵗ', 'eᵗ'], 0);
add(T4, "If z = f(x, y) is homogeneous of degree n, and x = r cosθ, y = r sinθ, then by Euler's theorem, x(∂z/∂x) + y(∂z/∂y) equals:", ['nz', 'z/n', 'n²z', 'z'], 0);
add(T4, 'If u = f(x − y, y − x), then ∂u/∂x + ∂u/∂y is:', ['0', '1', '2u', 'u'], 0);
add(T4, 'If z = f(x, y) with x = a + h, y = b + k (a small change), the total differential dz used in composite differentiation is:', ['∂z/∂x dx + ∂z/∂y dy', '∂z/∂x dx − ∂z/∂y dy', '(∂z/∂x)(∂z/∂y)', 'dx + dy'], 0);
add(T4, 'If z = x² − y², x = r cosθ, y = r sinθ, then ∂z/∂θ equals:', ['−2r² sinθ cosθ − 2r² sinθ cosθ', '−4r² sinθ cosθ', '2r² cos2θ', '−2r² sin2θ'], 3);
add(T4, 'If u = x²y + y²z + z²x, and x = t, y = t², z = t³, the number of chain-rule terms needed to compute du/dt is:', ['2', '3', '4', '6'], 1);

add(T5, 'If F(x, y) = 0 defines y implicitly as a function of x, then dy/dx is given by:', ['−(∂F/∂x)/(∂F/∂y)', '−(∂F/∂y)/(∂F/∂x)', '(∂F/∂x)/(∂F/∂y)', '(∂F/∂x) × (∂F/∂y)'], 0);
add(T5, 'If x² + y² = 25, then dy/dx at the point (3, 4) is:', ['−3/4', '3/4', '−4/3', '4/3'], 0);
add(T5, 'If z = f(x, y) and y is itself a function of x, the total derivative dz/dx is given by:', ['∂z/∂x', '∂z/∂x + (∂z/∂y)(dy/dx)', '∂z/∂x − (∂z/∂y)(dy/dx)', '(∂z/∂y)(dy/dx)'], 1);
add(T5, 'If xy = c (a constant), then dy/dx by implicit differentiation is:', ['−y/x', 'y/x', '−x/y', 'x/y'], 0);
add(T5, 'The total differential of z = f(x, y) is defined as:', ['∂z/∂x dx + ∂z/∂y dy', '∂z/∂x dy + ∂z/∂y dx', '∂z/∂x + ∂z/∂y', 'dx + dy'], 0);
add(T5, 'For z = f(x, y) with y = y(x), the total derivative dz/dx (by chain rule) has how many terms?', ['1', '2', '3', '4'], 1);
add(T5, 'If F(x, y) = 0 and ∂F/∂y = 0 at a point, then dy/dx at that point is:', ['0', '1', 'undefined', 'equal to ∂F/∂x'], 2);
add(T5, 'If x³ + y³ = 3axy then dy/dx equals:', ['(ay − x²)/(y² − ax)', '(x² − ay)/(y² − ax)', '(ay − x²)/(ax − y²)', '(x² + ay)/(y² + ax)'], 0);
add(T5, 'If x² + xy + y² = 7, then dy/dx equals:', ['−(2x + y)/(x + 2y)', '(2x + y)/(x + 2y)', '−(x + 2y)/(2x + y)', '(2x − y)/(x − 2y)'], 0);
add(T5, 'If z = x² + y² and y = x² (so y depends directly on x), the total derivative dz/dx at x = 1 is:', ['2', '4', '6', '8'], 2);
add(T5, 'If eˣ + eʸ = eˣ⁺ʸ, then dy/dx equals:', ['−(eˣ − eˣ⁺ʸ)/(eʸ − eˣ⁺ʸ)', '(eˣ − eʸ)/eˣ⁺ʸ', 'eˣ⁻ʸ', '−eʸ⁻ˣ'], 0);
add(T5, 'If z = x²y³, the total differential dz equals:', ['2xy³ dx + 3x²y² dy', '2xy³ dx − 3x²y² dy', 'x²y³(dx + dy)', '2x dx + 3y dy'], 0);

add(T6, 'If u = f(x, y), the total differential du representing the absolute error in u is given by:', ['∂u/∂x + ∂u/∂y', '∂u/∂x dx + ∂u/∂y dy', '∂u/∂x dx − ∂u/∂y dy', '∂²u/∂x∂y dx dy'], 1);
add(T6, 'If x is measured with an absolute error δx, then the percentage error in x is defined as:', ['δx/x', '(x/δx) × 100', '(δx/x) × 100', 'δx × 100'], 2);
add(T6, 'If u = xⁿ, the relative error δu/u in terms of the relative error in x is:', ['n(δx/x)', '(1/n)(δx/x)', 'n²(δx/x)', '(δx/x)ⁿ'], 0);
add(T6, 'If u = xy, and the percentage errors in x and y are 1% and 2% respectively, the percentage error in u is approximately:', ['2%', '1%', '3%', '0.5%'], 2);
add(T6, 'If u = x/y, the percentage error in u when x and y have percentage errors e₁ and e₂ respectively is:', ['e₁ − e₂', 'e₁ + e₂', 'e₁/e₂', 'e₁ · e₂'], 1);
add(T6, 'The period of a simple pendulum is T = 2π√(l/g). If the error in length l is 2%, the percentage error in T is:', ['2%', '1%', '4%', '0.5%'], 1);
add(T6, 'The area of a circle of radius r is A = πr². If the radius is measured with an error of 1.5%, the percentage error in the calculated area is:', ['1.5%', '3.0%', '2.25%', '0.75%'], 1);
add(T6, 'In calculating the volume of a sphere V = (4/3)πr³, if r increases by 1%, the percentage increase in V is:', ['1%', '3%', '4/3 %', '1/3 %'], 1);
add(T6, 'If the kinetic energy of a body is given by K = (1/2)mv², and the errors in measuring mass m and velocity v are 1% and 2% respectively, the maximum error in K is:', ['3%', '5%', '4%', '2%'], 1);
add(T6, 'If g = 2s/t², and the relative errors in s and t are 1% and 2% respectively, then the relative error in g is:', ['3%', '5%', '1%', '4%'], 1);
add(T6, 'The percentage error in the area of a rectangle when an error of +1% is made in its length and breadth is:', ['2%', '1%', '3%', '4%'], 0);

add(T7, 'According to the Reciprocal Property of Jacobians, if J = ∂(u,v)/∂(x,y) and J′ = ∂(x,y)/∂(u,v), then:', ['J · J′ = 0', 'J · J′ = 1', 'J + J′ = 1', 'J = J′'], 1);
add(T7, 'If two functions u(x, y) and v(x, y) are functionally dependent then their Jacobian J = ∂(u,v)/∂(x,y) is:', ['1', '∞', '0', '−1'], 2);
add(T7, 'If x = r cosθ and y = r sinθ, then the Jacobian ∂(x,y)/∂(r,θ) is:', ['r', '1/r', 'r²', '1'], 0);
add(T7, 'Using the Chain Rule for Jacobians, if u, v are functions of r, s and r, s are functions of x, y, then ∂(u,v)/∂(x,y) equals:', ['∂(u,v)/∂(r,s) + ∂(r,s)/∂(x,y)', '∂(u,v)/∂(r,s) · ∂(r,s)/∂(x,y)', '[∂(u,v)/∂(r,s)] / [∂(r,s)/∂(x,y)]', '∂(r,s)/∂(u,v) · ∂(x,y)/∂(r,s)'], 1);
add(T7, 'If u = x + y and v = x − y, then the value of ∂(u,v)/∂(x,y) is:', ['0', '2', '−2', '1'], 2);
add(T7, 'For spherical polar coordinates x = r sinθ cosφ, y = r sinθ sinφ, z = r cosθ, the Jacobian ∂(x,y,z)/∂(r,θ,φ) is:', ['r sinθ', 'r² sinθ', 'r cosθ', 'r sin²θ'], 1);
add(T7, 'If u = x² and v = y², then ∂(u,v)/∂(x,y) is:', ['4xy', '2xy', 'x + y', '0'], 0);
add(T7, 'If ∂(u,v)/∂(x,y) = 4, then the value of ∂(x,y)/∂(u,v) is:', ['−4', '4', '1/4', '0'], 2);
add(T7, 'For cylindrical coordinates x = ρ cosφ, y = ρ sinφ, z = z, the Jacobian ∂(x,y,z)/∂(ρ,φ,z) is:', ['ρ', 'ρ²', '1', 'ρz'], 0);
add(T7, 'If u = x(1 − y) and v = xy, then the Jacobian ∂(u,v)/∂(x,y) is:', ['x', 'y', '−x', '1'], 0);
add(T7, 'If u = x + y + z, v = y + z, w = z, then the ∂(u,v,w)/∂(x,y,z) is:', ['0', '1', '2', 'x + y + z'], 1);
add(T7, 'If u = x² − y² and v = 2xy, where x = r cosθ and y = r sinθ, then ∂(u,v)/∂(r,θ) is:', ['4r³', '2r²', 'r³', '4r'], 0);

add(T8, 'What is the constant term (first term) in the Maclaurin series expansion of f(x) = eˣ?', ['0', '1', 'e', 'x'], 1);
add(T8, 'The Maclaurin series expansion of sin x contains only:', ['Even powers of x', 'Odd powers of x', 'Positive integers only', 'Negative powers of x'], 1);
add(T8, 'In the Taylor series expansion of f(x) about x = a, the coefficient of (x − a) is given by:', ['f(a)', "f′(a)", "f″(a)/2!", "f″(a)"], 1);
add(T8, 'The Maclaurin series expansion of cos x begins as:', ['x − x³/6', '1 − x²/2', '1 + x + x²/2', 'x + x²/2'], 1);
add(T8, 'For a two-variable function f(x, y), the first term in its Maclaurin series expansion is:', ['f(1,1)', 'f(x,y)', 'f(0,0)', '0'], 2);
add(T8, 'The value of f_x(0,0) for f(x,y) = x² + 3xy + 2y is:', ['0', '2', '3', '1'], 0);
add(T8, 'The coefficient of x² in the Maclaurin series of (1 + x)⁻¹ is:', ['1', '−1', '2', '−2'], 0);
add(T8, 'The first-order linear terms in the Taylor expansion of f(x, y) about (a, b) are:', ['(x − a)f_x(a,b) + (y − b)f_y(a,b)', '(x − a)²f_x(a,b) + (y − b)²f_y(a,b)', 'f_x(a,b) + f_y(a,b)', '(x − a)(y − b)f_xy(a,b)'], 0);
add(T8, 'What is the second derivative f″(0) for f(x) = e²ˣ at x = 0?', ['1', '2', '4', '8'], 2);
add(T8, 'In the Maclaurin series of f(x,y) = eˣeʸ, the constant term is:', ['0', '1', 'e', '2'], 1);
add(T8, 'The expansion of f(x) = x² + 2x + 1 in powers of (x − 1) is:', ['4 + 4(x − 1) + (x − 1)²', '1 + 2(x − 1) + (x − 1)²', '4 + 2(x − 1) + (x − 1)²', '(x − 1)²'], 0);
add(T8, 'The coefficient of x³ in the Maclaurin expansion of f(x) = e³ˣ is:', ['3', '9/2', '27', '1'], 1);
add(T8, 'Expand f(x, y) = xy about the point (1, 2) up to first-degree terms.', ['2 + 2(x − 1) + (y − 2)', '2 + (x − 1) + 2(y − 2)', '2 + (x − 1) + (y − 2)', '2(x − 1) + 2(y − 2)'], 1);
add(T8, 'The first two non-zero terms in the Maclaurin series of f(x) = tan x are:', ['x + x²/2', 'x + x³/3', 'x − x³/3', '1 + x'], 1);
add(T8, 'What is the coefficient of xy in the Maclaurin expansion of f(x, y) = sin x · sin y?', ['0', '1', '−1', '1/2'], 1);
add(T8, 'The Taylor series expansion of f(x) = 1/x about a = 1 up to the term (x − 1)² is:', ['1 − (x − 1) + (x − 1)²', '1 + (x − 1) + (x − 1)²', '1 − (x − 1) − (x − 1)²', '1 − 2(x − 1) + (x − 1)²'], 0);
add(T8, 'For f(x, y) = x² + y², the second-order terms in the Maclaurin expansion are:', ['x + y', 'x² + y²', '2x + 2y', '2xy'], 1);
add(T8, 'The Maclaurin expansion of f(x) = log(1 − x) up to the x² term is:', ['−x − x²/2', 'x − x²/2', '−x + x²/2', 'x + x²/2'], 0);

console.log(`pdMcqQuestions: ${mcq.length} questions, ids ${mcq[0]?.id}-${mcq[mcq.length - 1]?.id}`);

module.exports = { pdMcqQuestions: mcq };
