// MCQ question bank for "Calculus MCQ" — Partial Derivatives / Euler's Theorem /
// Composite & Implicit Functions / Total Derivatives / Jacobians / Taylor &
// Maclaurin series (Lectures 1-11, per the CAT rubric the user provided).
//
// Distinct from the coding question banks: no starter code, no gcc execution —
// each question has 4 options and a single correctIndex, checked server-side
// only (never sent to the frontend) via POST /api/mcq/:id/submit.
//
// 50 questions total, weighted roughly by lecture-hours across the 4 groups:
// Partial Diff/Euler's (13), Composite/Implicit/Chain rule (13),
// Total derivatives/Errors/Approximation (11), Jacobians/Taylor/Maclaurin (13).
// Every computed answer was worked out by hand and double-checked before
// being committed here.

const mcq = [];
let id = 206;
function add(topic, question, options, correctIndex) {
  mcq.push({ id: id++, section: 'Calculus MCQ', type: 'mcq', topic, question, options, correctIndex });
}

// ===== Group A: Partial Differentiation, Euler's Theorem, Homogeneous Functions (13) =====
add('Partial Differentiation', 'If z = x²y + y³, what is ∂z/∂x?',
  ['2xy', 'x² + 3y²', '2xy + 3y²', 'x²'], 0);
add('Partial Differentiation', 'If z = x²y + y³, what is ∂z/∂y?',
  ['x² + 3y²', '2xy', 'x²', '3y²'], 0);
add('Homogeneous Functions', 'The function u = sin(x/y) is homogeneous of degree:',
  ['1', '0', '2', '-1'], 1);
add('Homogeneous Functions', 'Which of these is a homogeneous function of degree 3?',
  ['x³ + y³', 'x² + y', 'x + y²', 'xy'], 0);
add('Homogeneous Functions', 'The function f(x,y) = x⁴ + x³y + xy³ + y⁴ is homogeneous of degree:',
  ['3', '4', '2', '5'], 1);
add("Euler's Theorem", "By Euler's theorem, for f(x,y) = x³ + y³ (homogeneous of degree 3), x·fx + y·fy equals:",
  ['3f', 'f', 'f/3', '9f'], 0);
add("Euler's Theorem", 'If z is homogeneous of degree n in x and y, then x²zxx + 2xy·zxy + y²zyy equals:',
  ['n(n-1)z', 'nz', 'n²z', '(n-1)z'], 0);
add('Homogeneous Functions', 'The function f(x,y) = (x²+y²)/(x+y) is homogeneous of degree:',
  ['0', '1', '2', '-1'], 1);
add("Euler's Theorem", 'If u = x³ − 3x²y + 3xy² − y³, then x(∂u/∂x) + y(∂u/∂y) equals:',
  ['u', '2u', '3u', '0'], 2);
add('Partial Differentiation', 'Taking the partial derivative ∂f/∂x of f(x,y) means treating which variable as constant?',
  ['x', 'y', 'both x and y', 'neither'], 1);
add('Partial Differentiation', 'If z = eˣ·cos(y), then ∂z/∂x equals:',
  ['eˣcos(y)', '-eˣsin(y)', 'eˣsin(y)', 'cos(y)'], 0);
add('Partial Differentiation', 'If z = eˣ·cos(y), then ∂z/∂y equals:',
  ['eˣcos(y)', '-eˣsin(y)', 'eˣsin(y)', '-cos(y)'], 1);
add('Homogeneous Functions', 'A function f(x,y) is homogeneous of degree n if, for all t:',
  ['f(tx,ty) = tⁿf(x,y)', 'f(x,y) = nx + ny', 'f(x,y) is degree n only in x', 'f(x,0) = 0'], 0);

// ===== Group B: Tangent & Normal, Composite Functions, Implicit Functions, Chain Rule (13) =====
add('Tangent and Normal', 'For a surface z = f(x,y), the normal line at (x₀,y₀,z₀) has direction ratios:',
  ['(fx, fy, -1)', '(fx, fy, 1)', '(x₀, y₀, z₀)', '(1, 1, -1)'], 0);
add('Tangent and Normal', 'For a surface given implicitly as F(x,y,z) = 0, the direction ratios of the normal at a point are:',
  ['(Fx, Fy, Fz)', '(Fy, Fz, Fx)', '(x, y, z)', '(1, 1, 1)'], 0);
add('Chain Rule', 'If z = f(x,y), x = eᵗ, y = e⁻ᵗ, then dz/dt by the chain rule equals:',
  ['(∂z/∂x)eᵗ - (∂z/∂y)e⁻ᵗ', '(∂z/∂x)eᵗ + (∂z/∂y)e⁻ᵗ', '∂z/∂x - ∂z/∂y', '(∂z/∂x)e⁻ᵗ - (∂z/∂y)eᵗ'], 0);
add('Implicit Functions', 'If x² + y² = 25 defines y implicitly as a function of x, then dy/dx equals:',
  ['-x/y', 'x/y', '-y/x', 'y/x'], 0);
add('Partial Derivative of Composite Functions', 'If z = f(u,v), u = x+y, v = x-y, then ∂z/∂x equals:',
  ['∂z/∂u + ∂z/∂v', '∂z/∂u - ∂z/∂v', '∂z/∂u · ∂z/∂v', '2∂z/∂u'], 0);
add('Partial Derivative of Composite Functions', 'Using the same u = x+y, v = x-y, ∂z/∂y equals:',
  ['∂z/∂u + ∂z/∂v', '∂z/∂u - ∂z/∂v', '-∂z/∂u + ∂z/∂v', '∂z/∂u · ∂z/∂v'], 1);
add('Chain Rule', 'If z = f(x,y) where x and y are both functions of r and s, then ∂z/∂r equals:',
  ['(∂z/∂x)(∂x/∂r) + (∂z/∂y)(∂y/∂r)', '∂z/∂x + ∂z/∂y', '(∂z/∂x)(∂x/∂s) + (∂z/∂y)(∂y/∂s)', '(∂z/∂x)(∂x/∂r)(∂z/∂y)(∂y/∂r)'], 0);
add('Implicit Functions', 'If x² + y² + z² = 1 defines z implicitly as a function of x and y, then ∂z/∂x equals:',
  ['-x/z', 'x/z', '-z/x', '-y/z'], 0);
add('Chain Rule', 'Differentiating z = f(u) where u = g(x,y) with respect to x uses:',
  ['the product rule', 'the chain rule', 'the quotient rule', "Euler's theorem"], 1);
add('Tangent and Normal', 'The tangent plane to z = x² + y² at the point (1,1,2) is:',
  ['2x + 2y - z = 2', '2x + 2y - z = 0', 'x + y - z = 0', '2x + 2y + z = 2'], 0);
add('Total Derivatives', 'If z = f(x,y) and y is itself a function of x, then the total derivative dz/dx equals:',
  ['∂z/∂x', '∂z/∂x + (∂z/∂y)(dy/dx)', '(∂z/∂y)(dy/dx)', '(∂z/∂x)(dy/dx)'], 1);
add('Implicit Functions', 'For F(x,y,z) = 0 implicitly defining z = f(x,y), ∂z/∂y equals:',
  ['-Fy/Fz', 'Fy/Fz', '-Fz/Fy', 'Fy·Fz'], 0);
add('Partial Derivative of Composite Functions', 'If z = x²y, x = t², y = t³, then dz/dt at t = 1 (by the chain rule) equals:',
  ['7', '8', '5', '10'], 0);

// ===== Group C: Total Derivatives, Errors, Approximation (11) =====
add('Total Derivatives', 'If z = x² + y², and at some instant x=2, dx/dt=1, y=3, dy/dt=2, then dz/dt equals:',
  ['16', '8', '14', '4'], 0);
add('Errors', 'The relative error in z = xy, given relative errors dx/x and dy/y in x and y, is approximately:',
  ['dx/x + dy/y', 'dx/x - dy/y', '(dx/x)(dy/y)', '(dx/x)² + (dy/y)²'], 0);
add('Errors', 'If z = x/y, the relative error dz/z is approximately:',
  ['dx/x - dy/y', 'dx/x + dy/y', '(dx/x)(dy/y)', '-dx/x + dy/y'], 0);
add('Errors', 'A rectangle has sides x=6 and y=8, each measured with a possible error of 0.1. The approximate error in the area A=xy is:',
  ['1.4', '0.8', '0.1', '6.4'], 0);
add('Errors', 'A sphere has radius r=10 cm measured with a possible error of 0.05 cm. The approximate error in volume V=(4/3)πr³ is closest to:',
  ['62.8', '31.4', '12.56', '125.6'], 0);
add('Approximation', 'Approximation using differentials states that for small Δx, f(x+Δx) is approximately:',
  ['f(x) + f\'(x)Δx', 'f(x)·f\'(x)', 'f(x) - f\'(x)Δx', 'f\'(x)Δx'], 0);
add('Total Derivatives', 'The "total derivative" of z=f(x,y), where both x and y depend on t, refers to:',
  ['treating y as constant while differentiating w.r.t. x', 'the full rate of change of z w.r.t. t, accounting for changes in both x and y', 'the second derivative of z', 'the derivative of z w.r.t. a constant'], 1);
add('Approximation', 'If u = x²y³ and x changes from 2 to 2.01 while y stays at 1, the approximate change in u is:',
  ['0.04', '0.4', '0.01', '0.2'], 0);
add('Errors', 'The approximate relative error in z = x²y³, in terms of relative errors in x and y, is:',
  ['2(dx/x) + 3(dy/y)', '2(dx/x) - 3(dy/y)', '(dx/x) + (dy/y)', '5(dx/x)(dy/y)'], 0);
add('Errors', 'For a rectangle with sides x and y (each with small measurement error), the approximate percentage error in the perimeter P=2(x+y) is:',
  ['(dx+dy)/(x+y) × 100%', '2(dx+dy)/(x+y) × 100%', '(dx·dy)/(x+y) × 100%', '(dx/x + dy/y) × 100%'], 0);
add('Approximation', 'Error and approximation techniques using partial derivatives are most commonly applied to:',
  ['estimating error propagation in physical measurements', 'solving linear equations', 'finding eigenvalues', 'matrix inversion'], 0);

// ===== Group D: Jacobians, Taylor's Series, Maclaurin's Series (13) =====
add('Jacobians', 'For polar coordinates x = r·cosθ, y = r·sinθ, the Jacobian ∂(x,y)/∂(r,θ) equals:',
  ['r', '1', 'r²', 'sinθ·cosθ'], 0);
add('Jacobians', 'If J = ∂(u,v)/∂(x,y) and J′ = ∂(x,y)/∂(u,v), then J·J′ equals:',
  ['1', '0', 'J²', 'undefined in general'], 0);
add('Jacobians', 'If u = x², v = y², the Jacobian ∂(u,v)/∂(x,y) equals:',
  ['4xy', '2x + 2y', 'xy', '2xy'], 0);
add('Jacobians', 'If J = ∂(u,v)/∂(x,y) ≠ 0 at a point, then u and v are said to be:',
  ['functionally independent', 'functionally dependent', 'homogeneous', 'harmonic'], 0);
add('Jacobians', 'Two functions u(x,y) and v(x,y) are functionally dependent if and only if their Jacobian ∂(u,v)/∂(x,y) is:',
  ['zero', 'equal to 1', 'negative', 'undefined'], 0);
add('Jacobians', 'If u = x·cos(y), v = x·sin(y), the Jacobian ∂(u,v)/∂(x,y) equals:',
  ['x', '1', 'x²', 'cos(y)sin(y)'], 0);
add("Taylor's Series", "Taylor's series for f(x) about x=a, up to the second-degree term, is:",
  ["f(a) + f'(a)(x-a) + f''(a)(x-a)²/2", "f(a) + f'(a)x", "f(a) + f''(a)(x-a)", "f'(a)(x-a)²/2"], 0);
add("Maclaurin's Series", "The Maclaurin's series for sin(x) is:",
  ['x - x³/3! + x⁵/5! - ...', '1 - x²/2! + x⁴/4! - ...', 'x + x²/2! + x³/3! + ...', '1 + x + x²/2!'], 0);
add("Maclaurin's Series", "The Maclaurin's series for cos(x) is:",
  ['x - x³/3! + ...', '1 - x²/2! + x⁴/4! - ...', '1 + x + x²/2!', 'x + x³/3!'], 1);
add("Maclaurin's Series", "The Maclaurin's series for ln(1+x), for |x| < 1, is:",
  ['x - x²/2 + x³/3 - ...', '1 + x + x²/2!', 'x + x²/2 + x³/3', '1 - x + x² - ...'], 0);
add("Taylor's Series", "For a function of two variables, Taylor's series expansion of f(a+h, b+k), the second-order terms include:",
  ['h²fxx/2! + hk·fxy + k²fyy/2!', 'h² + k²', 'hk only', 'fxx + fyy only'], 0);
add("Maclaurin's Series", "Maclaurin's series for a function of two variables f(x,y) is Taylor's series expanded about the point:",
  ['(1,1)', '(a,b)', '(0,0)', '(∞,∞)'], 2);
add('Jacobians', 'The Jacobian is primarily used to:',
  ['change variables in multiple integrals and check functional dependence', 'solve linear systems only', 'find eigenvalues of a matrix', 'compute determinants unrelated to calculus'], 0);

module.exports = { mcqQuestions: mcq };
